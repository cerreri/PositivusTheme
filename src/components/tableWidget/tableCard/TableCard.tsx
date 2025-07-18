import { motion } from "framer-motion";

type StoryItem = {
    title: string;
    text: string;
    link?: string;
    linkText?: string;
}

export default function TableCard({ item, index }: { item: StoryItem, index: number}) {
    return (
        <div  
            className={`
                flex flex-col gap-6 items-start w-full h-full p-8 lg:border-0 
                border-1 border-myBlack border-b-4 rounded-[35px] lg:rounded-none
                ${index < 3 ? "lg:border-b-1 border-myBlack" : ""} 
                ${index % 3 !== 2 ? "lg:border-r-1 border-myBlack" : ""} 
            `}
            >
            <motion.span className="space-grotesk-500 text-[clamp(16px,_2vw,_24px)] text-myBlack"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.6, ease: "easeOut", delay: 0.3 + index * 0.1}}
                viewport={{ once: true }}
            >
                {item.title}
            </motion.span>
            <motion.span className="space-grotesk-400 text-[clamp(14px,_2vw,_18px)] text-myBlack"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.6, ease: "easeOut", delay: 0.3 + index * 0.1}}
                viewport={{ once: true }}
            >
                {item.text}
            </motion.span>
            <motion.a 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.6, ease: "easeOut", delay: 0.3 + index * 0.1}}
                viewport={{ once: true }}
                target="_blank"
                href={item.link || "https://www.google.com"} 
                className="flex flex-row gap-4 items-center mt-auto cursor-pointer group">
                <img 
                    src="/greenBlackArrowLink.png" 
                    alt="arrow" 
                    className="w-[30px] h-auto object-cover" 
                />
                <span 
                    
                    className={
                        "space-grotesk-400 text-md text-myBlack group-hover:scale-105 transition-all duration-100 " +
                        "group-hover:text-myGreen"
                    }
                >
                    {item.linkText || "Learn More"}
                </span>
            </motion.a>
        </div>
    )
}