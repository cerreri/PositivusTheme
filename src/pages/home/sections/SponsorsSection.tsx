import AmazonSvg from "../../../svg/logotypes/AmazonSvg";
import DribbbleSvg from "../../../svg/logotypes/DribbbleSvg";
import HubSpotSvg from "../../../svg/logotypes/HubSpotSvg";
import NotionSvg from "../../../svg/logotypes/NotionSvg";
import NetflixSvg from "../../../svg/logotypes/NetflixSvg";
import ZoomSvg from "../../../svg/logotypes/ZoomSvg";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

export default function SponsorsSection() {
    return (
        <section className="overflow-hidden whitespace-nowrap">
            <div className="hidden lg:inline-block overflow-hidden whitespace-nowrap max-w-full">
                <Marquee gradient={false} speed={50} pauseOnHover={true}>
                    <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
                        <AmazonSvg className={
                            "text-myBlack cursor-pointer hover:text-myYellow " +
                            "transition-all duration-100 w-[150px] mx-20"
                        }/>
                    </a>
                    <a href="https://www.dribbble.com" target="_blank" rel="noopener noreferrer">
                        <DribbbleSvg className={
                            "text-myBlack cursor-pointer opacity-100 hover:opacity-70 " +
                            "transition-all duration-100 w-[150px] mx-20"
                        }/>
                    </a>
                    <a href="https://www.hubspot.com" target="_blank" rel="noopener noreferrer">
                        <HubSpotSvg className={
                            "text-myBlack cursor-pointer hover:text-myOrange " +
                            "transition-all duration-100 w-[150px] mx-20"
                        }/>
                    </a>
                    <a href="https://www.notion.so" target="_blank" rel="noopener noreferrer">
                        <NotionSvg className={
                            "text-myBlack cursor-pointer opacity-100 hover:opacity-70 " +
                            "transition-all duration-100 w-[150px] mx-20"
                        }/>
                    </a>
                    <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer">
                        <NetflixSvg className={
                            "text-myBlack cursor-pointer hover:text-myRed " +
                            "transition-all duration-100 w-[150px] mx-20"
                        }/>
                    </a>
                    <a href="https://www.zoom.com" target="_blank" rel="noopener noreferrer">
                        <ZoomSvg className={
                            "text-myBlack cursor-pointer hover:text-myBlue " +
                            "transition-all duration-100 w-[150px] mx-20"
                        }/>
                    </a>
                </Marquee>
            </div>
            <div 
                className="flex flex-wrap gap-16 items-center justify-center w-full lg:hidden"
            >
                <motion.a 
                    href="https://www.amazon.com" target="_blank" rel="noopener noreferrer"
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1, transition: {delay: 0.1, type: "spring", stiffness: 300, damping: 20 } }}
                    viewport={{ once: true }}
                >
                    <AmazonSvg className={
                        "text-myBlack cursor-pointer hover:text-myYellow " +
                        "transition-all duration-100 w-[150px] mx-20"
                    }/>
                </motion.a>
                <motion.a href="https://www.dribbble.com" target="_blank" rel="noopener noreferrer"
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1, transition: {delay: 0.1, type: "spring", stiffness: 300, damping: 20 } }}
                    viewport={{ once: true }}
                >
                    <DribbbleSvg className={
                        "text-myBlack cursor-pointer opacity-100 hover:opacity-70 " +
                        "transition-all duration-100 w-[150px] mx-20"
                    }/>
                </motion.a>
                <motion.a href="https://www.hubspot.com" target="_blank" rel="noopener noreferrer"
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1, transition: {delay: 0.1, type: "spring", stiffness: 300, damping: 20 } }}
                    viewport={{ once: true }}
                >
                    <HubSpotSvg className={
                        "text-myBlack cursor-pointer hover:text-myOrange " +
                        "transition-all duration-100 w-[150px] mx-20"
                    }/>
                </motion.a>
                <motion.a href="https://www.notion.so" target="_blank" rel="noopener noreferrer"
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1, transition: {delay: 0.1, type: "spring", stiffness: 300, damping: 20 } }}
                    viewport={{ once: true }}
                >
                    <NotionSvg className={
                        "text-myBlack cursor-pointer opacity-100 hover:opacity-70 " +
                        "transition-all duration-100 w-[150px] mx-20"
                    }/>
                </motion.a>    
                <motion.a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer"
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1, transition: {delay: 0.1, type: "spring", stiffness: 300, damping: 20 } }}
                    viewport={{ once: true }}
                >
                    <NetflixSvg className={
                        "text-myBlack cursor-pointer hover:text-myRed " +
                        "transition-all duration-100 w-[150px] mx-20"
                    }/>
                </motion.a>
                <motion.a href="https://www.zoom.com" target="_blank" rel="noopener noreferrer"
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1, transition: {delay: 0.1, type: "spring", stiffness: 300, damping: 20 }}}
                    viewport={{ once: true }}
                >
                    <ZoomSvg className={
                        "text-myBlack cursor-pointer hover:text-myBlue " +
                        "transition-all duration-100 w-[150px] mx-20"
                    }/>
                </motion.a>
            </div>
        </section>
    )
}