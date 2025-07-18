import { motion } from "framer-motion";

export default function BlogBlock({title, text, subtext, special}: {title: string, text: string, subtext?: string, special?: string}) {
    return (
        <motion.div className="flex flex-col gap-4 items-start w-full"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{delay: 0.3, ease: "easeInOut"}}
                        viewport={{ once: true }}
                    >
                        <h3 className="space-grotesk-500 text-[clamp(20px,_2vw,_40px)]">
                            {title}
                        </h3>
                        {special && (
                            <span className="space-grotesk-300 text-[clamp(22px,_2vw,_24px)] pl-10 border-l-4 border-myGreen">
                                {special}
                            </span>
                        )}
                        <span className="space-grotesk-400 text-[clamp(16px,_2vw,_18px)]">
                            {text}
                        </span>
                        {subtext && (
                            <span className="space-grotesk-400 text-[clamp(16px,_2vw,_18px)]">
                                {subtext}
                            </span>
                        )}
        </motion.div>
    )
}