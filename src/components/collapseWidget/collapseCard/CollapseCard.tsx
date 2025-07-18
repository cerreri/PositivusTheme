import { useState } from "react";
import { Collapse } from "react-collapse";
import Circle from "../../circle/Circle";

export default function CollapseCard({
  index,
  item,
  numeration,
}: {
  index: number;
  item: { title: string; text: string };
  numeration?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`
        w-full flex flex-col rounded-[45px] p-[clamp(2rem,_3vw,_3rem)] 
        items-center justify-start gap-6 cursor-pointer 
        border-1 border-b-6 border-black 
        transition-all duration-250 ease-in-out ${isOpen ? "bg-myGreen" : "bg-myGray"}
      `}
      onClick={handleToggle}
    >
      <div
        className="flex-row w-full gap-1 flex items-start justify-between select-none"
       
      >
        <div className="flex flex-row items-center gap-6">
          {numeration && (
            <span className="text-7xl space-grotesk-300 hidden md:block">
              0{index + 1}
            </span>
          )}
          <span className="text-[clamp(0.9rem,_3vw,_1.25rem)] space-grotesk-400">
            {item.title}
          </span>
        </div>
        <Circle isToggled={isOpen} />
      </div>

      <Collapse isOpened={isOpen} theme={{ collapse: "transition-height duration-250 ease-in-out overflow-hidden" }}>
        <div className="pt-4 cursor-default" onClick={(e) => e.stopPropagation()}>
          <span className="text-lg space-grotesk-400 cursor-text">
            {item.text}
          </span>
        </div>
      </Collapse>
    </div>
  );
}
