import { motion } from "framer-motion";

export default function BlogCards() {
    return (
        <motion.div className="flex flex-col gap-4 items-start w-full"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{delay: 0.3, ease: "easeInOut"}}
                        viewport={{ once: true }}
        >
            <h3 className="space-grotesk-500 text-[clamp(20px,_2vw,_40px)]">
                By the Numbers: Facts About PPC and Organic Marketing
            </h3>
                       
            <div className="flex flex-col gap-4 xl:w-[120%] w-full xl:relative xl:-left-25">
                <div className="flex xl:flex-row flex-col xl:gap-8 gap-4 w-full">
                    <motion.div className={`
                        flex flex-col gap-2 xl:w-1/3 w-full border-myBlack border-b-4 border-1 
                        rounded-[25px] p-10 items-start justify-center `}
                        initial={{opacity: 0, scale: 0.95}}
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{delay: 0.3, ease: "easeInOut"}}
                        viewport={{ once: true }}
                    >
                        <span className="space-grotesk-400 text-[clamp(14px,_2vw,_18px)]">
                            Businesses earn an average of
                        </span>
                        <span className="space-grotesk-500 text-[clamp(20px,_2vw,_24px)]">
                            $2 for every $1 spent
                        </span>
                        <span className="space-grotesk-400 text-[clamp(14px,_2vw,_18px)]">
                            on PPC advertising
                        </span>
                    </motion.div>
                    <motion.div className="flex flex-col gap-2 xl:w-2/3 w-full bg-myGreen rounded-[25px] p-10 items-start justify-center"
                        initial={{opacity: 0, scale: 0.95}}
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{delay: 0.6, ease: "easeInOut"}}
                        viewport={{ once: true }}
                    >
                        <span className="space-grotesk-500 text-[clamp(20px,_2vw,_24px)]">
                            41% of clicks
                        </span>
                        <span className="space-grotesk-400 text-[clamp(16px,_2vw,_18px)]">
                            on search engines go to the top three organic results, showing the 
                            importance of ranking highly
                        </span>
                    </motion.div>
                </div>
                <div className="flex xl:flex-row flex-col xl:gap-8 gap-4 w-full">
                    <motion.div className="flex flex-col gap-2 xl:w-3/5 w-full bg-myGray rounded-[25px] p-10 items-start justify-center"
                        initial={{opacity: 0, scale: 0.95}}
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{delay: 0.9, ease: "easeInOut"}}
                        viewport={{ once: true }}
                    >
                        <span className="space-grotesk-400 text-[clamp(14px,_2vw,_16px)] flex flex-row gap-2 w-full items-center">
                            <span>Content marketing costs</span>
                            <span className="space-grotesk-500 text-[clamp(14px,_2vw,_18px)] text-myBlack">
                                62% less than paid ads
                            </span>
                        </span>
                        <span className="space-grotesk-400 text-[clamp(14px,_2vw,_16px)] flex flex-row gap-2 w-full items-center">
                            <span>but generates</span>
                            <span className="space-grotesk-500 text-[clamp(14px,_2vw,_18px)] text-myBlack">
                                3x as many leads
                            </span>
                        </span>
                    </motion.div>
                    <motion.div className={`
                        flex flex-col gap-2 xl:w-2/5 w-full bg-myBlack text-white
                        rounded-[25px] p-10 items-start justify-center `}
                        initial={{opacity: 0, scale: 0.95}}
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{delay: 1.2, ease: "easeInOut"}}
                        viewport={{ once: true }}
                    >
                        <span className="space-grotesk-400 text-[clamp(16px,_2vw,_18px)]">
                            Organic search drives
                        </span>
                        <span className="space-grotesk-500 text-[clamp(20px,_2vw,_24px)] flex flex-row gap-2 w-full items-center">
                            <span className="space-grotesk-500 text-[clamp(20px,_2vw,_24px)] text-myGreen">
                                53%
                            </span>
                            <span className="space-grotesk-500 text-[clamp(14px,_2vw,_21px)]">
                                of all website traffic,
                            </span>
                        </span>
                        <span className="space-grotesk-400 text-[clamp(16px,_2vw,_18px)]">
                            making it the largest single source of traffic
                        </span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}