import { motion } from "framer-motion";

type PriceCardProps = {
    index: number;
    plan: string;
    price: string;
    timeZone: "day" | "month" | "year";
    theme: "light" | "dark";
    popular?: boolean;
    features: string[];
}

export default function PriceCard({index, plan, price, timeZone, theme, popular, features}: PriceCardProps) {
    return (
        <motion.div className={`
            flex flex-col gap-10 p-10 ${theme === "dark" ? "bg-myBlack" : "bg-white"} lg:w-full w-[clamp(150px,_85vw,_450px)] 
            border-1 border-myBlack border-b-4 rounded-[25px] items-center max-w-[450px]`}
            initial={{opacity: 0, scale: 0.95, rotate: -5}}
            animate={{opacity: 1, scale: 1, rotate: 0}}
            transition={{duration: 0.6, ease: "easeInOut", delay: 0.3 + index * 0.1}}
        >
            <div className="flex flex-col items-start w-full gap-4">
                <div className="flex flex-row w-full justify-between gap-10 items-center">
                    <span className={`
                        space-grotesk-500 text-[clamp(1.2rem,_1vw,_2rem)] 
                        ${theme === "dark" ? "text-white" : "text-myBlack"}`}
                    >
                        {plan}
                    </span>
                    {popular && (
                        <span className=" rounded-[40px] bg-myGreen px-2 py-1 text-myBlack text-sm">
                            Popular
                        </span>
                    )}
                </div>
                <div className="flex flex-row w-full gap-2 items-center">
                    <span className={`
                        space-grotesk-500 text-[clamp(1.5rem,_1.5vw,_2rem)] 
                        ${theme === "dark" ? "text-white" : "text-myBlack"}`}
                    >
                        {price}
                    </span>
                    <span className={`
                        space-grotesk-400 text-[clamp(0.8rem,_1vw,_1rem)] 
                        ${theme === "dark" ? "text-white" : "text-myBlack"}`}
                    >
                        /{timeZone}
                    </span>
                </div>
                
            </div>
            <div className="flex flex-col gap-4 w-full">
                <button className={`
                    space-grotesk-400 text-[clamp(0.8rem,_1vw,_1rem)] 
                    ${theme === "dark" ? "text-myBlack bg-myGreen" : "text-white bg-myBlack"} 
                    px-10 py-4 rounded-[15px] w-full cursor-pointer hover:scale-103 transition-all duration-150`}
                >
                    Get Started
                </button>
                <button className={`
                    space-grotesk-400 text-[clamp(0.8rem,_1vw,_1rem)] border-1 
                    ${theme === "dark" ? "text-white bg-myDark border-white" : "text-myBlack bg-white border-myBlack"} 
                    px-10 py-4 rounded-[15px] w-full cursor-pointer hover:scale-103 transition-all duration-150`}
                >
                    Request a Quote
                </button>
            </div>
            <div className={`w-full border-1 ${theme === "dark" ? "border-white" : "border-myBlack"}`}></div>
            <div className="flex flex-col gap-4 w-full">
                {features.map((item, index) => (
                    <div key={index} className="flex flex-row gap-4">
                        <div className="rounded-full bg-myGreen p-1 min-w-4 min-h-4 max-w-4 max-h-4 flex items-center justify-center">
                            <img src={"/checkMarkSvg.svg"} alt="checkMark" loading="lazy" className="w-full h-full object-contain"/>
                        </div>
                        <span className={`
                            space-grotesk-400 text-[clamp(0.8rem,_1vw,_1rem)] 
                            ${theme === "dark" ? "text-white" : "text-myBlack"}`}
                        >
                            {item}
                        </span>
                    </div>
                ))}

            </div>
        </motion.div>
    )
}