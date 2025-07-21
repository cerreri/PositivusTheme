import { motion } from "framer-motion"

export default function HeadSection() {
    return (
        <section className="overflow-hidden">
            <div className="flex flex-col gap-20">
                <div className="w-full h-full flex flex-col items-center justify-center gap-10 md:flex-row-reverse">
                    <div className="md:w-1/2 w-4/5">
                        <motion.img 
                            src="/HomeSectionHeadImage.png" 
                            alt="Head Section Image" 
                            className="w-full h-auto object-cover" 
                            initial={{opacity: 0, filter: "blur(10px)"}}
                            animate={{opacity: 1, filter: "blur(0px)"}}
                            transition={{duration: 0.5, ease: "easeInOut"}}
                            viewport={{ once: true }}
                        />
                    </div>
                    <div className="md:w-1/2 w-full h-full flex flex-col items-center justify-center gap-3 md:gap-7">
                        <motion.h1 
                            className="space-grotesk-500 w-full text-center text-[clamp(30px,_5vw,_90px)]"
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.1, delay: 0, damping: 15, type: "spring", stiffness: 300}}
                            viewport={{ once: true }}
                        >
                            Navigating the <br />
                            digital landscape <br />
                            for success
                        </motion.h1>
                        <motion.span 
                            className="space-grotesk-400 text-[clamp(12px,_2vw,_17px)] w-full text-center leading-7"
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.1, delay: 0.5, damping: 15, type: "spring", stiffness: 300}}
                            viewport={{ once: true }}
                        >
                            Our digital marketing agency helps 
                            businesses grow and succeed online 
                            through a range of services including 
                            SEO, PPC, social media marketing, and content creation.
                        </motion.span>
                        <motion.button 
                            className={
                            "space-grotesk-400 text-[17px] w-auto h-[70px] " + 
                            " text-center bg-black rounded-2xl px-10 py-3 cursor-pointer border-1 border-black " +
                            " hover:bg-white hover:text-black transition-all duration-50 text-white"}
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.1, delay: 1, damping: 15, type: "spring", stiffness: 300}}
                            viewport={{ once: true }}
                        >
                            <span className="space-grotesk-400 text-[clamp(12px,_2vw,_17px)]">
                                Book a consultation
                            </span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    )
}