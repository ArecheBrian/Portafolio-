import "../index.css"
import { AboutInfo } from "../constans"

export const About = () => {
    return (
        <div className="min-h-[90vh] flex flex-col justify-center items-center">
            <div className="sm:w-2/3 w-full px-[3rem]">
                <h3 className="mb-2">Introduction</h3>
                <h1 className="mb-8">OverView</h1>
                <p>{AboutInfo.aboutMe}</p>
            </div>
            
            <div className="w-full sm:w-2/3 flex justify-center gap-y-[3rem] gap-x-[3rem] flex-wrap py-[3rem]">
                {AboutInfo.services.map((item)=>(
                    <div className="h-80 w-80 rounded-lg heroFont flex justify-center items-center" key={item.title}>
                    <div className="rounded-lg flex flex-col justify-center items-center gap-7" style={{height: "97%", width: "97%", backgroundColor: "white"}}>
                        <img src={item.icon} className="h-[100px] w-[100px]"/>
                        <h3>{item.title}</h3>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}