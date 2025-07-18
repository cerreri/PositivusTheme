import TitleOfSection from "../../../components/titleOfSection/TitleOfSection";
import { motion } from "framer-motion";
import CallCard from "../../../components/callCard/CallCard";

type AwardItem = {
    title: string;
    text: string;
}

const awardsArr: AwardItem[] = [
    {
        title: "Best Small Business Digital Marketing Agency of the Year",
        text: "Celebrating our success in delivering innovative strategies and measurable results for small businesses clients."
    },
    {
        title: "Innovative Website Design",
        text: "Honoring our expertise in developing visually stunning, user-friendly websites " + 
        "that capture a brand's essence and boost conversions."
    },
    {
        title: "Top Perfoming PPC Campaign of the Year",
        text: "Acknowledging our ability to design and execute a hight-impact pay-per-click campaign " + 
        "that drove exceptional client results."
    },
    {
        title: "Expertise in Social Media Marketing",
        text: "Recognizing our exceptional skills in crafting effective social media strategies, " + 
        "managing accounts, and creating engaging content."
    }
    
]

export default function AwardsSection() {
    return (
        <section className="flex flex-col gap-15 items-center w-full h-full overflow-hidden">
            <TitleOfSection
                title="Awards & Recognition"
                text={`At Positivus, our commitment to excellence has been recognized by industry leaders.
                Here are some of our prodest achievements:`}
            />
            <div className="flex flex-row w-full h-full">
                <div className="flex flex-wrap gap-[clamp(1rem,_3vw,_3rem)] items-center w-full h-full justify-center">
                    {awardsArr.map((item, index) => (
                        <motion.div key={item.title + index}
                            initial={{ opacity: 0, scale: 0.95, rotate: -5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 * index, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            className={"flex flex-col gap-[clamp(0.5rem,_1vw,_1.5rem)] items-center w-[clamp(210px,_20vw,_300px)] "  + 
                                " justify-between bg-myGray rounded-[35px] " +
                                " p-[clamp(1.5rem,_1.5vw,_2rem)] h-[clamp(400px,_450px,_500px)]"}
                        >
                            <span className="text-myBlack text-[clamp(1.2rem,_1.5vw,_2rem)] space-grotesk-500">{item.title}</span>
                            <span className="text-myBlack text-[clamp(1rem,_1vw,_1.5rem)] space-grotesk-400">{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
            <CallCard 
                title="Join Our Team"
                text={`At Positivus, we thrive on innovation and collaboration. We're always 
                    looking for passionate individuals to join our team and help businesses grow. Ready to make an impact?`}
                buttonText="Explore Careers"
                cardStyle="bg-myGreen p-14 flex flex-col items-center lg:w-1/2 w-full h-full justify-center gap-10 bg-myGreen rounded-[35px] p-10"
                titleStyle="text-myBlack text-[clamp(2rem,_2.5vw,_3.5rem)] space-grotesk-500 "
                textStyle="text-myBlack text-[clamp(1.5rem,_1.5vw,_2.5rem)] space-grotesk-400 text-start "
                buttonStyle={"bg-myBlack text-white text-[clamp(1rem,_0.8vw,_1.5rem)] " + 
                    " space-grotesk-400 rounded-[15px] p-5 px-9 cursor-pointer " + 
                    " hover:scale-105 transition-all duration-200 sm:w-1/2"}
                animate="blur"
                
            />
        </section>
    )
}