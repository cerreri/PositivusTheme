import CollapseCard from "./collapseCard/CollapseCard";
import { motion } from "framer-motion";


type collapseCard = {
    title: string;
    text: string;
}

export default function CollapseWidget({collapseArr, numeration}: {collapseArr: collapseCard[], numeration?: boolean}) {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-10">
            {collapseArr.map((item, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: {delay: 0.1 * index, type: "spring", stiffness: 300, damping: 20 } }}
                    viewport={{ once: true }}
                    className="w-full"
                >
                    <CollapseCard index={index} item={item} numeration={numeration}/>
                </motion.div>
            ))}
        </div>
    )
}