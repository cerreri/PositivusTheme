import LogoSVG from "../../svg/LogoSvg";
import { motion } from "framer-motion";

export default function ProcessCard({index, item}: {index: number, item: {title: string, text: string}}) {
    return (
        <motion.div
            initial={{opacity: 0, y: 50, scale: 0.95}}
            whileInView={{opacity: 1, y: 0, scale: 1}}
            transition={{duration: 0.3, ease: "easeOut", delay: 0.1 * index}}
            viewport={{ once: true }}
            className="flex lg:flex-row flex-col gap-[clamp(1rem,2vw,5rem)] items-start bg-myGray rounded-[25px] px-10 py-10"
            >
                <div className="relative flex-shrink-0 w-[clamp(40px,8%,80px)] aspect-square lg:flex hidden">
                    <LogoSVG className="text-myBlack w-full h-full" />
                    <span className={
                        "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " + 
                        " space-grotesk-500 text-[clamp(1.2rem,3vw,2.5rem)] text-myGreen"}>
                    0{index + 1}
                    </span>
                </div>
                <div className="flex lg:flex-col flex-row gap-10 w-full items-center lg:items-start justify-between">
                    <div className="relative flex-shrink-0 w-[clamp(40px,8%,80px)] aspect-square lg:hidden flex">
                        <LogoSVG className="text-myBlack w-full h-full" />
                        <span className={
                            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " + 
                            " space-grotesk-500 text-[clamp(1.2rem,3vw,2.5rem)] text-myGreen"}>
                        0{index + 1}
                        </span>
                    </div>
                    <span className="space-grotesk-500 text-[clamp(1.2rem,3vw,1.6rem)] w-full">
                        {item.title}
                    </span>
                    <span className="space-grotesk-400 text-[clamp(0.8rem,1.5vw,1.2rem)] lg:block hidden">
                        {item.text}
                    </span>
                </div>
                <div className="flex flex-col gap-2 w-full lg:hidden">
                    <span className="space-grotesk-400 text-[clamp(0.8rem,1.5vw,1.2rem)]">
                        {item.text}
                    </span>
                </div>
        </motion.div>
    )
}