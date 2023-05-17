import { useState } from "react";
import { motion } from "framer-motion";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { SiSupabase } from "react-icons/si";
import { Images } from "../assets";

export const Portfolio = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isFlipped1, setIsFlipped1] = useState(false);
    const [isFlipped2, setIsFlipped2] = useState(false);
    const [isFlipped3, setIsFlipped3] = useState(false);
    const [isFlipped4, setIsFlipped4] = useState(false);
    const [isFlipped5, setIsFlipped5] = useState(false);

    return (
        <div className="min-h-screen flex items-center flex-col pt-24">
            <h1 className="sm:text-[4rem] text-[2.8rem] mx-4 text-slate-600 font-mono text-center">My Recent Work</h1>
            <p className="sm:text-[1.3rem] text-[1rem] text-justify text-slate-600 font-mono mx-4">Here are a few past design projects I've worked on.</p>
            <div className="flex flex-row flex-wrap gap-6 justify-center py-20 w-full">
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
                    <h2 className="text-white text-[1.5rem] mt-[30px] mx-[30px]">Titulo de la App</h2>
                        <p className="text-white text-[15px] mx-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis, purus at malesuada lobortis, neque nisl consectetur eros, nec egestas diam diam sit amet massa. Nullam blandit nisi ac tortor vulputate, nec iaculis justo convallis.</p>
                        <div className="mx-[30px] flex gap-4">
                            <button className="border-2 border-white bg-transparent text-white px-3 py-1 rounded-lg text-[15px]">Visitar</button>
                            <button className="border-2 border-white bg-transparent text-white px-3 py-1 rounded-lg text-[15px]">Repositorio</button>
                        </div>
                        <div className="flex text-[27px] text-white gap-3 mx-[30px]">
                            <AiFillHtml5/>
                            <IoLogoCss3/>
                            <FaReact/>
                            <FaBootstrap/>
                            <SiSupabase/>
                        </div>
                    </motion.div>
                </motion.div>

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
                    <h2 className="text-white text-[1.5rem] mt-[30px] mx-[30px]">Titulo de la App</h2>
                        <p className="text-white text-[15px] mx-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis, purus at malesuada lobortis, neque nisl consectetur eros, nec egestas diam diam sit amet massa. Nullam blandit nisi ac tortor vulputate, nec iaculis justo convallis.</p>
                        <div className="mx-[30px] flex gap-4">
                            <button className="border-2 border-white bg-transparent text-white px-3 py-1 rounded-lg text-[15px]">Visitar</button>
                            <button className="border-2 border-white bg-transparent text-white px-3 py-1 rounded-lg text-[15px]">Repositorio</button>
                        </div>
                        <div className="flex text-[27px] text-white gap-3 mx-[30px]">
                            <AiFillHtml5/>
                            <IoLogoCss3/>
                            <FaReact/>
                            <FaBootstrap/>
                            <SiSupabase/>
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
                    <h2 className="text-white text-[1.5rem] mt-[30px] mx-[30px]">Titulo de la App</h2>
                        <p className="text-white text-[15px] mx-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis, purus at malesuada lobortis, neque nisl consectetur eros, nec egestas diam diam sit amet massa. Nullam blandit nisi ac tortor vulputate, nec iaculis justo convallis.</p>
                        <div className="mx-[30px] flex gap-4">
                            <button className="border-2 border-white bg-transparent text-white px-3 py-1 rounded-lg text-[15px]">Visitar</button>
                            <button className="border-2 border-white bg-transparent text-white px-3 py-1 rounded-lg text-[15px]">Repositorio</button>
                        </div>
                        <div className="flex text-[27px] text-white gap-3 mx-[30px]">
                            <AiFillHtml5/>
                            <IoLogoCss3/>
                            <FaReact/>
                            <FaBootstrap/>
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
                    <h2 className="text-white text-[1.5rem] mt-[30px] mx-[30px]">Titulo de la App</h2>
                        <p className="text-white text-[15px] mx-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis, purus at malesuada lobortis, neque nisl consectetur eros, nec egestas diam diam sit amet massa. Nullam blandit nisi ac tortor vulputate, nec iaculis justo convallis.</p>
                        <div className="mx-[30px] flex gap-4">
                            <button className="border-2 border-white bg-transparent text-white px-3 py-1 rounded-lg text-[15px]">Visitar</button>
                            <button className="border-2 border-white bg-transparent text-white px-3 py-1 rounded-lg text-[15px]">Repositorio</button>
                        </div>
                        <div className="flex text-[27px] text-white gap-3 mx-[30px]">
                            <AiFillHtml5/>
                            <IoLogoCss3/>
                            <FaReact/>
                            <FaBootstrap/>
                            <SiSupabase/>
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
                    <h2 className="text-white text-[1.5rem] mt-[30px] mx-[30px]">Titulo de la App</h2>
                        <p className="text-white text-[15px] mx-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis, purus at malesuada lobortis, neque nisl consectetur eros, nec egestas diam diam sit amet massa. Nullam blandit nisi ac tortor vulputate, nec iaculis justo convallis.</p>
                        <div className="mx-[30px] flex gap-4">
                            <button className="border-2 border-white bg-transparent text-white px-3 py-1 rounded-lg text-[15px]">Visitar</button>
                            <button className="border-2 border-white bg-transparent text-white px-3 py-1 rounded-lg text-[15px]">Repositorio</button>
                        </div>
                        <div className="flex text-[27px] text-white gap-3 mx-[30px]">
                            <AiFillHtml5/>
                            <IoLogoCss3/>
                            <FaReact/>
                            <FaBootstrap/>
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
                        <h2 className="text-white text-[1.5rem] mt-[30px] mx-[30px]">Titulo de la App</h2>
                        <p className="text-[15px] mx-[30px] text-red-600">Patricia no se baña Patricia no se baña Patricia no se baña Patricia no se baña Patricia no se baña </p>
                        <div className="mx-[30px] flex gap-4">
                            <button className="border-2 border-white bg-transparent text-white px-3 py-1 rounded-lg text-[15px]">Visitar</button>
                            <button className="border-2 border-white bg-transparent text-white px-3 py-1 rounded-lg text-[15px]">Repositorio</button>
                        </div>
                        <div className="flex text-[27px] text-white gap-3 mx-[30px]">
                            <AiFillHtml5/>
                            <IoLogoCss3/>
                            <FaReact/>
                            <FaBootstrap/>
                            <SiSupabase/>
                        </div>
                    </motion.div>
                </motion.div>
                
            </div>
        </div>
    )
}