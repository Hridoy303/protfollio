import React, { useState } from 'react'
 
import mylogo from'../assets/mylogo.png'
import { IoLogoSkype } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  let [Show,SetShow] = useState(false)
  let handleShow = () =>{
     SetShow(!Show)
  }
  return (
    <div>
       

       <header className='lg:py-4 py-[10px] bg-gradient-to-r from-[#6274e7] to-[#f7c2e6] '>
      <div className='max-w-container mx-auto'>
     
     <div className="lg:flex">

     <div className=" w-full  sm:w-full lg:w-1/4">
       
       <div className="flex items-center lg:justify-start justify-center after:bg-none  relative after:absolute after:content[''] after:top- [0px] after:right-[24px] after:h-[24px] after:w-[2px]
        lg:after:bg-[#ffffff86] ">
           <IoLogoSkype className=' text-[22px] text-[#fff] hover:text-[#ffffff86] duration-[0.3s]  hover:scale-110 hover:duration-[0.4s]'/>
        
           <h1 className='ml-[5px] text-[16px] font-pops font-medium text-[#fff]'>Talk on Skype</h1>
   </div>

     </div>
     <div className=" w-full sm:w-full lg:w-1/1">
      
       <div className="flex items-center lg:justify-start justify-center  lg:py-0 py-2 ">
       <a href="#" className='  text-[22px] text-[#fff] hover:text-[#ffffff86] duration-[0.3s]  hover:scale-110 hover:duration-[0.4s]'><IoMail /></a>
        <h2 className='ml-[5px] text-[16px] font-pops font-medium text-[#fff]'>Contact@redoyislam.me</h2>
      
       </div>
     </div>
     <div className=" w-full sm:w-full lg:w-1/2">
    
    <div className="flex  items-center lg:justify-end justify-center ">
       
    <a href="#" className='text-[22px] text-[#fff] hover:text-[#ffffff86] duration-[0.3s]  hover:scale-110 hover:duration-[0.4s]'><FaFacebook/></a>
        <a href="#"  className='text-[22px] text-[#fff] ml-[20px]  hover:text-[#ffffff86] duration-[0.3s]   hover:scale-110 hover:duration-[0.4s]'>< FaTwitter/></a>
        <a href="#"  className='text-[22px] text-[#fff] ml-[20px]  hover:text-[#ffffff86] duration-[0.3s]   hover:scale-110 hover:duration-[0.4s]'><FaYoutube /></a>
        <a href="#"  className='text-[22px] text-[#fff] ml-[20px]  hover:text-[#ffffff86] duration-[0.3s]   hover:scale-110 hover:duration-[0.4s]'>< FaSquareInstagram /></a>
        <a href="#"  className='text-[22px] text-[#fff] ml-[20px]  hover:text-[#ffffff86] duration-[0.3s]  hover:scale-110 hover:duration-[0.4s] '>< FaLinkedin/></a>
        <a href="#"  className='text-[22px] text-[#fff] ml-[20px]  hover:text-[#ffffff86] duration-[0.3s]  hover:scale-110 hover:duration-[0.4s] '><FaSearch/></a>
      
    </div>

     </div>

     </div>
        
        
    </div>
  </header>

      

{/* 

<header className='py-[15px]  bg-gradient-to-r from-[#6274e7] to-[#f7c2e6] '>
  <div className="max-w-container mx-auto">
    <div className="lg:flex lg:justify-between justify-center items-center "  data-aos="fade-down" data-aos-duration="1000">
      
      
      <div className="flex items-center ">
       
       
       <a href="#" className=' text-[22px] text-[#fff] hover:text-[#ffffff86] duration-[0.3s]  hover:scale-110 hover:duration-[0.4s]'>< IoLogoSkype/></a>
        <h1 className='ml-[5px] text-[16px] font-pops font-medium text-[#fff]'>Talk on Skype</h1>
      
       
       
       <a href="#" className='ml-[20px] text-[22px] text-[#fff] hover:text-[#ffffff86] duration-[0.3s]  hover:scale-110 hover:duration-[0.4s]'><IoMail /></a>
        <h2 className='ml-[5px] text-[16px] font-pops font-medium text-[#fff]'>Contact@redoyislam.me</h2>

      </div>
       <div className="flex ">
        <a href="#" className='text-[22px] text-[#fff] hover:text-[#ffffff86] duration-[0.3s]  hover:scale-110 hover:duration-[0.4s]'><FaFacebook/></a>
        <a href="#"  className='text-[22px] text-[#fff] ml-[20px]  hover:text-[#ffffff86] duration-[0.3s]   hover:scale-110 hover:duration-[0.4s]'>< FaTwitter/></a>
        <a href="#"  className='text-[22px] text-[#fff] ml-[20px]  hover:text-[#ffffff86] duration-[0.3s]   hover:scale-110 hover:duration-[0.4s]'><FaYoutube /></a>
        <a href="#"  className='text-[22px] text-[#fff] ml-[20px]  hover:text-[#ffffff86] duration-[0.3s]   hover:scale-110 hover:duration-[0.4s]'>< FaSquareInstagram /></a>
        <a href="#"  className='text-[22px] text-[#fff] ml-[20px]  hover:text-[#ffffff86] duration-[0.3s]  hover:scale-110 hover:duration-[0.4s] '>< FaLinkedin/></a>
        <a href="#"  className='text-[22px] text-[#fff] ml-[20px]  hover:text-[#ffffff86] duration-[0.3s]  hover:scale-110 hover:duration-[0.4s] '><FaSearch/></a>
       </div>
      
    </div>
  </div>
</header> */}

      
       
      <nav className='    bg-gradient-to-r from-[#6274e7] to-[#f7c2e6] '>
      
      
        <div className="max-w-container mx-auto bg-[#fff]  lg:rounded-[10px] px-[10px] py-[5px] lg:px-[34px] lg:py-[15px] "  data-aos="fade-right" data-aos-duration="1000">
            <div className=" flex justify-between items-center ">
                <div className="">
            
                <img src={mylogo} alt="" className='lg:w-[100%] w-[14%]   lg:h-[80px] ' />
              
                </div>





                <div className="">
                    <ul className={`lg:flex absolute top-0 left-0 lg:static -z-10 ${Show == true   ?' top-[55px] left-0 w-full  bg-[#fff] ease-out duration-300' : ' top-[-280px] w-full left-0 bg-[] ease-out duration-300'}`}>
                        <li className='px-[25px] text-[14px] lg:text-[18px] font-pops font-medium text-[#787878]  hover:text-[#222222] duration-[0.3s]'><a href="#" className=' active:'>Home</a></li>
                        <li  className='px-[25px] text-[14px] lg:text-[18px] font-pops font-medium  text-[#787878] hover:text-[#222222] duration-[0.3s]'><a href="#">About</a></li>


                        <li  className='px-[25px] text-[14px] lg:text-[18px] font-pops font-medium  text-[#787878] hover:text-[#222222] duration-[0.3s]'><a href="#">Blog</a></li>
                        <li  className='px-[25px] text-[14px] lg:text-[18px] font-pops font-medium  text-[#787878] hover:text-[#222222] duration-[0.3s]'><a href="#">Protfolio</a></li>
                        <li  className='px-[25px] text-[14px] lg:text-[18px] font-pops font-medium  text-[#787878] hover:text-[#222222] duration-[0.3s]'><a href="#">Skills</a></li>
                        <li  className='ml-[25px] text-[14px] lg:text-[18px] font-pops font-medium  text-[#222222] '><a href="#" className='lg:py-[12px] lg:px-[30px]   lg:border-2 border-[#22222262] lg:hover:border-none rounded-[10px] lg:hover:bg-gradient-to-r from-[#6274e7] to-[#f7c2e6]     shadow-lg  hover:text-[#fff]   hover:duration-300'>Contact</a></li >
                    </ul>
                </div>
                <div className=" lg:hidden" onClick={handleShow}>
                  {Show ?  <RxCross1/> :   <FaBars/>}
                 
                </div>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
