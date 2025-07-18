import HeadSection from "./sections/HeadSection";
import SuccessSection from "./sections/SuccessSection";
import { useEffect } from "react";

export default function CasesPage() {
    useEffect(() => {
        document.title = "Positivus | Cases";
    }, []);
    return (
        <>
            <HeadSection />
            <SuccessSection />
        </>
    )
}