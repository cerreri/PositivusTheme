import { Link } from "react-router-dom"
import PageTitle from "../../../components/pageTitle/PageTitle"
import LogoSVG from "../../../svg/LogoSvg"
import { motion } from "framer-motion"

export default function HeadSection() {
    return (
        <section>
            <div className="flex flex-col gap-10 items-center">
                <PageTitle 
                    title="Expert Digital Marketing Services" 
                    description="Unlock your business's full potential with 
                    tallored strategies to drive growth and deliver results." 
                    image="/serviceHeadImg.png" 
                />
                <Link to="/" className="flex flex-row gap-5 items-center w-7/8 group">
                    <motion.img 
                        src="/blackGreenArrowLink.png" 
                        alt="arrow" 
                        className="w-auto h-[40px] object-cover scale-x-[-1]" 
                        loading="lazy" 
                        initial={{ rotate: 0, opacity: 0 }}
                        whileInView={{ rotate: 360, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        viewport={{ once: true }}
                    />
                    <span className="space-grotesk-400 text-lg text-myBlack group-hover:scale-105 transition-transform duration-100">
                        Back
                    </span>
                </Link>
                <motion.div 
                    className={`
                    flex lg:flex-row flex-col justify-between lg:items-start items-center bg-myBlack rounded-[35px] 
                    px-[clamp(2rem,_3vw,_7rem)] py-[clamp(2rem,_3vw,_7rem)] gap-10`}
                    initial={{opacity: 0, scale: 0.95}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.6, ease: "easeInOut", delay: 0.3}}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-row lg:gap-8 gap-2 lg:w-1/3 w-4/5 lg:items-center items-start">
                        <motion.div 
                            initial={{opacity: 0, rotate: -35}}
                            whileInView={{opacity: 1, rotate: 0}}
                            transition={{duration: 0.6, ease: "easeOut", delay: 0.6}}
                            viewport={{ once: true }}
                        >
                            <LogoSVG className="text-myGreen min-w-[30px] min-h-[30px]"/>
                        </motion.div>
                        <div className="flex lg:flex-col flex-row items-start w-full">
                        {["Search Engine", "Optimization"].map((text, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 * index + 1, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className={
                                    "space-grotesk-400 text-[clamp(1rem,_3vw,_1.6rem)] " +
                                    " text-myWhite bg-myGreen rounded-[7px] px-1 py-[1px]"
                                }
                            >
                                {text}
                            </motion.span>
                        ))}
                        </div>
                    </div>
                    <motion.div 
                        className="flex flex-col gap-5 lg:w-3/5 w-4/5 items-center justify-between"
                        initial={{opacity: 0, scale: 0.95}}
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{duration: 0.6, ease: "easeInOut", delay: 0.6}}
                        viewport={{ once: true }}
                    >
                        <span className="space-grotesk-300 text-[clamp(1rem,_1.5vw,_1.2rem)] text-white">
                            SEO is the process if improving your website's visibility on search engines
                            like Google. By optimizing your content and site structure, we help your 
                            business rank higher in search results, driving more organic traffic and potential customers.
                        </span>
                        <button
                            className={"w-full space-grotesk-300 text-[clamp(1rem,_1.5vw,_1.2rem)] " +
                                "text-myBlack bg-white rounded-[10px] px-10 py-4 " +
                                "cursor-pointer hover:scale-103 transition-transform duration-130 " +
                                "hover:bg-myGreen "
                            }
                        >
                            Boost My Rankings
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}