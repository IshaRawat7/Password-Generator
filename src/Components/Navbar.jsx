import React from 'react'

const Navbar = () => {
  return (
   <nav className="flex justify-between bg-black rounded-2xl h-16 my-0 md:text-center  navb">
    <div className="text-2xl text-white ftext-center mx-44 my-4 font-extrabold hover:text-[1.55rem] flex gap-6">
    <img src="https://tse1.mm.bing.net/th?id=OIP.sVjkhEzsts1bHY7RGd-LnQHaIA&pid=Api&P=0&h=180" alt="" className="w-14 h-14 rounded-full my-[-.4rem]"/>WELCOME TO HOME PAGE❗</div>
    <ul className="flex justify-between gap-11 mx-9 my-4">
        <li className="text-xl hover:text-purple-400 font-semibold hover:underline text-white hover:text-[1.35rem]">🏡Home</li>
        <li  className="text-xl hover:text-purple-400 font-semibold hover:underline text-white hover:text-[1.35rem]">Details</li>
        <li  className="text-xl hover:text-purple-400 font-semibold hover:underline text-white hover:text-[1.35rem]">Visit Site</li>
    </ul>
   
   </nav>
  )
}

export default Navbar
