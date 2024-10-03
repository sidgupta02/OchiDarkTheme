import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-100 flex items-center px-32 py-20 gap-5">
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card relative w-full flex items-center justify-center rounded-xl h-full bg-[#004d43]">
          <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className="absolute px-5 py-5 border-2 rounded-full left-10 bottom-10">&copy;2021-2025</button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative flex items-center justify-center   w-1/2 h-full rounded-xl bg-[#0b1c19]">
        <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className="absolute px-5 py-5 border-2 rounded-full left-10 bottom-10">RATING 5.0</button>
        </div>
        <div className="card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#0b1c19]">
        <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className="absolute px-5 py-5 border-2 rounded-full left-10 bottom-10">BOOTCAMP</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
