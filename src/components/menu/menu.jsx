import { motion } from "framer-motion"


const Path = (props) => {
    return (
        <motion.path
            fill="transparent"
            strokeWidth="3"
            stroke="hls(0, 0%, 18%)"
            strokeLinecap="round"
            {...props}
        />
    )
}