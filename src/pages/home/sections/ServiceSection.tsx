import { motion } from "framer-motion";
import ServiceCard from "../../../components/serviceCard/ServiceCard";
import TitleOfSection from "../../../components/titleOfSection/TitleOfSection";

type serviceCard = {
    texts: string[],
    backgroundColor: string,
    textBgColor: string,
    img: string,
    linkImg: string,
    textColor: string,
}

const servicesArr: serviceCard[] = [
    {
        texts: ["Search Engine", "Optimization"], backgroundColor: "bg-myGray", textBgColor: "bg-myGreen", 
        img: "/service_card_img1.webp", linkImg: "/blackGreenArrowLink.png", textColor: "text-myBlack",
    },
    {
        texts: ["Pay-per-click", "advertising"], backgroundColor: "bg-myGreen", textBgColor: "bg-white",
        img: "/service_card_img2.webp", linkImg: "/blackGreenArrowLink.png", textColor: "text-myBlack"
    },
    {
        texts: ["Social Media", "Marketing"], backgroundColor: "bg-myBlack", textBgColor: "bg-white",
        img: "/service_card_img3.webp", linkImg: "/whiteBlackArrowLink.png", textColor: "text-white" 
    },
    {
        texts: ["Email", "Marketing"], backgroundColor: "bg-myGray", textBgColor: "bg-myGreen",
        img: "/service_card_img4.webp", linkImg: "/blackGreenArrowLink.png", textColor: "text-myBlack"
    },
    {
        texts: ["Content", "Creation"], backgroundColor: "bg-myGreen", textBgColor: "bg-white", 
        img: "/service_card_img5.webp", linkImg: "/blackGreenArrowLink.png", textColor: "text-myBlack"
    },
    {
        texts: ["Social Media", "Marketing"], backgroundColor: "bg-myBlack", textBgColor: "bg-white",
        img: "/service_card_img6.webp", linkImg: "/whiteBlackArrowLink.png", textColor: "text-white"
    },
]

export default function ServiceSection() {
    return (
        <section id="services" className="overflow-hidden">
            <div className="flex flex-col gap-20 px-[0%]">
                <TitleOfSection 
                    title="Services" 
                    text="At our digital marketing agency, 
                    we offer a range of services to help 
                    businesses grow and succeed online. 
                    These services include"
                />
                <div className="grid lg:grid-cols-2 lg:grid-rows-3 gap-10 ">
                    {servicesArr.map((service, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, }}
                            whileInView={{ opacity: 1, 
                                transition: {type: "spring",
                                stiffness: 100,
                                damping: 20,
                                delay: index * 0.1,}}}
                            viewport={{ once: true }}
                        >
                            <ServiceCard {...service} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}