import { BsWhatsapp, BsTelegram, BsGithub } from "react-icons/bs";
import { styles } from "../styles";

export const Contact = () => {
    return (
        <div className="min-h-screen flex items-center justify-center py-10 flex-col gap-y-16">
            <h1 className="text-center text-[4rem] text-slate-600 font-mono">Contact me</h1>
            <div className=" min-h-[70vh] w-11/12 xl:w-[1200px] rounded-xl bg-white lg:flex drop-shadow-2xl">
                <div className={styles.formFont}>
                        <div>
                            <h2 className="text-white text-[2.5rem] font-mono">Email</h2>
                            <p className="text-white mt-3 text-[1.3rem] font-mono">Arecheminayabj@gmail.com</p>
                        </div>
                        <div>
                            <h2 className="text-white text-[2.5rem] font-mono">Contact Number</h2>
                            <p className="text-white mt-3 text-[1.3rem] font-mono">+1-829-965-6448</p>
                        </div>
                        <div>
                            <h2 className="text-white text-[2.5rem] font-mono">Social media</h2>
                            <div className="flex gap-3 text-white text-[1.5rem] mt-3"><BsWhatsapp/> <BsTelegram/> <BsGithub/></div>
                        </div>
                </div>  
                <div className="lg:w-7/12 w-full min-h-[50vh] flex flex-col p-14 gap-8 justify-center">
                    <div>
                        <p className="text-slate-600 text-[1.3rem] font-mono">Messages will be answered within 24-48 hours</p>
                    </div>
                    <form className="flex flex-col gap-7">
                        <input className="h-12 rounded-xl border-2 pl-5" placeholder="Enter your name"/>
                        <input className="h-12 rounded-xl border-2 pl-5" placeholder="Enter your email address"/>
                        <textarea className="h-52 rounded-xl border-2 pl-5 pt-3" placeholder="write something"/>
                        <button className="text-white rounded-xl h-12 w-[9rem] bg-cyan-500 font-mono">Send</button>
                    </form>
                </div>              
            </div>
        </div>
    )
}