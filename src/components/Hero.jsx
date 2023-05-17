import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import "../index.css"
import { styles } from "../styles"
import SvgComponent from "../assets/svgWave";

export const Hero = () => {
    return (
        <div className={styles.fondo} id="Home">
            <div className=" w-11/12 xl:w-[1200px] flex flex-col gap-4 justify-center mt-28">
                <div>
                    <h3 className="text-white text-[1rem] sm:text-[1.5rem] font-mono">Hi my name is</h3>
                    <div className="flex flex-wrap gap-5">
                        <div className="TextAnimate">
                            <h1 className="borderText text-[4rem] xl:text-[6rem]">Brian Javier</h1>
                            <h1 className="waves text-[4rem] xl:text-[6rem] text-white">Brian Javier</h1>
                        </div>
                        <div className="TextAnimate">
                            <h1 className="borderText text-[4rem] xl:text-[6rem] m-0">Areche Minaya</h1>
                            <h1 className="waves text-[4rem] xl:text-[6rem] text-white m-0 p-0">Areche Minaya</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-white text-[2rem] xl:text-[4rem] font-mono">I'm software developer</h2>
                    <p className="text-white text-[1rem] xl:text-[1.5rem] font-mono">Welcome to my web portfolio! I am a junior programmer specialized in web and mobile application development. My goal is to use my technical skills and my passion for programming to build engaging and functional digital experiences.</p>
                </div>
                <div className="flex gap-4 text-[1.4rem] text-white mt-8">
                    <BsGithub/>
                    <BsLinkedin/>
                    <BsWhatsapp/>
                </div>
            </div>
            {/* <SvgComponent/> */}
        </div>
    )
}