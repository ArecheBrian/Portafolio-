import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineElement } from "../constans"
import { FaGraduationCap } from "react-icons/fa";


export const Education = ()=> {
    return (
        <div className="py-[3.5rem]">
                <h1 className="text-center">Timeline</h1>
                <p className="text-center mb-20">
                    Note that the development build is not optimized.
                    To create a production build
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
                        </VerticalTimelineElement>
                    )
                })

                }
            </VerticalTimeline>
        </div>
    )
}