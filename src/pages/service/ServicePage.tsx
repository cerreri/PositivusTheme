import HeadSection from "./sections/HeadSection"
import ProcessSection from "./sections/ProcessSection"
import CaseSection from "./sections/CaseSection"
import { useEffect } from "react";

export default function ServicePage() {

    useEffect(() => {
        document.title = "Positivus | Service";
    }, []);

    return (
        <main className="w-full h-full flex flex-col px-[7%] gap-20">
            <HeadSection />
            <ProcessSection />
            <CaseSection />
        </main>
    )
}