import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const controls = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    controls[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    controls[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex items-center gap-10 mt-10 px-10">
          {/* First card (FYDE) */}
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            <h1 className="absolute flex right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[#CDEA68] leading-none tracking-tighter overflow-hidden font-['Founders_Frotesk_X-Condensed'] text-8xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={controls[0]} // Ensure the correct control is being triggered
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="h-full w-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
              />
            </div>
          </motion.div>

          {/* Second card (VISE) */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            <h1 className="absolute flex left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[#CDEA68] leading-none tracking-tighter overflow-hidden font-['Founders_Frotesk_X-Condensed'] text-8xl">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={controls[1]} // Use separate controls for second card
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="h-full w-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
