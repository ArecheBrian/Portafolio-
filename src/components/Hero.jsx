import { Images } from "../assets"
import "../index.css"

export const Hero = () => {
    return (
        <div className="min-h-screen heroFont flex row">
                <h1>Hi I'm Brian Javier Aereche</h1>
                <h2>I'm Web Developer</h2>
            <img src={Images.wave} className="w-screen absolute bottom-0"/>
        </div>
    )
}