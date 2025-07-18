import { Link, useNavigate, useLocation } from "react-router-dom";
import LogoSVG from "../../svg/LogoSvg";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

type navigationItem = {
    title: string,
    link: string,
}

const navigationArray: navigationItem[] = [
    {title: "About us", link: "/about"},
    {title: "Services", link: "/services"},
    {title: "Use Cases", link: "/cases"},
    {title: "Pricing", link: "/pricing"},
    {title: "Blog", link: "/blog"},
]

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    
    const location = useLocation();
    const navigate = useNavigate();

    const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });
    const itemRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const activeIndex = navigationArray.findIndex(item => item.link === location.pathname);
        const activeEl = itemRefs.current[activeIndex];
        if (activeEl) {
            const { offsetLeft, offsetWidth } = activeEl;
            setHighlightStyle({ left: offsetLeft, width: offsetWidth });
        }
    }, [location.pathname]);

    return (
        <header className={"w-full py-4 flex flex-row justify-between " + 
        " items-center px-[5%]  gap-4 fixed top-0 left-0 z-50 backdrop-blur-2xl bg-white/80"}>
            <div 
                className="flex flex-row items-center justify-around gap-3 cursor-pointer group select-none" 
                onClick={() => {
                    navigate("/");
                    setHighlightStyle({ left: 0, width: 0 });
                }}
            >
                <LogoSVG className="group-hover:fill-[#91de5b] transition-all duration-100"/>
                <span className="space-grotesk-500 text-4xl group-hover:text-[#91de5b] transition-all duration-100">Positivus</span>
            </div>
            <div className="hidden lg:flex flex-row gap-[3vw] items-center relative">
                <motion.div
                    className="absolute bottom-0 h-[30px] bg-myGreen rounded-[5px] z-0"
                    initial={false}
                    animate={highlightStyle}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
                {navigationArray.map((item, index) => (
                    <div
                    key={item.title}
                    ref={el => {
                        if (el) {
                            itemRefs.current[index] = el;
                        }
                    }}
                    className="relative p-1 z-10"
                    >
                    <Link to={item.link}>
                        <span className={
                        "space-grotesk-500 text-[clamp(13px,_1.5vw,_17px)] relative z-10 " + 
                        " group-hover:text-[#91de5b] transition-colors duration-100"
                        }>
                        {item.title}
                        </span>
                    </Link>
                    </div>
                ))}
            </div>
            <button className={"hidden lg:flex space-grotesk-400 border-[1px] rounded-xl px-10 py-4 text-[18px] " + 
            " hover:bg-black hover:text-white transition-all duration-200 cursor-pointer"}>
                Request quote
            </button>
            <div 
                className="lg:hidden w-[24px] h-[24px] cursor-pointer hover:opacity-50 transition-opacity duration-50"
                onClick={() => setIsMenuOpen(prev => !prev)}
            >
                {isMenuOpen ? <img src={'/close.svg'} alt="menu" /> : <img src={'/menu.svg'} alt="menu" />}
            </div>
            <AnimatePresence initial={false}>
                {isMenuOpen && (
                    <motion.div
                    className="absolute top-17 left-0 w-full bg-transparent flex flex-col items-center origin-top"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    exit={{ scaleY: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <div className="w-[80%] flex flex-col items-center border bg-white border-black rounded-[10px] p-4 gap-4">
                            <div className="w-full flex flex-col items-start ">
                            {navigationArray.map(item => (
                                <Link
                                    to={item.link}
                                    onClick={() => setIsMenuOpen(false)}
                                    key={item.title}
                                    className={
                                        "w-full flex items-center justify-start p-4 " + 
                                        " transition-all duration-50 rounded-[10px] " +
                                        `${location.pathname === item.link ? "bg-myGreen" : "group"}`
                                    }
                                >
                                <span className="space-grotesk-500 text-[15px] group-hover:text-[#91de5b] transition-all duration-100">
                                    {item.title}
                                </span>
                                </Link>
                            ))}
                            </div>
                            <button className={"h-[70px] flex items-center justify-center p-4 px-10 transition-all duration-50"  + 
                            " border-1 border-black rounded-2xl cursor-pointer hover:bg-black group"}>
                                <span className="space-grotesk-400 text-xl group-hover:text-white">
                                    Request a quote
                                </span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}