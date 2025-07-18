import TitleOfSection from "../../../components/titleOfSection/TitleOfSection";
import ProcessCard from "../../../components/processCard/ProcessCard";

type ProcessItem = {
    title: string;
    text: string;
}

const processItems: ProcessItem[] = [
    {
        title: "Website Audit & Analysis",
        text: "We begin by conducting a comprehensive audit to identify " + 
        "areas for improvement, including technical issues, content quality, and keyword opportunities.",
    },
    {
        title: "Keyword Research & Strategy",
        text: "Our team researches the most relevant and high-impact keywords for your business, " +
        "ensuring that we target terms that drive qualified traffic."
    },
    {
        title: "On Page Optimization",
        text: "We optimize your website's structure, meta tags, and content to make it search engine-friendly, " +
        "improving your visibility and relevance."
    },
    {
        title: "Content Creation & Optimization",
        text: "High-quality content is key to SEO. We create or refine your content that engages your audience " +
        "while aligning with search engine algorithms."
    },
    {
        title: "Link Building",
        text: "We develop a link-building strategy to acquire authoritative backlinks that boost your domain " +
        "authority and improve your search rankings."
    },
    {
        title: "Monitoring & Reporting",
        text: "We continuously monitor prefrormance, track rankings, and provide detailed reports, making " +
        "data-driven adjustments to maintain and improve your results."
    },
]

export default function ProcessSection() {
    return (
        <section>
            <div className="flex flex-col gap-10">
                <TitleOfSection 
                    title="How We Work: SEO Process"
                    text={
                        "Our step-by-step SEO process ensures your website ranks higher, attracts more traffic, " +
                        "and drives lasting results."
                    }
                />
                <div className="flex flex-col gap-10">
                    {processItems.map((item, index) => (
                        <ProcessCard key={index + item.title} index={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}