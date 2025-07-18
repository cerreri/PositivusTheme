import TitleOfSection from "../../../components/titleOfSection/TitleOfSection";
import CaseWidget from "../../../components/caseWidget/CaseWidget";

type CaseItem = {
    title?: string;
    text: string;
}

const casesArr: CaseItem[] = [
    {
        text: "For a local restaurant, we implemented a targeted PPC campaign that " +
        "resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {
        text: "For a B2B software company, we developed an SEO strategy that resulted in a " +
        "first page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {
        text: "For a national retail chain, we created a social media marketing campaign that " +
        "increased followers by 25% and generated a 20% increase in online sales.",
    },
]

export default function CaseSection() {
    return (
        <section id="cases" className="overflow-hidden">
            <div className="w-full h-full flex flex-col items-center justify-center gap-20">
                <TitleOfSection 
                    title="Case Studies"
                    text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
                />
                <CaseWidget casesArr={casesArr} />
            </div>
        </section>
    )
}