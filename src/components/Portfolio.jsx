import { useState } from "react";
import { motion } from "framer-motion";


export const Portfolio = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="min-h-screen bg-slate-600">
            <h1>My Recent Work</h1>
            <p>Here are a few past design projects I've worked on.</p>
            <div>
                <motion.div className="w-[450px] h-[325px] relative rounded-[15px] bg-red-700"
                    onClick={() => setIsFlipped(!isFlipped)}
                    style={{ perspective: "1000px" }}
                >
                    <motion.div
                        className="cardfront"
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: isFlipped ? -180 : 0 }}
                    >
                        holaaaaa
                        {/* <img src="https://img.freepik.com/foto-gratis/lindo-perrito-haciendose-pasar-persona-negocios_23-2148985938.jpg" alt={"imagen del proyecto"} className={}/> */}
                    </motion.div>
                    <motion.div
                        className="cardback"
                        style={{ transform: "rotateY(180deg)"}}
                        initial={{ rotateY: 180 }}
                        animate={{ rotateY: isFlipped ? 0 : 180 }}
                    >
                    {/* Contenido de la parte posterior de la tarjeta */}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}