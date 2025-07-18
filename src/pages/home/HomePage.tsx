import HeadSection from "./sections/HeadSection";
import ServiceSection from "./sections/ServiceSection";
import CallSection from "./sections/CallSection";
import SponsorsSection from "./sections/SponsorsSection";
import CaseSection from "./sections/CaseSection";
import ProcessSection from "./sections/ProcessSection";
import TeamSection from "./sections/TeamSection";
import TestimoralsSection from "./sections/TestimoralsSection";
import ContactSection from "./sections/ContactSection";
import { useEffect } from "react";

export default function HomePage() {
    useEffect(() => {
        document.title = "Positivus";
    }, []);
    return (
        <main className="w-full h-full flex flex-col px-[7%] gap-20 justify-center overflow-hidden">
            <HeadSection />
            <SponsorsSection />
            <ServiceSection />
            <CallSection />
            <CaseSection />
            <ProcessSection />
            <TeamSection />
            <TestimoralsSection />
            <ContactSection />
        </main>
    )
}