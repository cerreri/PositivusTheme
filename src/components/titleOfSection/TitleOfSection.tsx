import { motion } from "framer-motion";

type TitleOfSectionProps = {
    title: string;
    text?: string;
}

export default function TitleOfSection({title, text}: TitleOfSectionProps) {
    return (
        <div className="w-full flex md:flex-row items-center md:gap-12 flex-col gap-6  ">
            <motion.div 
                className="bg-myGreen px-2 rounded-md text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, type: "spring", stiffness: 300, damping: 15 } }}
                viewport={{ once: true }}
            >
                <h2 className="space-grotesk-400 text-4xl">{title}</h2>
            </motion.div>
            {text && (
                <motion.h3 
                    className="space-grotesk-400 text-[16px] md:text-left text-center"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, type: "spring", stiffness: 300, damping: 15 } }}
                    viewport={{ once: true }}
                >
                    {text}
                </motion.h3>
            )}
        </div>
    )
}