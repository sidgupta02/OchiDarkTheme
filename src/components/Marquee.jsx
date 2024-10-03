import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    //
    <div data-scroll data-scroll-section data-scroll-speed=".1"  className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-solid border-t-2 border-b-2 border-zinc-300 overflow-hidden pr-10 flex whitespace-nowrap">
          
          <motion.h1 initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 8,
          }} className='text-[20vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase font-semibold'>
            We are ochi&nbsp;
          </motion.h1>
          <motion.h1 initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 8,
          }} className='text-[20vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase font-semibold'>
            We are ochi&nbsp;
          </motion.h1>
        
      </div>
    </div>
  );
}

export default Marquee;
