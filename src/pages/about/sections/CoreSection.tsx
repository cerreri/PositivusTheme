import TitleOfSection from "../../../components/titleOfSection/TitleOfSection";
import { motion } from "framer-motion";

type CoreItem = {
    title: string;
    text: string;
}

const coresArr: CoreItem[] = [
    {
        title: "Client Success First",
        text: "We are dedicated to achieving measurable results for our clients. " + 
            "Each strategy is tailored to meet unique business goals and drive long-term success."
    },
    {
        title: "Innovation",
        text: "We constantly strive to stay ahead of industry trends."
    },
    {
        title: "Collaboration",
        text: "We believe in the power of teamwork and partnership."
    },
    {
        title: "Transparency",
        text: "Open and honest communication is key to our success. " +
            "We keep our clients informed and every step of the way to ensure trust and clarity." 
    }
]

export default function CoreSection() {
    return (
        <section className="flex flex-col gap-10 items-center w-full h-full overflow-hidden">
            <TitleOfSection 
                title="Core Values"
                text="At the heart of everything we do are our core values:"
            />
            <div className="flex flex-wrap gap-10 items-center justify-center w-full h-full">
                {coresArr.map((item, index) => (
                    <motion.div key={item.title + index} 
                        initial={{opacity: 0, filter: "blur(10px)"}}
                        whileInView={{opacity: 1, filter: "blur(0px)"}}
                        transition={{delay: 0.3 * index, ease: "easeInOut", duration: 0.5}}
                        viewport={{ once: true }}
                        className={`
                            flex flex-col gap-10 items-start justify-around 
                            p-10 h-full border-myBlack rounded-[35px] border-1 border-b-6 max-w-[600px] min-h-[250px]`}>
                        <span className="text-myBlack text-[clamp(1.7rem,_1.5vw,_3rem)] space-grotesk-500">{item.title}</span>
                        <span className="text-myBlack text-[clamp(1.5rem,_1vw,_2rem)] space-grotesk-400">{item.text}</span>
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-row w-full h-full bg-myBlack rounded-[35px] p-12 justify-center">
                <div className="flex flex-col gap-10 items-start w-auto">
                    <motion.span className="text-white text-[clamp(1.5rem,_2vw,_3rem)] space-grotesk-500"
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{delay: 0, type: "spring", stiffness: 300, damping: 20}}
                        viewport={{ once: true }}
                    >
                        "At Positivus, we believe that
                        success is buid on Innovation,
                        collaboration a relentless focus on
                        delivering results."
                    </motion.span>
                    <motion.span className="text-myGray text-[clamp(1rem,_1vw,_2rem)] space-grotesk-500"
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{delay: 0.3, type: "spring", stiffness: 300, damping: 20}}
                        viewport={{ once: true }}
                    >
                        — John Smith, Founder of Positivus
                    </motion.span>
                </div>
            </div>
        </section>
    )
}