import { useState } from "react";
import { motion } from "framer-motion";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiSupabase, SiTailwindcss } from "react-icons/si";
import { Images } from "../assets";

export const Portfolio = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isFlipped1, setIsFlipped1] = useState(false);
    const [isFlipped2, setIsFlipped2] = useState(false);
    const [isFlipped3, setIsFlipped3] = useState(false);
    const [isFlipped4, setIsFlipped4] = useState(false);
    const [isFlipped5, setIsFlipped5] = useState(false);

    return (
        <div className="min-h-screen flex items-center flex-col pt-24" id="Portfolio">
            <h1 className="sm:text-[4rem] text-[2.8rem] mx-4 text-slate-600 font-mono text-center">My Recent Work</h1>
            <p className="sm:text-[1.3rem] text-[1rem] text-justify text-slate-600 font-mono mx-4">Here you can see some of the projects I have worked on</p>
            <div className="flex flex-row flex-wrap gap-6 justify-center py-20 w-full">
                {/* segundo  */}
                <motion.div className="sm:w-[450px] w-[88%] sm:h-[325px] h-[375px] relative rounded-[15px]"
                    onClick={() => setIsFlipped1(!isFlipped1)}
                    whileHover={{ scale: 1.05 }}
                    style={{ perspective: "1000px" }}
                >
                    <motion.div
                        className='cardfront'
                        style={{
                            backgroundImage: `url(${Images.ptfCoop})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                          }}
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: isFlipped1 ? -180 : 0 }}
                    >
                    </motion.div>
                    <motion.div
                        className="cardback"
                        style={{ transform: "rotateY(180deg)"}}
                        initial={{ rotateY: 180 }}
                        animate={{ rotateY: isFlipped1 ? 0 : 180 }}
                    >
                    {/* Contenido de la parte posterior de la tarjeta */}
                    <h2 className="text-white text-[1.5rem] mt-[30px] mx-[30px]">Coopinnovadores</h2>
                        <p className="text-white text-[15px] mx-[30px]">Coopinnovadores is a project based on react that I developed for a cooperative dedicated to supporting young people on their path towards innovation and entrepreneurship.</p>
                        <div className="mx-[30px] flex gap-4">
                            <a href="https://coopinnovadores.vercel.app/" target="_blank" className="border-2 border-white bg-transparent text-white px-3 py-1 rounded-lg text-[15px]">Visit</a>
                            <a href="https://github.com/jdgr29/coopinnovadores.git" target="_blank"  className="border-2 border-white bg-transparent text-white px-3 py-1 rounded-lg text-[15px]">Repo</a>
                        </div>
                        <div className="flex text-[27px] text-white gap-3 mx-[30px]">
                            <AiFillHtml5/>
                            <IoLogoCss3/>
                            <FaReact/>
                            <FaBootstrap/>
                        </div>
                    </motion.div>
                </motion.div>

                {/* primero  */}
                <motion.div className="sm:w-[450px] w-[88%] sm:h-[325px] h-[375px] relative rounded-[15px]"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setIsFlipped(!isFlipped)}
                    style={{ perspective: "1000px" }}
                >
                    <motion.div
                        className='cardfront'
                        style={{
                            backgroundImage: `url(${Images.ptfNft})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                          }}
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: isFlipped ? -180 : 0 }}
                    >
                    </motion.div>
                    <motion.div
                        className="cardback"
                        style={{ transform: "rotateY(180deg)"}}
                        initial={{ rotateY: 180 }}
                        animate={{ rotateY: isFlipped ? 0 : 180 }}
                    >
                    {/* Contenido de la parte posterior de la tarjeta */}
                    <h2 className="text-white text-[1.5rem] mt-[30px] mx-[30px]">NFT market</h2>
                        <p className="text-white text-[15px] mx-[30px]">In this project i built the visual part of nft market using react native, this was the first app i built using react native.</p>
                        <div className="mx-[30px] flex gap-4">
                            <a target="_blank" className="border-2 border-white bg-transparent text-white px-3 py-1 rounded-lg text-[15px]" href="https://github.com/ArecheBrian/NFTmarket.git">Repo</a>
                        </div>
                        <div className="flex text-[27px] text-white gap-3 mx-[30px]">
                            <FaReact/>
                        </div>
                    </motion.div>
                </motion.div>
                
                {/* tercero  */}
                <motion.div className="sm:w-[450px] w-[88%] sm:h-[325px] h-[375px] relative rounded-[15px]"
                    onClick={() => setIsFlipped2(!isFlipped2)}
                    whileHover={{ scale: 1.05 }}
                    style={{ perspective: "1000px" }}
                >
                    <motion.div
                        className='cardfront'
                        style={{
                            backgroundImage: `url(${Images.ptfBus})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                          }}
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: isFlipped2 ? -180 : 0 }}
                    >
                    </motion.div>
                    <motion.div
                        className="cardback"
                        style={{ transform: "rotateY(180deg)"}}
                        initial={{ rotateY: 180 }}
                        animate={{ rotateY: isFlipped2 ? 0 : 180 }}
                    >
                    {/* Contenido de la parte posterior de la tarjeta */}
                    <h2 className="text-white text-[1.5rem] mt-[30px] mx-[30px]">BusTrakingApp</h2>
                        <p className="text-white text-[15px] mx-[30px]">BusTrackingApp is an innovative mobile application developed to provide users with an efficient and convenient experience when using public transport service. With this app, users can see nearby bus stops and track their location in real time, allowing them to plan their trips more effectively and optimize their time.</p>
                        <div className="mx-[30px] flex gap-4">
                            <a target="_blank" href="https://github.com/ArecheBrian/BusTrakingApp.git" className="border-2 border-white bg-transparent text-white px-3 py-1 rounded-lg text-[15px]">Repo</a>
                        </div>
                        <div className="flex text-[27px] text-white gap-3 mx-[30px]">
                            <FaReact/>
                            <TbBrandRedux/>
                            <SiSupabase/>
                        </div>
                    </motion.div>
                </motion.div>


                {/* cuarto  */}
                <motion.div className="sm:w-[450px] w-[88%] sm:h-[325px] h-[375px] relative rounded-[15px]"
                    onClick={() => setIsFlipped3(!isFlipped3)}
                    whileHover={{ scale: 1.05 }}
                    style={{ perspective: "1000px" }}
                >
                    <motion.div
                        className='cardfront'
                        style={{
                            backgroundImage: `url(${Images.ptfPokemon})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                          }}
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: isFlipped3 ? -180 : 0 }}
                    >
                    </motion.div>
                    <motion.div
                        className="cardback"
                        style={{ transform: "rotateY(180deg)"}}
                        initial={{ rotateY: 180 }}
                        animate={{ rotateY: isFlipped3 ? 0 : 180 }}
                    >
                    {/* Contenido de la parte posterior de la tarjeta */}
                    <h2 className="text-white text-[1.5rem] mt-[30px] mx-[30px]">PokeApp</h2>
                        <p className="text-white text-[15px] mx-[30px]">This is an exciting web app designed for Pokemon lovers who want to explore and discover the vast variety of creatures in this fascinating world. With an intuitive interface and full of detailed information.</p>
                        <div className="mx-[30px] flex gap-4">
                            <button className="border-2 border-white bg-transparent text-white px-3 py-1 rounded-lg text-[15px]">Visit</button>
                            <button className="border-2 border-white bg-transparent text-white px-3 py-1 rounded-lg text-[15px]">Repo</button>
                        </div>
                        <div className="flex text-[27px] text-white gap-3 mx-[30px]">
                            <AiFillHtml5/>
                            <IoLogoCss3/>
                            <FaReact/>
                            <TbBrandRedux/>
                            <SiTailwindcss/>
                        </div>
                    </motion.div>
                </motion.div>


                {/* quinto  */}
                <motion.div className="sm:w-[450px] w-[88%] sm:h-[325px] h-[375px] relative rounded-[15px]"
                    onClick={() => setIsFlipped4(!isFlipped4)}
                    whileHover={{ scale: 1.05 }}
                    style={{ perspective: "1000px" }}
                >
                    <motion.div
                        className='cardfront'
                        style={{
                            backgroundImage: `url(${Images.ptfFood})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                          }}
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: isFlipped4 ? -180 : 0 }}
                    >
                    </motion.div>
                    <motion.div
                        className="cardback"
                        style={{ transform: "rotateY(180deg)"}}
                        initial={{ rotateY: 180 }}
                        animate={{ rotateY: isFlipped4 ? 0 : 180 }}
                    >
                    {/* Contenido de la parte posterior de la tarjeta */}
                    <h2 className="text-white text-[1.5rem] mt-[30px] mx-[30px]">Cookpedia</h2>
                        <p className="text-white text-[15px] mx-[30px]">Cookpedia is a social network where users can share cooking recipes and have a chat to communicate</p>
                        <div className="mx-[30px] flex gap-4">
                            <a target="_blank" href="https://github.com/ArecheBrian/Cookpedia.git" className="border-2 border-white bg-transparent text-white px-3 py-1 rounded-lg text-[15px]">Repo</a>
                        </div>
                        <div className="flex text-[27px] text-white gap-3 mx-[30px]">
                            <FaReact/>
                            <TbBrandRedux/>
                            <SiSupabase/>
                        </div>
                    </motion.div>
                </motion.div>

                {/* sexto  */}
                <motion.div className="sm:w-[450px] w-[88%] sm:h-[325px] h-[375px] relative rounded-[15px]"
                    onClick={() => setIsFlipped5(!isFlipped5)}
                    whileHover={{ scale: 1.05 }}
                    style={{ perspective: "1000px" }}
                >
                    <motion.div
                        className='cardfront'
                        style={{
                            backgroundImage: `url(${Images.ptfPortafolio})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                          }}
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: isFlipped5 ? -180 : 0 }}
                    >
                    </motion.div>
                    <motion.div
                        className="cardback"
                        style={{ transform: "rotateY(180deg)"}}
                        initial={{ rotateY: 180 }}
                        animate={{ rotateY: isFlipped5 ? 0 : 180 }}
                    >
                    {/* Contenido de la parte posterior de la tarjeta */}
                        <h2 className="text-white text-[1.5rem] mt-[30px] mx-[30px]">My Portfolio</h2>
                        <p className="text-[15px] mx-[30px] text-white">In this project I reflected my career as a student and I put some of the projects in which I have participated and my personal projects, this page will continue to develop as I gain more experience </p>
                        <div className="mx-[30px] flex gap-4">
                            <a target="_blank" href="https://github.com/ArecheBrian/Portafolio-.git" className="border-2 border-white bg-transparent text-white px-3 py-1 rounded-lg text-[15px]">Repo</a>
                        </div>
                        <div className="flex text-[27px] text-white gap-3 mx-[30px]">
                            <AiFillHtml5/>
                            <IoLogoCss3/>
                            <FaReact/>
                            <FaBootstrap/>
                        </div>
                    </motion.div>
                </motion.div>
                
            </div>
        </div>
    )
}