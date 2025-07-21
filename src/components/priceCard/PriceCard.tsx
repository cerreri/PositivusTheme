import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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
    const cardRef = useRef<HTMLDivElement>(null);
    const [shouldAnimate, setShouldAnimate] = useState(false);
    
    const isInView = useInView(cardRef, { 
        once: true, 
        amount: 0.3,
        margin: "-100px 0px -100px 0px"
    });

    useEffect(() => {
        const checkVisibility = () => {
            if (cardRef.current) {
                const rect = cardRef.current.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                if (isVisible && !shouldAnimate) {
                    setShouldAnimate(true);
                }
            }
        };

        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('resize', checkVisibility);
        
        checkVisibility();
        
        const fallbackTimer = setTimeout(() => {
            if (!shouldAnimate) {
                setShouldAnimate(true);
            }
        }, 1000 + index * 200);

        return () => {
            window.removeEventListener('scroll', checkVisibility);
            window.removeEventListener('resize', checkVisibility);
            clearTimeout(fallbackTimer);
        };
    }, [shouldAnimate, index]);

    const isVisible = isInView || shouldAnimate;

    return (
        <motion.div 
            ref={cardRef}
            className={`
                flex flex-col gap-10 p-10 ${theme === "dark" ? "bg-myBlack" : "bg-white"} lg:w-full w-[clamp(150px,_85vw,_450px)] 
                border-1 border-myBlack border-b-4 rounded-[25px] items-center max-w-[450px]`}
            initial={{opacity: 0, scale: 0.95, rotate: -5}}
            animate={isVisible ? {opacity: 1, scale: 1, rotate: 0} : {opacity: 0, scale: 0.95, rotate: -5}}
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