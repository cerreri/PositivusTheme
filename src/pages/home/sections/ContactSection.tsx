import TitleOfSection from "../../../components/titleOfSection/TitleOfSection";
import ContactForm from "../../../components/contactForm/ContactForm";

export default function ContactSection() {

    

    return (
        <section className="overflow-hidden">
            <div className="flex flex-col gap-20">
                <TitleOfSection title="Contact Us" text="Connect with Us: Let's Discuss Your Digital Marketing Needs " />
                <div className="flex flex-col gap-10 items-center p-10 bg-myGray rounded-[45px] relative overflow-hidden">
                    <div className="flex flex-row gap-10 items-center justify-between w-full relative">
                        <ContactForm />
                    </div>
                    <img 
                        src={'/contactImg.webp'} 
                        alt="contact" 
                        className="w-auto h-full max-h-[600px] object-cover absolute -right-72 top-0 hidden lg:block" 
                    />
                </div>
            </div>
        </section>
    )
}