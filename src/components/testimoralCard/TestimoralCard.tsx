export default function TestimoralCard({text, name, job}: {text: string, name: string, job: string}) {
    return (
        <div className="flex flex-col gap-8 items-center justify-between w-full h-auto cursor-grab">
            <div className={`
                relative bg-myBlack border-2 border-myGreen rounded-[65px] w-full select-none
                p-10 text-white mx-2.5 my-2.5 font-sans before:absolute 
                before:-bottom-5 before:left-1/2 before:-translate-x-[4.6rem] before:w-0 before:h-0 
                before:border-l-[15px] before:border-r-[15px] before:border-t-[20px] 
                before:border-transparent before:border-t-myGreen after:absolute 
                after:-bottom-4 after:left-1/2 after:-translate-x-18 after:w-0 after:h-0 
                after:border-l-[13px] after:border-r-[13px] after:border-t-[18px] 
                after:border-transparent after:border-t-myBlack`
                }>
                {text}
            </div>
            <div className="flex flex-col items-start justify-end gap-2 w-[30%] ">
                <span className="text-myGreen space-grotesk-500">{name}</span>
                <span className="text-white space-grotesk-400">{job}</span>
            </div>
        </div>
    )
}