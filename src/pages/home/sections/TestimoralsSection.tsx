import TitleOfSection from "../../../components/titleOfSection/TitleOfSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import TestimoralCard from "../../../components/testimoralCard/TestimoralCard";
import { motion } from "framer-motion";

//@ts-expect-error - swiper css
import "swiper/css"; 
//@ts-expect-error - swiper pagination
import "swiper/css/pagination";
//@ts-expect-error - swiper navigation
import "swiper/css/navigation";

const testimoralsArr = [
    {
        text:`We have been working with Positivus for the past year and have seen a 
              significant increase in website traffic and leads as a result of their efforts. 
              The team is professional, responsive, and truly cares about the success of our business. 
              We highly recommend Positivus to any company looking to grow their online presence.`,

        name: "John Smith",
        job: 'Marketing director at XYZ',
    },
    {
        text:`We chose Positivus to help us with our SEO and PPC campaigns and have been very impressed 
              with their results. They are knowledgeable, responsive, and truly care about the 
              success of our business. We highly recommend Positivus to any company looking to grow their online presence.`,
        name: "Jane Doe",
        job: "CEO at QWE",
    },
    {
        text:`I recently started working with Positivus and have been very impressed with their professionalism and expertise. 
              They have helped me increase my online visibility and generate more leads for my business. 
              I highly recommend Positivus to anyone looking to improve their online marketing strategy.`,
        name: "Alice Johnson",
        job: "Owner at RTY",
    },
    {
        text:`Positivus has been a great partner for our company. 
              They are knowledgeable, responsive, and truly care 
              about the success of our business. We have seen a significant 
              increase in website traffic and leads as a result of their efforts. 
              I highly recommend Positivus to any company looking to grow their online presence.`,
        name: "Bob Brown",
        job: "CTO at UIO",
    },
    {
        text:`I have been working with Positivus for the past year and have been very impressed with their professionalism and expertise. 
              They have helped me increase my online visibility and generate more leads for my business. 
              I highly recommend Positivus to anyone looking to improve their online marketing strategy.`,
        name: "Charlie Davis",
        job: "CEO at PQR",
    },
    {
        text:`Positivus made a huge difference in our online presence. They are knowledgeable, 
              responsive, and truly care about the success of our business. We have seen a significant 
              increase in website traffic and leads as a result of their efforts. I highly recommend 
              Positivus to any company looking to grow their online presence.`,
        name: "David Wilson",
        job: "CFO at STU",
    },
    {
        text:`I have been working with Positivus for the past year and have been very impressed with their professionalism and expertise. 
              They have helped me increase my online visibility and generate more leads for my business.`,
        name: "Eve White",
        job: "COO at VWX",
    },
]

export default function TestimoralsSection() {
    return (
        <section className="overflow-hidden">
            <div className="flex flex-col gap-20">
                <TitleOfSection 
                    title="Testimonials"
                    text="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services "
                />
                <motion.div className="bg-myBlack w-full p-[clamp(0px,_5%,_100px)] rounded-[45px] relative gap-10"
                    initial={{opacity: 0, filter: "blur(10px)"}}
                    whileInView={{opacity: 1, filter: "blur(0px)"}}
                    transition={{duration: 1, ease: "easeInOut"}}
                    viewport={{ once: true }}
                >
                    <Swiper
                        modules={[Pagination, Navigation]}
                        pagination={{ 
                            clickable: true,
                            el: '.swiper-pagination',
                            type: 'bullets'
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        spaceBetween={50}
                        slidesPerView={1}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,           
                            },
                            1124: {
                                slidesPerView: 3,
                            },
                        }}
                        
                        className="testimonials-swiper"
                    >
                        {testimoralsArr.map((item, index) => (
                            <SwiperSlide key={index}>
                                <TestimoralCard text={item.text} name={item.name} job={item.job}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex w-full items-center justify-center mt-14">
                        <div className="flex items-center justify-center mt-8 w-[clamp(200px,_50%,_500px)]">
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-pagination"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}