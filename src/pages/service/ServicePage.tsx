import HeadSection from "./sections/HeadSection"
import ProcessSection from "./sections/ProcessSection"
import CaseSection from "./sections/CaseSection"
import { useEffect } from "react";

export default function ServicePage() {

    useEffect(() => {
        document.title = "Positivus | Service";
    }, []);

    return (
        <>
            <HeadSection />
            <ProcessSection />
            <CaseSection />
        </>
    )
}