export default function Circle({ isToggled }: { isToggled: boolean }) {

  return (
    <div
      className={`w-[50px] h-[50px] min-h-[50px] min-w-[50px] rounded-full border border-black 
        flex items-center justify-center relative cursor-pointer select-none 
        transition-all duration-200 ease-in-out
        ${isToggled ? "rotate-0" : "rotate-[-90deg]"}`}
    >
      <div className={`w-[70%] h-[4px] bg-black absolute `}></div>
      <div 
        className={`w-[4px] h-[70%] bg-black absolute transition-all duration-200 ease-in-out
         ${isToggled ? "opacity-0" : "opacity-100"}`}></div>
    </div>
  );
}
