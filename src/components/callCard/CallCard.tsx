import { motion } from "framer-motion";

export default function CallCard({
    title, 
    text,
    subtext,
    buttonText, 
    cardStyle = "bg-myGreen p-14 flex flex-col gap-10 items-center w-full h-full", 
    titleStyle = "text-3xl text-myBlack ", 
    textStyle = "text-lg text-myBlack ", 
    subtextStyle = "text-md text-myBlack ",
    buttonStyle = `text-md text-white bg-myBlack rounded-[10px] p-4 cursor-pointer 
    hover:scale-103 transition-all duration-150 w-full lg:max-w-9/10 `,
    animate = "scale",
    
}: {
    title: string, 
    text: string, 
    subtext?: string,
    buttonText: string, 
    cardStyle?: string, 
    titleStyle?: string, 
    textStyle?: string, 
    subtextStyle?: string,
    buttonStyle?: string,
    animate?: "scale" | "blur"
}) {
    return (
        <motion.div className={cardStyle}
                    initial={{opacity: 0, y: 50, ...(animate === "scale" ? {scale: 0.95} : {filter: "blur(10px)"})}}
                    whileInView={{opacity: 1, y: 0, ...(animate === "scale" ? {scale: 1} : {filter: "blur(0px)"})}}
                    transition={{duration: 0.6, ease: "easeOut", delay: 0.6,}}
                    viewport={{ once: true }}
                >
                    <span className={"space-grotesk-500 " + titleStyle}>
                        {title} 
                    </span>
                    <span className={"space-grotesk-400 " + textStyle}>
                        {text}
                    </span>
                    {subtext && (
                        <span className={"space-grotesk-500 text-md w-full " + subtextStyle}>
                            {subtext}
                        </span>
                    )}
                    <button className={"space-grotesk-400 " + buttonStyle}>
                        {buttonText}
                    </button>
        </motion.div>
    )
}