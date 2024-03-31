import React from 'react'
import { FaCode } from "react-icons/fa";
import { FaCropAlt } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";

const Service = () => {
  return (
    <div className='lg:py-[120px] py-[60px]'>
      
      <div className="max-w-container mx-auto">
    
      <div className="px-[15px] lg:px-0">
       <div className="flex justify-center  lg:rounded-3xl  lg:py-[50px] py-[20px] px-[20px] lg:px-[100px] lg:mb-[60px] mb-[20px] bg-[lightseagreen] ">
            <h2 className='text-[#fff] font-pops font-semibold   text-[22px] sm:mt-0 mt-[0] lg:w-[500px] w-[1000px] text-center lg:mt-0 lg:text-[40px] '>I Work Hard to Improve
My Skills Regularly</h2>
            </div>
       </div>
        <div className="px-[15px] lg:px-0">
            <h1 className='text-[white] lg:text-[48px] text-[28px] font-pops font-semibold  lg:ml-0'>My Service</h1>
        </div>
        <div className="lg:flex px-[15px] lg:px-0  lg:mt-[40px] mt-[30px]">
            
            <div className="lg:w-[33%] bg-[#262626]  lg:p-[40px] p-[20px] hover:bg-[lightseagreen] hover:duration-300 hover:scale-95 duration-300 ">
                <FaCropAlt className='text-[white] lg:text-[50px] text-[32px] lg:mb-[30px] mb-[15px]'/>
                  
                <h1 className='text-[white] font-pops font-medium lg:text-[30px] text-[24px] lg:mb-[15px] mb-[10px]'>Ui/Ux Design</h1>
                <p className='text-[white] font-pops font-normal lg:text-[16px] text-[14px]'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, ipsa. Quia velit ipsa earum neque?ipsa. Quia velit ipsa earum neque?</p>
               
               <div className="lg:mt-[20px] mt-[15px]">
               <a href="#" className='text-[#fff] lg:text-[14px] text-[12px] hover:text-[#ff04ff]  hover:duration-300  font-pops'>Learn more</a>
               </div>
            </div>
           
           
            <div className="lg:w-[33%] bg-[#262626] mt-[20px] lg:mt-0  lg:ml-[30px] lg:p-[40px] p-[20px] hover:bg-[lightseagreen] hover:duration-300 hover:scale-95 duration-300 ">
                <FaAppStoreIos className='text-[white] lg:text-[50px] text-[32px] lg:mb-[30px] mb-[15px]'/>
                  
                <h1 className='text-[white] font-pops font-medium lg:text-[30px] text-[24px] lg:mb-[15px] mb-[10px]'>Web design</h1>
                <p className='text-[white] font-pops font-normal lg:text-[16px] text-[14px]'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, ipsa. Quia velit ipsa earum neque?ipsa. Quia velit ipsa earum neque?</p>
               
               <div className="lg:mt-[20px] mt-[15px]">
               <a href="#" className='text-[#fff] lg:text-[14px] text-[12px] hover:text-[#ff04ff]  hover:duration-300  font-pops'>Learn more</a>
               </div>
            </div>

            <div className="lg:w-[33%] bg-[#262626] mt-[20px] lg:mt-0  lg:ml-[30px] lg:p-[40px] p-[20px] hover:bg-[lightseagreen] hover:duration-300 hover:scale-95 duration-300 ">
                  <FaCode className='text-[white] lg:text-[50px] text-[32px] lg:mb-[30px] mb-[15px]' />
                <h1 className='text-[white] font-pops font-medium lg:text-[30px] text-[24px] lg:mb-[15px] mb-[10px]'>Web Development</h1>
                <p className='text-[white] font-pops font-normal lg:text-[16px] text-[14px]'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, ipsa. Quia velit ipsa earum neque?ipsa. Quia velit ipsa earum neque?</p>
               
               <div className="lg:mt-[20px] mt-[15px]">
               <a href="#" className='text-[#fff] lg:text-[14px] text-[12px] hover:text-[#ff04ff]  hover:duration-300  font-pops'>Learn more</a>
               </div>
            </div>
           
           
          
          
        </div>
      </div>
    </div>
  )
}

export default Service
