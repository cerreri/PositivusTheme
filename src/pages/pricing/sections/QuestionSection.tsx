import CollapseWidget from "../../../components/collapseWidget/CollapseWidget";
import TitleOfSection from "../../../components/titleOfSection/TitleOfSection";

type questionCard = {
    title: string;
    text: string;
}


const questionsArr: questionCard[] = [
    {
        title: "Are there any additional fees or charges that may apply?",
        text: "Our pricing plans include a wide range or digital marketing services, including website design " +
        "and development, SEO, PPC, advertising, social media marketing, content marketing, and more. " +
        "We also offer custom packages that can be tailored to meet the specific needs of your business."
    },
    {
        title: "Can i change or cancel my plan at any time?",
        text: "Yes, you can change or cancel your plan at any time. However, please note that there may be a " +
        "cancellation fee or other charges depending on the terms of your contract."
    },
    {
        title: "Do you offer a free trial or consultation?",
        text: "We offer a free consultation to discuss your business needs and goals. During this meeting, we will " +
        "evaluate your current marketing efforts and identify areas for improvement. We will also provide a detailed " +
        "proposal outlining the services we can offer and the estimated cost."
    },
    {
        title: "How do you bill and invoice your clients?",
        text: "We bill and invoice our clients on a monthly basis. We will provide a detailed invoice outlining the " +
        "services provided and the amount due. We accept payment via credit card, PayPal, and bank transfers."
    },
    {
        title: "Are your services guaranteed to deliver results?",
        text: "We cannot guarantee specific results, as the success of digital marketing campaigns depends on " +
        "a variety of factors, including the competitiveness of your industry, the effectiveness of your strategy, " +
        "and the quality of your content. However, we will work diligently to ensure that your campaigns are optimized " +
        "for maximum results and that you are satisfied with the final outcome."
    },
    {
        title: "Do you offer contract-based or monthly retainer pricing?",
        text: "We offer both contract-based and monthly retainer pricing options. Contract-based pricing is ideal for " +
        "clients who need a one-time project completed, while monthly retainer pricing is best for businesses that " +
        "need ongoing support and maintenance. We will work with you to determine the best pricing structure for your " +
        "specific needs."
    },
]

export default function QuestionSection() {
    return (
        <section className="overflow-hidden">
            <div className="flex flex-col gap-10 items-center w-full h-full">
                <TitleOfSection 
                    title="Frequently Asked Questions"
                    text=""
                />
                <CollapseWidget collapseArr={questionsArr} />
            </div>
        </section>
    )
}