import HeadSection from "./sections/HeadSection";
import QuestionSection from "./sections/QuestionSection";
import { useEffect } from "react";

export default function PricingPage() {
    useEffect(() => {
        document.title = "Positivus | Pricing";
    }, []);
    return (
        <main className="w-full h-full flex flex-col px-[7%] gap-20">
            <HeadSection />
            <QuestionSection />
        </main>
    )
}