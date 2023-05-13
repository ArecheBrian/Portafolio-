import { motion, useTime, useTransform } from 'framer-motion';
import { useState } from 'react';
import { FaReact } from 'react-icons/fa';
import { FiMenu } from "react-icons/fi";

export const Navbar = () => {
    const [menuStatus, setMenuStatus] = useState(false)
    const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
    return (
        <nav className="flex flex-col lg:flex-row justify-between px-4 lg:px-14 fixed w-full bg-white z-20 drop-shadow-lg">
            <div className="flex gap-5 text-[1.3rem] font-mono text-slate-600 h-24 w-full lg:w-auto items-center">
                <motion.h2 className="text-[3rem]"><FaReact/></motion.h2 >
                <h2>My Portfolio</h2>
                <button className="absolute right-6 block lg:hidden" onClick={()=> setMenuStatus(!menuStatus)}><FiMenu/></button>
            </div>
            <div className={`self-center hidden lg:block`}>
                <ul className='flex flex-col lg:flex-row gap-8 text-slate-600 text-[1.3rem] font-mono items-center py-4'>
                    <li>Sobre mi</li>
                    <li>Proyectos</li>
                    <li>Experiencia</li>
                    <li>Skills</li>
                    <li><button className="">Contactame</button></li>
                </ul>
            </div>
            <div className={menuStatus? 'block': 'hidden'}>
                <ul className='flex flex-col gap-8 text-slate-600 text-[1.3rem] font-mono items-center py-4'>
                    <li>Sobre mi</li>
                    <li>Proyectos</li>
                    <li>Experiencia</li>
                    <li>Skills</li>
                    <li><button className="">Contactame</button></li>
                </ul>
            </div>
        </nav>
    )
}
