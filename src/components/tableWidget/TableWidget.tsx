import TableCard from "./tableCard/TableCard";

type StoryItem = {
    title: string;
    text: string;
    link?: string;
}
    
export default function TableWidget({ storyItems }: { storyItems: StoryItem[] }) {
    return (
        <div className={
            "lg:grid lg:grid-cols-3 lg:gap-0 lg:p-14 lg:border-1 border-0 " +
            "border-myBlack rounded-[35px] overflow-hidden " + 
            "flex flex-col items-center gap-10"
        }>
            {storyItems.map((item, index) => (
                <TableCard key={index} item={item} index={index} />
            ))}
        </div>
    )
}