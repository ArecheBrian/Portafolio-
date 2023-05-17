import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineElement } from "../constans"
import { FaGraduationCap } from "react-icons/fa";


export const Education = ()=> {
    return (
        <div className="pb-[3.5rem] px-4" id="Education">
            <h1 className="text-center sm:text-[4rem] text-[3rem] text-slate-600 font-mono">Timeline</h1>
            <p className="text-center mb-20 text-slate-600 sm:text-[1.3rem] text-[1rem] font-mono">
                Below you will see a timeline where some of my educational processes are represented
            </p>
            <VerticalTimeline>
                {timelineElement.map((element)=> {
                    return (
                        <VerticalTimelineElement
                            key={element.id}
                            date={element.date}
                            dateClassName="text-stone-400"
                            iconClassName="iconStyle"
                            icon={<FaGraduationCap/>}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {element.title}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle">
                                {element.location}
                            </h5>
                            <p id="description">{element.description}</p>
                            <a className="text-blue-700" href={element.link}>{element.btnText}</a>
                        </VerticalTimelineElement>
                    )
                })

                }
            </VerticalTimeline>
        </div>
    )
}