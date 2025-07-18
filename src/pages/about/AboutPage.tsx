import HeadSection from "./sections/HeadSection";
import ImpactSection from "./sections/ImpactSection";
import JourneySection from "./sections/JourneySection";
import CoreSection from "./sections/CoreSection";
import AwardsSection from "./sections/AwardsSection";
import { useEffect } from "react";

export default function AboutPage() {
    useEffect(() => {
        document.title = "Positivus | About";
    }, []);
    return (
        <main className="w-full h-full flex flex-col px-[7%] gap-20">
            <HeadSection />
            <ImpactSection />
            <JourneySection />
            <CoreSection />
            <AwardsSection />
        </main>
    )
}