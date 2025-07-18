import TitleOfSection from "../../../components/titleOfSection/TitleOfSection";
import CollapseWidget from "../../../components/collapseWidget/CollapseWidget";

type processCard = {
    title: string;
    text: string;
}

const processesArr: processCard[] = [
    {
        title: "Consultation",
        text: `During the initial consultation, 
        we will discuss your business goals and objectives, 
        target audience, and current marketing efforts. 
        This will allow us to understand your needs 
        and tailor our services to best fit your requirements.`,
    },
    {
        title: "Research",
        text: `After the consultation, we will conduct thorough 
        research to identify your target audience, competitors, 
        and industry trends. This will help us develop a 
        comprehensive strategy to achieve your business goals.`
    },
    {
        title: "Implementation",
        text: `Once the research is complete, we will begin implementing 
        the strategy. This may include optimizing your website, creating 
        content, and launching marketing campaigns. Our team will work 
        diligently to ensure that all tasks are completed on time and within budget. `,
    },
    {
        title: "Optimization",
        text: `After the initial implementation, we will continuously monitor 
        and optimize your marketing efforts to ensure maximum results. This may 
        involve adjusting ad campaigns, refining content, and analyzing 
        data to identify areas for improvement. `,
    },
    {
        title: "Reporting",
        text: `Throughout the process, we will provide regular reports on 
        the performance of your marketing campaigns. This will allow you 
        to track progress, measure success, and make informed 
        decisions about future strategies. `,
    },
    {
        title: "Improvement",
        text: `Based on the data and insights gathered from the reports, 
        we will make recommendations for further improvement. This may 
        involve refining existing strategies, exploring new opportunities, 
        or adjusting tactics to better align with your business goals. `,
    }
]


export default function ProcessSection() {

    return (
        <section className="overflow-hidden">
            <div className="w-full h-full flex flex-col items-center justify-center gap-20">
                <TitleOfSection 
                    title="Our Working Process"
                    text="Step-by-Step Guide to Achieving Your Business Goals"
                />
                <CollapseWidget collapseArr={processesArr} numeration={true} />
            </div>
        </section>
    )
}