type serviceCard = {
    texts: string[],
    backgroundColor: string,
    textBgColor: string,
    img: string,
    linkImg: string,
    textColor: string,
}

export default function ServiceCard({texts, backgroundColor, textBgColor, img, linkImg, textColor}: serviceCard) {
    return (
        <div className={`${backgroundColor} flex flex-row gap-20 items-center w-full h-auto 
                        justify-between p-[7%] border-1 border-b-6 border-black rounded-[60px] `}
        >
            <div className="flex flex-col gap-10 items-start md:flex-3/5 flex-1/2 justify-around min-h-[250px]">
                <div className={`flex flex-col items-start w-full `}>
                    {texts.map((text, index) => (
                        <p key={index} className={`${textBgColor} text-[clamp(0.8rem,_2vw,_1.5rem)] space-grotesk-400 rounded-2xl w-auto p-1`}>{text}</p>
                    ))}
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <img src={linkImg} alt="link" className="h-auto max-w-10 object-cover w-full" loading="lazy" />
                    <p className={`text-2xl space-grotesk-400 ${textColor} text-[clamp(0.61rem,_2vw,_1.5rem)]`}>Learn More</p>
                </div>

            </div>
            <div className="md:flex-1/3 w-full flex-1/2 self-center">
                <img src={img} alt="service" className="w-full h-auto  object-cover "/>
            </div>
        </div>
    )
}