import { technology } from "../constans"
import "../index.css"
import { styles } from "../styles"
import { BallCanvas } from "./canvas/Ball"


export const Tech = () => {
    return (
        <div className={styles.tStackFont}>
            <h1 className="text-white text-[4rem] font-mono">Technology Stack</h1>
            <div className="lg:w-8/12 flex flex-row flex-wrap justify-center gap-10">
                {technology.map((item)=> (
                    <div className='w-28 h-28' key={item.name}>
                        <BallCanvas icon={item.icon} />
                    </div>
                ))}
            </div>
        </div>
    )
}