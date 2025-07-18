import TitleOfSection from "../../../components/titleOfSection/TitleOfSection"
import LogoSVG from "../../../svg/LogoSvg";
import { motion } from "framer-motion";


type JourneyItem = {
    year: string;
    title: string;
    text: string;
}

const journeyArr: JourneyItem[] = [
    {
        year: "2022", title: "The Beginning", 
        text: "Positivus was founded to help businesses navigate the digital world and achieve online success."
    },
    {
        year: "2023", title: "Industry Recognition",
        text: "Positivus was named among the top 50 global digital agencies, affirming our leadership."
    },
    {
        year: "2024", title: "Innovation and Growth",
        text: "With over 50 experts, we continue to deliever cutting-edge solutions to help businesses thrive."
    },
    {
        year: "2025", title: "Leading the Future",
        text: "This year, Positivus is pioneering the use of AI and automation to deliver even more personalized, " + 
        "data-driven strategies and setting new standards in digital marketing."
    }
]

export default function JourneySection() {
    return (
        <section className="overflow-hidden">
            <div className="flex flex-col items-center gap-10 w-full h-full">
                <TitleOfSection 
                    title="Our Journey"
                    text={
                        "from humble beginnings to industry leaders, discover how Positivus" + 
                        "has evolved to drive success for businesses worldwide"
                    }
                />
                <div className="flex flex-col lg:gap-10 gap-15 items-center md:w-3/5 w-full h-full lg:mt-0 mt-20">
                    {journeyArr.map((item, index) => (
                        <motion.div 
                            key={item.year + index} 
                            className={`
                                flex flex-col gap-5 lg:items-center items-start w-full h-full relative`}
                                initial={{
                                    opacity: 0,
                                    x: 100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    delay: 0.2 * index,
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                }}
                                viewport={{ once: true }}
                        >
                            <div className={`
                                    flex flex-row-reverse justify-between items-center w-full 
                                    max-w-[150px] z-30 lg:hidden`}
                                >
                                    <span className="text-myBlack text-4xl space-grotesk-600">{item.year}</span>
                                    <LogoSVG className="text-myGreen w-[30px] h-[30px]"/>
                                </div>
                            <div className={`
                                flex flex-col gap-5 items-center w-full h-full 
                                relative bg-myBlack rounded-[35px] max-w-[600px] 
                                px-[clamp(0.8rem,_3vw,_1.5rem)] py-[clamp(1rem,_5vw,_1.5rem)]
                                ${index % 2 === 0 ? "lg:self-start" : "lg:self-end"}`}
                            >
                                <div className={`
                                    lg:flex flex-row  justify-between items-center w-full
                                    absolute top-[13%] left-[clamp(-18%,_-15vw,_-20%)] 
                                    max-w-[180px] z-30 hidden`}
                                >
                                    <span className="text-myBlack text-4xl space-grotesk-600">{item.year}</span>
                                    <LogoSVG className="text-myGreen w-[30px] h-[30px]"/>
                                </div>
                                <div className="flex flex-col gap-5 items-start lg:w-2/3 w-full h-full">
                                    <span className="text-myGray text-[clamp(1.2rem,_2vw,_3rem)] space-grotesk-500">{item.title}</span>
                                    <span className="text-myGray text-[clamp(1rem,_1.5vw,_1.5rem)] space-grotesk-400">{item.text}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}