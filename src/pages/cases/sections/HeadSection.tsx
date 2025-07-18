import PageTitle from "../../../components/pageTitle/PageTitle";
import { motion } from "framer-motion";


type StoryItem = {
    title: string;
    text: string;
}

const storyItems: StoryItem[] = [
    {
        title: "200%",
        text: "increase in organic traffic"
    },
    {
        title: "150%",
        text: "rise in online sales"
    },
    {
        title: "75%",
        text: "reduction in cost-per-click (CPC)"
    },
    {
        title: "300%",
        text: "improvement in conversion rate"
    }
    
]

export default function HeadSection() {
    return (
        <section className="overflow-hidden">
            <div className="flex flex-col gap-10 items-center w-full h-full">
                <PageTitle 
                    title="Proven Success Stories"
                    description={
                        "See how our innovative digital marketing strategies have transformed businesses. " +
                        "Whether through SEO, PPC, social media, or web design, these use cases highlight " +
                        "the tangible impact of our work. Explore the successes and envision what we " +
                        "can achieve together."
                    }
                    image="/casePageHeadImg.png"
                />
                <motion.div 
                    className="flex lg:flex-row flex-col gap-10 p-10 bg-myBlack rounded-[35px] h-full w-full"
                    initial={{opacity: 0, y: 50, scale: 0.85}}
                    whileInView={{opacity: 1, y: 0, scale: 1}}
                    transition={{duration: 0.6, ease: "easeOut", delay: 0.3}}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col gap-15 items-start h-full flex-grow lg:w-1/2 w-full">
                        <motion.span className="space-grotesk-500 text-[clamp(1.2rem,_3vw,_2rem)] bg-myGreen rounded-md px-4 py-1"
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, ease: "easeOut", delay: 0.6}}
                            viewport={{ once: true }}
                        >
                            Featured Success Story
                        </motion.span>
                        <motion.span className="space-grotesk-500 text-3xl w-full text-white"
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, ease: "easeOut", delay: 0.9}}
                            viewport={{ once: true }}
                        >
                            Scaling Success for a Leading E-Commerce Brand
                        </motion.span>
                        <motion.span className="space-grotesk-300 text-md w-full text-white"
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, ease: "easeOut", delay: 1.2}}
                            viewport={{ once: true }}
                        >
                            Through a comprehensive SEO and PPC strategy, we helped 
                            this e-commerce brand increase visibility, drive traffic, 
                            and boost sales.
                        </motion.span>
                        <div className="lg:flex flex-row gap-4 items-center cursor-pointer group hidden">
                            <motion.img 
                                src="/greenBlackArrowLink.png" 
                                alt="arrow" 
                                className="w-auto h-[30px] object-cover"
                                initial={{opacity: 0, rotate: 0}}
                                whileInView={{opacity: 1, rotate: 360}}
                                transition={{duration: 0.6, ease: "easeOut", delay: 0.6}}
                                viewport={{ once: true }}
                            />
                            <motion.span className="space-grotesk-400 text-md text-myGreen group-hover:scale-105 transition-all duration-100"
                                initial={{opacity: 0, x: 50}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{delay: 0.3, type: "spring", stiffness: 300, damping: 20}}
                                viewport={{ once: true }}
                            >
                                Read
                            </motion.span>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:w-1/2 w-full">
                        {storyItems.map((item, index) => (
                            <motion.div 
                                initial={{opacity: 0, rotateY: 50}}
                                whileInView={{opacity: 1, rotateY: 0}}
                                transition={{duration: 0.6, ease: "easeOut", delay: 0.3 + index * 0.1}}
                                viewport={{ once: true }}
                                key={index} 
                                className="flex flex-col gap-2 items-center justify-center bg-white rounded-[35px] w-full p-7">
                                <span className="space-grotesk-500 text-[clamp(1.6rem,_3vw,_3rem)] text-myBlack rounded-md px-4 py-1">
                                    {item.title}
                                </span>
                                <span className="space-grotesk-400 text-lg text-myBlack">
                                    {item.text}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div className="lg:hidden flex flex-row gap-4 items-center cursor-pointer group w-full"
                        initial={{opacity: 0, rotateY: 50}}
                        whileInView={{opacity: 1, rotateY: 0}}
                        transition={{duration: 0.6, ease: "easeOut", delay: 0.3}}
                        viewport={{ once: true }}
                    >
                        <img src="/greenBlackArrowLink.png" alt="arrow" className="w-[30px] h-auto object-cover" />
                        <span className="space-grotesk-400 text-md text-myGreen group-hover:scale-105 transition-all duration-100">
                            Read
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}