import CaseCard from "./caseCard/CaseCard";

type CaseItem = {
    title?: string;
    text: string;
}

type CaseWidgetProps = {
    casesArr: CaseItem[];
}

export default function CaseWidget({casesArr}: CaseWidgetProps) {
    return (
        <div className={`flex lg:flex-row flex-col items-stretch justify-center lg:gap-10 gap-2
            lg:bg-myBlack bg-transparent text-myGray lg:text-white lg:p-16 rounded-[45px] w-full h-full`}
       >
        {casesArr.map((caseItem, index) => (
            <CaseCard key={index} index={index} item={caseItem} />
        ))}
       </div>
    )
}