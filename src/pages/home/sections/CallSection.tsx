import { motion } from "framer-motion";

export default function CallSection() {
    return (
        <section className="overflow-hidden">
            <div className="w-full h-full flex flex-col items-center md:items-start justify-center rounded-[45px] bg-myGray p-14 relative">
                <div className="flex flex-col items-start justify-center gap-10 w-full md:w-1/2">
                    <motion.h2 
                        className="space-grotesk-500 text-3xl"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: {delay: 0, type: "spring", stiffness: 300, damping: 20 } }}
                        viewport={{ once: true }}
                    >
                        Let's make things happen
                    </motion.h2>
                    <motion.span className="space-grotesk-400 text-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: {delay: 0.5, type: "spring", stiffness: 300, damping: 20 } }}
                        viewport={{ once: true }}
                    >
                        Contact us today to learn more 
                        about how our digital marketing services
                        can help your business grow
                        and succeed online.
                    </motion.span>
                    <motion.button className={"space-grotesk-400 text-md bg-myBlack " + 
                        "text-white px-[35px] py-[1.3rem] rounded-[10px] " +
                        "hover:bg-myGreen hover:text-myBlack cursor-pointer w-full " +
                        "duration-200 transition-colors"}
                        
                        
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: {delay: 1, type: "spring", stiffness: 300, damping: 20 } }}
                        viewport={{ once: true }}   
                    >
                        Get your free proposal
                    </motion.button>
                </div>
                <motion.img 
                    src={"/proposal.png"} 
                    alt="call-section-bg" 
                    className="hidden md:block absolute bottom-4 right-[0%] w-auto h-full max-w-[50%]" 
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", transition: {delay: 0, ease: "easeInOut", duration: 0.5 } }}
                    viewport={{ once: true }}
                />
            </div>
        </section>
    )
}