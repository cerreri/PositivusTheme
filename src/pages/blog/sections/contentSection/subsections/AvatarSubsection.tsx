import { motion } from "framer-motion";

export default function AvatarSubsection() {
    return (
        <div className="flex flex-row p-6 w-full gap-4 border-myBlack border-b-1">
        <motion.img 
            src="/teamPerson_img6.png"
            alt="team person"
            className="w-[50px] h-auto object-contain"
            initial={{opacity: 0, rotate: 0}}
            whileInView={{opacity: 1, rotate: 360}}
            transition={{duration: 0.6, ease: "easeInOut", delay: 0.3}}
            viewport={{ once: true }}
        />
        <motion.div className="flex flex-col gap-1 items-start"
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.3, type: "spring", stiffness: 300, damping: 20}}
            viewport={{ once: true }}
        >
            <span className="space-grotesk-500 text-[clamp(16px,_2vw,_20px)]">
                Sarah Kim
            </span>
            <span className="space-grotesk-400 text-[clamp(14px,_2vw,_16px)]">
                Content Creator
            </span>
        </motion.div>
</div>
    )
}