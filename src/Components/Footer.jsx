import React from 'react'

const Footer = () => {
  return (
   <footer className="flex justify-between bg-black  my-[-1.78rem] text-end  foob">
    <div className="text-2xl text-white text-center mx-11 my-4 font-bold hover:underline font-mono sm:w-auto hover:text-purple-800 hover:text-[1.56rem]">🔏P@SSWORD GENERATOR</div>
    <ul className="flex justify-between gap-11 mx-9 my-4">
      
        <li  className="text-lg hover:text-purple-400 hover:underline text-white">Site design / logo © 2024 </li>
        <li  className="text-lg hover:text-purple-400 hover:underline text-white"> licensed under CC BY-SA.</li>
        <li className="text-lg hover:text-purple-400 hover:underline text-white">Owned By IR</li>
    </ul>
   
   </footer>
  )
}

export default Footer
