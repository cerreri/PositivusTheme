import { motion } from "framer-motion";

export default function PageTitle({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div
      className={`
        w-full h-full flex lg:flex-row flex-col gap-10 min-h-[500px]
        lg:items-start items-center justify-around bg-myGray rounded-[35px]
        px-[clamp(2rem,_3vw,_7rem)] py-[clamp(2rem,_3vw,_7rem)]
      `}
    >
      <div className="lg:w-2/5 w-full aspect-[4/3] relative rounded-[35px] overflow-hidden">
        <motion.img
          src={image}
          alt="about"
          className="absolute top-0 left-0 w-full h-full object-cover self-center"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          loading="eager"
        />
      </div>

      <div className="flex flex-col gap-10 lg:items-start lg:w-1/3 w-full items-center">
        <motion.h1
          className="space-grotesk-500 text-[clamp(2rem,_3vw,_4rem)] text-myBlack"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, type: "spring", stiffness: 300, damping: 20 }}
        >
          {title}
        </motion.h1>
        <motion.h2
          className="space-grotesk-400 text-[18px] text-myBlack"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 20 }}
        >
          {description}
        </motion.h2>
      </div>
    </div>
  );
}
