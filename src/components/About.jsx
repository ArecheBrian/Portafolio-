import "../index.css"
import { AboutInfo } from "../constans"
import { styles } from "../styles"

export const About = () => {
    return (
        <div className="min-h-[100vh] flex flex-col justify-center items-center py-24">
            <div className="w-11/12 xl:w-[1200px] sm:px-[3rem] px-4">
                <h3 className="mb-2 text-slate-600 sm:text-[1.5rem] text-[1rem] font-mono">Introduction</h3>
                <h1 className="mb-8 sm:text-[4rem] text-[3rem] text-slate-600 font-mono">Overview</h1>
                <p className="text-slate-600 sm:text-[1.3rem] text-[1rem] font-mono text-justify">{AboutInfo.aboutMe}</p>
            </div>
            
            <div className="w-11/12 xl:w-[1200px] flex justify-center gap-[3rem] flex-wrap py-[3rem]">
                {AboutInfo.services.map((item)=>(
                    <div className={styles.aboutFontCard} key={item.title}>
                    <div className="rounded-lg flex flex-col justify-center items-center gap-7" style={{height: "97%", width: "97%", backgroundColor: "white"}}>
                        <img src={item.icon} className="h-[100px] w-[100px]"/>
                        <h3 className="font-mono text-slate-600 font-bold">{item.title}</h3>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}