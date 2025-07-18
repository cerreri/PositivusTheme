import CallCard from "../../../components/callCard/CallCard";
import CaseWidget from "../../../components/caseWidget/CaseWidget";
import TitleOfSection from "../../../components/titleOfSection/TitleOfSection";

type CaseItem = {
    title?: string;
    text: string;
}

const casesArr: CaseItem[] = [
    {
        title: "E-commerce Fashion Brand",
        text: "We implemented a tailored SEO strategy that boosted organic search rankings, leading to " +
        "a 150% increase in website traffic and a 50% rise in online sales within six months."
    },
    {
        title: "Local Restaurant Chain",
        text: "By optimizing local SEO and enchancing Google My Business profiles, we increased visibility, " +
        "driving a 300% boost in online reservations and foot traffic."
    },
    {
        title: "Healthcare Provider",
        text: "Through content optimization and targeted keyword strategy, we helped a healthcare provider " +
        "rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings."
    }
]

export default function CaseSection() {
    return (
        <section>
            <div className="flex flex-col gap-10">
                <TitleOfSection
                    title="Use Cases"
                    text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
                />
                <CaseWidget casesArr={casesArr} />
                <CallCard 
                    title="Ready to Elevate Your Search Rankings?"
                    text={"Our proven SEO strategies are designed to help your business " +
                    "achieve long-lasting success in search engines. Whether you " +
                    "want to boost organic traffic, improve keyword rankings, or " +
                    "increase conversions, we're here to make it happen."}
                    subtext="Let's work together to grow your online presence."
                    buttonText="Start My SEO Journey"
                    cardStyle="flex flex-col items-center gap-10 border-1 border-myBlack rounded-[35px] p-10 border-b-4 text-center"
                    titleStyle="text-myBlack text-[clamp(1.2rem,_3vw,_2rem)] space-grotesk-500 w-full"
                    textStyle="text-myBlack text-md w-full"
                    subtextStyle="text-myBlack text-md w-full"
                    buttonStyle={
                        "space-grotesk-500 text-md w-full cursor-pointer transition-transform duration-150 " +
                        " lg:max-w-9/10 max-w-full bg-myGreen text-myBlack rounded-[10px] p-4 hover:scale-103"}
                    animate="scale"
                />
            </div>
        </section>
    )
}