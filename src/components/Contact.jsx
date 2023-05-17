import { BsWhatsapp, BsTelegram, BsGithub } from "react-icons/bs";
import { styles } from "../styles";
import { useState } from "react";
import axios from 'axios';

export const Contact = () => {
    const [status, setStatus] = useState({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
          });
          const [inputs, setInputs] = useState({
            name: '',
            email: '',
            message: '',
          });
          const handleServerResponse = (ok, msg) => {
            if (ok) {
              setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg },
              });
              setInputs({
                name: '',
                email: '',
                message: '',
              });
            } else {
              setStatus({
                info: { error: true, msg: msg },
              });
            }
          };
          const handleOnChange = (e) => {
            e.persist();
            setInputs((prev) => ({
              ...prev,
              [e.target.id]: e.target.value,
            }));
            setStatus({
              submitted: false,
              submitting: false,
              info: { error: false, msg: null },
            });
          };
          const handleOnSubmit = (e) => {
            e.preventDefault();
            setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
            axios({
              method: 'POST',
              url: 'https://formspree.io/f/mgebqrww',
              data: inputs,
            })
              .then((response) => {
                handleServerResponse(
                  true,
                  'Thank you, your message has been submitted.',
                );
              })
              .catch((error) => {
                handleServerResponse(false, error.response.data.error);
              });
          };
    return (
        <div className="min-h-screen flex items-center justify-center pb-10 flex-col gap-y-16" id="Contact">
            <h1 className="text-center sm:text-[4rem] text-[3rem] text-slate-600 font-mono">Contact me</h1>
            <div className=" min-h-[70vh] w-11/12 xl:w-[1200px] rounded-xl bg-white lg:flex shadow-2xl">
                <div className="lg:w-7/12 w-full min-h-[50vh] flex flex-col p-14 gap-8 justify-center">
                    <div>
                        <p className="text-slate-600 text-[1.3rem] font-mono">Messages will be answered within 24-48 hours</p>
                    </div>
                    <form className="flex flex-col gap-7" onSubmit={handleOnSubmit}>
                        <input 
                            className="h-12 rounded-xl border-2 pl-5" 
                            placeholder="Enter your name"
                            id="name"
                            onChange={handleOnChange}
                            required
                            value={inputs.name}
                        />
                        <input 
                            className="h-12 rounded-xl border-2 pl-5" 
                            placeholder="Enter your email address"
                            id="email"
                            type="email"
                            onChange={handleOnChange}
                            required
                            value={inputs.email}
                        />
                        <textarea 
                            className="h-52 rounded-xl border-2 pl-5 pt-3" 
                            placeholder="write something"
                            id="message"
                            name="message"
                            onChange={handleOnChange}
                            required
                            value={inputs.message}
                        />
                        <button className="text-white rounded-xl h-12 w-[9rem] bg-cyan-500 font-mono" type="submit" disabled={status.submitting}>
                            {!status.submitting
                            ? !status.submitted
                                ? 'Submit'
                                : 'Submitted'
                                : 'Submitting...'}
                        </button>
                    </form>
                    {status.info.error && (
                        <div className="error">Error: {status.info.msg}</div>
                    )}
                    {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
                </div> 
                <div className={styles.formFont}>
                        <div>
                            <h2 className="text-white sm:text-[2.5rem] text-[2rem] font-mono">Email</h2>
                            <p className="text-white mt-3 sm:text-[1.3rem] text-[1rem] font-mono">Arecheminayabj@gmail.com</p>
                        </div>
                        <div>
                            <h2 className="text-white sm:text-[2.5rem] text-[2rem] font-mono">Contact Number</h2>
                            <p className="text-white mt-3 sm:text-[1.3rem] text-[1rem] font-mono">+1-829-965-6448</p>
                        </div>
                        <div>
                            <h2 className="text-white sm:text-[2.5rem] text-[2rem] font-mono">Social media</h2>
                            <div className="flex gap-3 text-white text-[1.5rem] mt-3"><BsWhatsapp/> <BsTelegram/> <BsGithub/></div>
                        </div>
                </div>               
            </div>
        </div>
    )
}