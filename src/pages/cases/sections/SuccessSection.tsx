import CallCard from "../../../components/callCard/CallCard";
import TableWidget from "../../../components/tableWidget/TableWidget";
import TitleOfSection from "../../../components/titleOfSection/TitleOfSection";

type StoryItem = {
    title: string;
    text: string;
}

const storyItems: StoryItem[] = [
    {
        title: "E-Commerce Fashion Brand",
        text: "We implemented a tailored SEO strategy that boosted organic search rankings, " +
        "leading to a 150% increase in website traffic and a 50% rise in online sales within six months."
    },
    {
        title: "Local Restaurant",
        text: "Our SEO and PPC campaign resulted in a 200% increase in organic traffic, " +
        "leading to a 150% boost in online reservations and a 50% rise in customer engagement."
    },
    {
        title: "B2B SaaS Company",
        text: "Our SEO and PPC strategy helped this SaaS company improve its search visibility, " +
        "resulting in a 300% increase in conversion rates and a 200% boost in monthly recurring revenue."
    },
    {
        title: "Healthcare Provider",
        text: "Our SEO and PPC campaign helped this healthcare provider improve its search visibility, " +
        "resulting in a 250% increase in online inquiries and a 150% boost in patient referrals."
    },
    {
        title: "Real Estate Agency",
        text: "Our SEO and PPC strategy helped this real estate agency improve its search visibility, " +
        "resulting in a 200% increase in website traffic and a 150% boost in property listings."
    },
    {
        title: "Travel Agency",
        text: "Our SEO and PPC campaign helped this travel agency improve its search visibility, " +
        "resulting in a 200% increase in website traffic and a 150% boost in bookings."
    }
    
]


export default function SuccessSection() {
    return (
        <section className="overflow-hidden">
            <div className="flex flex-col gap-10 items-center w-full h-full">
                <TitleOfSection 
                    title="All Success Stories"
                    text={
                        "Explore Real-Life Examples of Our Digital Marketing Success through Our Case Studies" 
                    }
                />
                <TableWidget storyItems={storyItems} />
                <CallCard 
                    title="Let's Create Your Next Success Story"
                    text="Contact us today to learn more about how our digital marketing services can help 
                        your business grow and succeed online."
                    buttonText="Get your free proposal"
                />
            </div>
        </section>
    )
}