import TableWidget from "../../../components/tableWidget/TableWidget";
import TitleOfSection from "../../../components/titleOfSection/TitleOfSection";

const storyItems = [
    {
        title: "10 SEO Myths You Need to Stop Believing",
        text: "Think keyword stuffing and meta tags are the secret to ranking? " +
        "Discover the truth behind common SEO misconceptions and learn what really drives results.",
        linkText: "Read article",
    },
    {
        title: "Maximizing ROI with Social Media Advertising",
        text: "Social media ads are more than just boosted posts. Explore proven strategies " +
        "for crafting campaigns that engage audiences and deliver measurable returns.",
        linkText: "Read article",
    },
    {
        title: "How Content Marketing Fuels Long-Term Growth",
        text: "Content isn't just king—it's the foundation of sustainable business growth. " +
        "Find out how blogs, videos, and more can build trust and drive conversions.",
        linkText: "Read article",
    },
    {
        title: "The Art of A/B Testing: Perfecting Your Campaigns",
        text: "From headlines to call-to-actions, small tweaks can make a big difference. " +
        "Learn how to use A/B testing to refine your marketing strategies.",
        linkText: "Read article",
    },
    {
        title: "Understanding Google's Latest Algorithm Updates",
        text: "Search rankings change constantly—stay ahead by learning about the latest Google update and its impact on your SEO strategy.",
        linkText: "Read article",
    },
    {
        title: "5 Ways AI is Changing Digital Marketing",
        text: "Artificial intelligence is transforming the way we target, analyze, and engage audiences. " +
        "Discover how to leverage AI to stay competitive.",
        linkText: "Read article",
    },
]

export default function InsightsSection() {
    return (
        <section className="w-full h-full flex flex-col px-[7%] gap-20 items-center">
            <div className="w-full h-full flex flex-col gap-10 items-center">
                <TitleOfSection 
                    title="Explore More Insights"
                    text="Discover expert tips, strategies, and stories to keep you ahead in the digital landscape."
                />
                <TableWidget storyItems={storyItems}/>
            </div>
        </section>
    )
}