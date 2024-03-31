import React, { useState } from 'react'
import prot from '../assets/prot.png'
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  let [Show,SetShow] = useState(false)
  let  handleMenu = ()  =>{
    SetShow(!Show)
  }
  return (
    <nav className='  py-10 px-[10px] lg:px-0'>
         <div className="max-w-container mx-auto ">
        <div className="flex justify-between items-center ">
            <div className="">
                <img src={prot} alt="" />
            </div>
            <div className=" ">
                <ul  className={`lg:flex absolute lg:static ${Show == true ?' top-[80px] left-0 bg-[#ff004f]  ease-out duration-700 py-[32px]  w-full text-center  ' : '  top-[100px]       left-[-200px] ease-out duration-700 w-full  ' }`}>
                    <li className='mx-[27px] font-pops font-bold text-[16px] text-[#fff] lg:py-0 py-[3px]  '><a href="#" className=' relative after:absolute after:content-[""] after:left-0 after:bottom-[-4px] after:w-[0] after:h-[3px] after:bg-[#ff00f4] after:hover:w-[100%] after:duration-300'>Home</a></li>
                    <li className='mx-[27px] font-pops font-bold text-[16px] text-[#fff] lg:py-0 py-[3px] '><a href="#" className=' relative after:absolute after:content-[""] after:left-0 after:bottom-[-4px] after:w-[0] after:h-[3px] after:bg-[#ff00f4] after:hover:w-[100%] after:duration-300'>About</a></li>
                    <li className='mx-[27px] font-pops font-bold text-[16px] text-[#fff] lg:py-0 py-[3px] '><a href="#" className='relative after:absolute after:content-[""] after:left-0 after:bottom-[-4px] after:w-[0] after:h-[3px] after:bg-[#ff00f4] after:hover:w-[100%] after:duration-300'>Service</a></li>
                    <li className='mx-[27px] font-pops font-bold text-[16px] text-[#fff] lg:py-0 py-[3px] '><a href="#" className='relative after:absolute after:content-[""] after:left-0 after:bottom-[-4px] after:w-[0] after:h-[3px] after:bg-[#ff00f4] after:hover:w-[100%] after:duration-300'>Protfolio</a></li>
                    <li className='mx-[27px] font-pops font-bold text-[16px] text-[#fff] lg:py-0 py-[3px] '><a href="#" className='relative after:absolute after:content-[""] after:left-0 after:bottom-[-4px] after:w-[0] after:h-[3px] after:bg-[#ff00f4] after:hover:w-[100%] after:duration-300'>Contact</a></li>
                </ul>
            </div> 
            <div className="text-white lg:hidden text-[25px] border-2   rounded-[10px] p-[8px] " onClick={handleMenu}>
              {Show == true ?  <RxCross1 /> :  <FaBars /> }
           
           

            </div>
        </div>
      </div>
    </nav>
     
     
    
  )
}

export default Navbar
