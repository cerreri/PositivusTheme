import PageTitle from "../../../components/pageTitle/PageTitle";

export default function HeadSection() {
    return (
        <section className="w-full h-full flex flex-col px-[7%] gap-20 items-center">
            <div className="w-full h-full flex flex-col gap-10 items-center">
                <PageTitle 
                    title="PPC vs. Organic Marketing: Which One Is Right for Your Business?"
                    description={
                        "PPC and organic marketing each offer unique benefits for driving traffic and growing " +
                        "your business. Discover which strategy aligns best with your goals and how to strike the " +
                        "perfect balance."
                    }
                    image="/HomeSectionHeadImage.png"
                />
            </div>
        </section>
    )
}