import React from 'react'

export default function NavBar() {
  return (
    <div className="w-[1499px] h-[87px] px-[110px] py-[18px] gap-[271px] border-b border-opacity-0">
       <div className="flex justify-between h-screen">
        <div className="text-black py-[14px] font-bold font-[Poppins] text-xl ">largethan!</div>
  <div className="w-[497px] h-[51px] px-[20px] py-[16px] flex gap-[60px] justify-center items-center text-black font-[Poppins] font-normal text-base leading-[24px] tracking-[-0.02em]">
    <span>Home</span>
    <span>About</span>
    <span>service</span>
    <span>Media</span>
    <span>Contact</span>
  </div>
  <div>
    <button className="text-white bg-slate-900 px-[30px] py-[8px] rounded-md">Donate</button>
  </div>
</div>


  </div>
  
  )
}