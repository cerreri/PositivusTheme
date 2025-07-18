import PriceCard from "../../../components/priceCard/PriceCard"
import { motion } from "framer-motion";


type priceCard = {
    plan: string,
    price: string,
    timeZone: "day" | "month" | "year",
    theme: "light" | "dark",
    popular?: boolean,
    features: string[],
}

const priceCardArray: priceCard[] = [
    {plan: "Basic Plan", price: "$500", timeZone: "month", theme: "light",
        features: [
            "Website optimization", "Social media setup and management (1 platform)", "Monthly",
            "Monthly progress report", "Email support", "Basic competitor analysis", "initial SEO audit"
        ]
    },
    {plan: "Pro Plan", price: "$1000", timeZone: "month", theme: "dark", popular: true, 
        features: [
            "includes all from Basic Plan", "Social media setup and management (up to 3 platforms)",
            "PPC ad campaign management", "Email and phone support", "On-page SEO improvements",
            "Monthly content recommendations",
        ]
    },
    {plan: "Elite Plan", price: "$2000", timeZone: "month", theme: "light",
        features: [
            "includes all from Pro Plan", "Website design and development", "Comprehensive SEO strategy",
            "Social media setup and management (up to 5 platforms)", "Content marketing strategy and implementation",
            "in-depth analytics and reporting",
        ]
    },
]

export default function HeadSection() {
    return (
        <section className="overflow-hidden">
            <div className="flex flex-col gap-10 items-center w-full h-full">
                <div className="flex flex-col gap-4 items-start w-full h-full">
                    <motion.h1 className="space-grotesk-500 text-[clamp(2.5rem,_5vw,_6rem)] text-myBlack"
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.3, type: "spring", stiffness: 300, damping: 20}}
                    >
                        Pricing
                    </motion.h1>
                    <motion.h2 className="space-grotesk-400 text-[clamp(1rem,_2vw,_1.5rem)] text-myBlack"
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.6, type: "spring", stiffness: 300, damping: 20}}
                    >
                         Elevate Your Online Presence: Competitive Pricing 
                        for Exceptional Results
                    </motion.h2>
                </div>
                <div className="flex lg:flex-row flex-col gap-10 w-full lg:items-start items-center justify-center">
                    {priceCardArray.map((item, index) => (
                        <PriceCard
                            index={index} 
                            key={item.plan + index} 
                            plan={item.plan} 
                            price={item.price} 
                            timeZone={item.timeZone} 
                            theme={item.theme} 
                            popular={item.popular}
                            features={item.features}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}