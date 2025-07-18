import HeadSection from "./sections/HeadSection";
import ContentSection from "./sections/contentSection/ContentSection";
import InsightsSection from "./sections/InsightsSection";
import { useEffect } from "react";

export default function BlogPage() {
    useEffect(() => {
        document.title = "Positivus | Blog";
    }, []);
    return (
        <main className="w-full h-full flex flex-col px-[7%] gap-20">
            <HeadSection />
            <ContentSection />
            <InsightsSection />
        </main>
    )
}