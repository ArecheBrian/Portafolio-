import { motion, useTime, useTransform } from "framer-motion";
import { FaReact } from "react-icons/fa";

export const Navbar = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 5000], [0, 360], { clamp: false });
  return (
    <nav className="flex justify-between px-14 h-24 fixed items-center w-full">
      <div className="flex gap-5 text-white text-[1.3rem] font-mono">
        <motion.h2 className="text-[3rem]" style={{ rotate }}>
          <FaReact />
        </motion.h2>
        <h2 className="mt-3">My Portfolio</h2>
      </div>
      <div className="flex gap-8 text-white text-[1.3rem] font-mono">
        <p>Capotillo Capotillo Capotillo!</p>
        <p>Sobre mi</p>
        <p>Proyectos</p>
        <p>Experiencia</p>
        <p>Skills</p>
        <button className="">Contactame</button>
      </div>
    </nav>
  );
};
