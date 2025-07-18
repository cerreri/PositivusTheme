import LogoSVG from "../../svg/LogoSvg";
import LinkedinIconSvg from "../../svg/socialIcons/LinkedinIconSvg";
import FacebookIconSvg from "../../svg/socialIcons/FacebookIconSvg";
import XIconSvg from "../../svg/socialIcons/XIconSvg";

export default function Footer() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    }

    return (
        <footer className="flex flex-col gap-10 items-center justify-center w-full h-full text-white mt-20">
            <div className="flex flex-col gap-10 items-center w-full bg-myBlack p-[clamp(2rem,_4vw,_7rem)] rounded-[35px] rounded-b-[0px]">
                <div className="flex flex-wrap items-center justify-between w-full gap-10">
                    <div className="flex flex-row gap-3 items-center ">
                        <LogoSVG />
                        <span className="space-grotesk-500 text-4xl">Positivus</span>
                    </div>
                    <div className="flex flex-row gap-[1%] items-center ">
                        <LinkedinIconSvg className="w-10 cursor-pointer transition-all duration-300 hover:opacity-80"/>
                        <FacebookIconSvg className="w-10 cursor-pointer transition-all duration-300 hover:opacity-80"/>
                        <XIconSvg className="w-10 cursor-pointer transition-all duration-300 hover:opacity-80"/>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between w-full items-center gap-12 border-b-1 border-white pb-12">
                    <div className="flex flex-col gap-4 items-start w-1/2">
                        <span className="space-grotesk-400 text-2xl text-myGreen">Contact us</span>
                        <span className="space-grotesk-400 text-md">Email: example@example.com</span>
                        <span className="space-grotesk-400 text-md">Phone: +123 456 7890</span>
                        <span className="space-grotesk-400 text-md">Address: 123 Main St, Anytown, Country Name</span>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className={`
                        flex flex-col md:flex-row gap-5 items-center 
                        justify-center py-15 px-10 bg-[#292a32] 
                        rounded-[20px] w-full`}>
                        <input 
                            type="text" 
                            placeholder="Email"
                            required 
                            className={
                                `w-full rounded-xl border border-gray-300 
                                outline-none space-grotesk-400 p-5 px-8 bg-transparent 
                                `} 
                        />
                        <button className={
                            `space-grotesk-400 text-md bg-myGreen px-8 p-5 rounded-[10px] w-full 
                            text-myBlack transition-all duration-200 hover:bg-white 
                            hover:scale-103 cursor-pointer `}>
                            Subscribe to news
                        </button>
                    </form>
                </div>
                <div className="flex flex-wrap w-full justify-between items-center gap-10">
                    <span className="space-grotesk-400 text-md">
                        2025 Positivus - Made With React and TailwindCSS by <a 
                        href="https://github.com/Yn1t" 
                        target="_blank" 
                        className="space-grotesk-400 text-md underline">
                            Yn1t
                        </a>
                    </span>
                    <span className="space-grotesk-400 text-md">
                        Credits
                        ( <a 
                            href="https://www.olgaskuja.design/" 
                            target="_blank" 
                            className="space-grotesk-400 text-md underline">
                                Olga
                            </a> )
                    </span>
                </div>
            </div>
        </footer>
    )
}