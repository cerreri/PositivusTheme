import HeadSection from "./sections/HeadSection";
import SuccessSection from "./sections/SuccessSection";
import { useEffect } from "react";

export default function CasesPage() {
    useEffect(() => {
        document.title = "Positivus | Cases";
    }, []);
    return (
        <main className="w-full h-full flex flex-col sm:px-[7%] px-[1%] gap-20">
            <HeadSection />
            <SuccessSection />
        </main>
    )
}