export default function EnumTextCard({text}: {text: string}) {
    return (
        <div className="flex flex-row w-full gap-4 items-center">
            <div className="bg-myBlack w-1 h-1 min-w-1 min-h-1 rounded-full"></div>
            <span className="space-grotesk-400 text-[clamp(16px,_2vw,_18px)]">
                {text}
            </span>
        </div>
    )
}