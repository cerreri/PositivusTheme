import HeadSection from "./sections/HeadSection";
import QuestionSection from "./sections/QuestionSection";
import { useEffect } from "react";

export default function PricingPage() {
    useEffect(() => {
        document.title = "Positivus | Pricing";
    }, []);
    return (
        <>
            <HeadSection />
            <QuestionSection />
        </>
    )
}