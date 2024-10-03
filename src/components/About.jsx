import React from 'react'

function About() {
  return (
    <div className='w-full px-20 py-20 bg-[rgb(205,234,104)] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>
      Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
      </h1>
      <div className='w-full flex gap-5 border-t-[2px] mt-20 pt-20 border-[#b6c874]'>
        <div className='w-1/2 '>
          <h1 className='text-7xl'>Our Approach:</h1>
          <button className='px-10 py-6 mt-10 flex gap-10 items-center bg-zinc-900 rounded-full text-white'>Read More
            <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
          </button>
        </div>
        <div className='w-1/2 h-[70vh] rounded-3xl bg-[#181b0d]'>
        </div>
      </div>
    </div>
  )
}

export default About