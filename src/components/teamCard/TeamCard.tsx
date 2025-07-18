type TeamItem = {
    avatar: string;
    name: string;
    job: string;
    text: string;
}

export default function TeamCard({avatar, name, job, text}: TeamItem) {
    return (
        <div className="flex flex-col gap-4 p-[clamp(2rem,_3vw,_4rem)] pb-18 border-1 border-black border-b-6 rounded-[45px] max-w-[500px]">
            <div className="flex flex-row items-center justify-between gap-4 border-b-1 border-black pb-8">
                <div className="flex flex-row items-center gap-4">
                    <img src={avatar} alt={name} className="w-auto h-[100px] object-cover rounded-[10px] " />
                    <div className="flex flex-col items-start gap-2 ">
                        <span className="space-grotesk-500 text-lg">{name}</span>
                        <span className="space-grotesk-400 text-md">{job}</span>
                    </div>
                </div>
                <img src="/socialIcon.png" alt="socialIcon" className="w-[34px] h-[34px] self-start hidden sm:flex"/>
            </div>
            <span className="space-grotesk-400 text-md">{text}</span>
        </div>
    )
}