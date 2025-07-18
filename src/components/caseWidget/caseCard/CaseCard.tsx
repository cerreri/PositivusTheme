import { motion } from "framer-motion";

type CaseItem = {
    title?: string;
    text: string;
}

type CaseCardProps = {
    index: number;
    item: CaseItem;
}

export default function CaseCard({index, item}: CaseCardProps) {
    return (
        <div
           className={`
               flex flex-col items-start justify-between gap-10 w-full
               ${index !== 0 ? "lg:border-l lg:border-myGray lg:pl-12" : ""} 
               lg:bg-transparent bg-myBlack lg:p-0 p-[clamp(2rem,_2vw,_5rem)] lg:rounded-none rounded-[45px]
           `}
           >
                {item.title && (
                    <span className="space-grotesk-500 text-[clamp(1.2rem,_3vw,_2rem)] w-full">{item.title}</span>
                )}
               <motion.span className="space-grotesk-400 text-md w-full"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: {delay: 0.2 * index, type: "spring", stiffness: 300, damping: 20 } }}
                    viewport={{ once: true }}
               >
                    {item.text}
               </motion.span>
               <motion.div 
                    className={`
                        flex flex-row items-center justify-start gap-4 cursor-pointer  
                        group  
                    `}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0, transition: {delay: 0.2 * index, type: "spring", stiffness: 300, damping: 20 } }}
                    viewport={{ once: true }}
               >
                   <span className="space-grotesk-400 text-md text-myGreen transition-transform duration-100 group-hover:scale-105">
                       Case info
                   </span>
                   <img 
                       src="/greenArrowLink.png" 
                       alt="arrow" 
                       className="w-auto h-[20px] object-cover transition-transform duration-100" 
                   />
               </motion.div>
        </div>
    )
}