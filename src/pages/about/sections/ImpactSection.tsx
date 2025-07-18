import TitleOfSection from "../../../components/titleOfSection/TitleOfSection"
import { motion } from "framer-motion"

type impactItem = {
    title: string,
    text: string,
}

const impactArray: impactItem[] = [
    { title: "8+", text: "Years of Experience" },
    { title: "50+", text: "Experts" },
    { title: "100+", text: "Succesful Campaigns" },
    { title: "20+", text: "Industry Awards" },
    { title: "500+", text: "ROI for our clients" },
]

export default function ImpactSection() {
    return (
        <section className="overflow-hidden">
            <div className="flex flex-col items-center gap-10 w-full h-full">
                <TitleOfSection 
                    title="Our Impact in Numbers"
                    text="A snapshot of the milestones and achievements that drive our success"
                />
                <div className="flex flex-wrap items-center justify-center w-full h-full">
                    {impactArray.map((item, index) => (
                        <motion.div 
                            key={item.title + index} 
                            className={`
                                flex flex-col items-start w-full relative py-4 px-6
                                max-w-[300px]`}
                            initial={{opacity: 0, filter: "blur(10px)"}}
                            whileInView={{opacity: 1, filter: "blur(0px)"}}
                            transition={{delay: 0.5 * index, ease: "easeInOut", duration: 0.5}}
                            viewport={{ once: true }}
                        >
                            <div className={`
                                w-full h-[30%] border-t-2 border-myBlack border-l-2 
                                border-r-2 absolute top-0 left-0 z-10 rounded-t-[15px]`}></div>
                            <span className="space-grotesk-500 text-[45px] text-myBlack">{item.title}</span>
                            <span className="space-grotesk-400 text-[clamp(1rem,_1vw,_1.5rem)] text-myBlack">{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}