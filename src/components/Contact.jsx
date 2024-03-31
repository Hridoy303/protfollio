import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
    <div className='py-[50px]'>
      <div className="max-w-container mx-auto">
      
      <div className="px-[15px] lg:px-0">
       <div className="flex justify-center  lg:rounded-3xl  lg:py-[50px] py-[20px] px-[20px] lg:px-[100px] lg:mb-[60px] mb-[20px] bg-[#ff0064] ">
            <h2 className='text-[#fff] font-pops font-semibold   text-[22px] sm:mt-0 mt-[0] lg:w-[500px] w-[1000px] text-center lg:mt-0 lg:text-[40px] '>I Want to Hear from You</h2>
            </div>
       </div>
        <div className="">
        <h1 className='text-[white] lg:text-[48px] text-[28px] font-pops font-semibold ml-[10px] mb-[30px]  lg:ml-0'>Contact me</h1>
        </div>
        <div className=" lg:flex  sm:flex justify-center px-[15px] lg:px-0">
            <div className=" lg:w-1/2 sm:w-1/2 mt-[15px] ">
                 
                 <div className=" flex items-center text-[white]">
                 <IoMdMail  className='text-[#ff004f] lg:text-[25px] text-[22px] mr-[8px] lg:mr-[15px]' />
                 
                <h2 className='font-pops font-normal text-[14px] lg:text-[18px]  '>redoyislam0064@gmail.com</h2>
                 </div>
               
               <div className=" flex items-center lg:mt-[8px] mt-[8px] text-white">
               <FaPhone  className='text-[#ff004f] lg:text-[22px] text-[20px]    mr-[8px] lg:mr-[15px]' />
                <h3 className=' font-pops font-normal text-[14px] lg:text-[18px]'>01858095044</h3>
               </div>
               <div className=" lg:mt-[30px]  mt-[20px] flex">
             
             <a href="https://www.facebook.com/?ref=homescreenpwa">  <FaFacebook  className='text-[#ababab] lg:text-[30px] text-[25px] mr-[10px] lg:mr-[15px] hover:text-[#ff004f] hover:duration-200  hover:scale-90  '/></a>
               <FaTwitter  className='text-[#ababab] lg:text-[30px] text-[25px] lg:mr-[15px] mr-[10px] hover:text-[#ff004f] hover:duration-200  hover:scale-90'/>
               <FaInstagramSquare  className='text-[#ababab] text-[25px] lg:text-[30px] mr-[10px] lg:mr-[15px] hover:text-[#ff004f] hover:duration-200  hover:scale-90'/>
               <FaLinkedin  className='text-[#ababab] text-[25px] lg:text-[30px] mr-[10px] lg:mr-[15px] hover:text-[#ff004f] hover:duration-200  hover:scale-90'/>

               </div>
             
             <div className=" lg:mt-[50px] mt-[40px]">
             <a href="#" className='text-[#fff] font-pops font-medium text-[14px] lg:text-[16px]   bg-[#ff004f] rounded-[6px] lg:py-[12px] py-[10px] lg:px-[38px] px-[18px]  hover:bg-[lightseagreen]  hover:duration-700 '>Download cv</a>
             </div>
            </div>
            <div className="lg:w-1/2 sm:w-1/2">
                <div className="">
                    <div className=" text-[white] sm:mt-0 mt-[50px] lg:mt-0">
                        <input type="text" className='w-[100%] border-0 outline-none bg-[#262626] lg:p-[15px] p-[10px]   text-[#fff] lg:text-[18px] text-[14px] rounded-[6px] font-pops font-medium '  placeholder=' Your Name'/>
                        <input type="email" className='w-[100%] border-0 outline-none bg-[#262626] lg:p-[15px] p-[10px]  mt-[15px] text-[#fff] lg:text-[18px] text-[14px] rounded-[6px] font-pops font-medium '  placeholder=' Your Email'/>
                        <textarea name="message" id="" className='w-[100%] border-0 outline-none bg-[#262626] lg:p-[15px] p-[10px]  mt-[15px] text-[#fff] lg:text-[18px] text-[14px] rounded-[6px] font-pops font-medium ' placeholder='Your message'></textarea>
                        <button type='submit' className='text-[#fff] font-pops font-medium lg:text-[16px] text-[14px] mt-[30px]  bg-[#ff004f] rounded-[6px] py-[8px] lg:py-[12px] px-[20px] lg:px-[38px]  hover:bg-[lightseagreen]  hover:duration-700'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
     
     
     
    </div>
    <div className="bg-[#262626] py-[15px] lg:py-[30px]">
        <div className="">
            <div className="flex justify-center">
                <p className=' font-pops font-normal text-[#ffffffa6] text-[12px] lg:text-[18px]'>© Copyright 2022 by AltDesain Studio – All right reserved.</p>
            </div>
        </div>
    </div>
   </div>
    
  )
}

export default Contact
