import TitleOfSection from "../../../components/titleOfSection/TitleOfSection";
import TeamCard from "../../../components/teamCard/TeamCard";
import { motion } from "framer-motion";

type TeamItem = {
    avatar: string;
    name: string;
    job: string;
    text: string;
}

const teamArr: TeamItem[] = [
    {
        avatar: "/teamPerson_img1.png",
        name: "John Smith",
        job: "CEO and Founder",
        text: `10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy`,
    },
    {
        avatar: "/teamPesron_img2.png",
        name: "Jane Doe",
        job: "Director of Operations",
        text: `7+ years of experience in project management and team leadership. Strong organizational and communication skills`,
    },
    {
        avatar: "/teamPerson_img3.png",
        name: "Michael Brown",
        job: "Senior SEO Specialist",
        text: `5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization`
    },
    {
        avatar: "/teamPerson_img4.png",
        name: "Emily Johnson",
        job: "PPC Manager",
        text: `3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis`
    },
    {
        avatar: "/teamPerson_img5.png",
        name: "Brian Williams",
        job: "Social Media Specialist",
        text: `4+ years of experience in social media marketing. 
        Proficient in creating and scheduling content, analyzing metrics, and building engagement`
    },
    {
        avatar: "/teamPerson_img6.png",
        name: "Sarah Kim",
        job: "Content Creator",
        text: `2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries`
    }
]

export default function TeamSection() {
    return (
        <section className="overflow-hidden">
            <div className="flex flex-col gap-12">
                <TitleOfSection 
                    title="Team"
                    text="Meet the skilled and experienced team behind our successful digital marketing strategies "
                />
                <div className="flex items-center justify-center">
                    <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[clamp(1rem,_2vw,_5rem)] ">
                        {teamArr.map((item, index) => (
                            <motion.div key={item.name + index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, transition: {delay: 0.2 * index, type: "spring", stiffness: 300, damping: 20 } }}
                                viewport={{ once: true }}
                            >
                                <TeamCard {...item} />
                            </motion.div>
                        ))}
                    </div>
                </div>
                <motion.div className="flex md:w-30/31 w-full md:justify-end justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0, transition: {delay: 0.2, type: "spring", stiffness: 300, damping: 20 } }}
                    viewport={{ once: true }}
                >
                    <button className={` 
                        space-grotesk-400 text-lg transition-all duration-200 ease-in-out hover:scale-105 hover:bg-myGreen 
                      bg-myBlack text-white px-10 py-4 rounded-[10px] cursor-pointer self-end hover:text-myBlack 
                      md:w-auto w-4/5`}>
                        See all team
                    </button>
                </motion.div>
            </div>
        </section>
    )
}