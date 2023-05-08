import { technology } from "../constans"
import "../index.css"
import { BallCanvas } from "./canvas/Ball"


export const Tech = () => {
    return (
        <div className="heroFont min-h-[60vh] flex flex-col justify-center items-center py-11 gap-20 px-8">
            <h1 className="">Technology Stack</h1>
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