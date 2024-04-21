import React from 'react'
import { MdOutlineForwardToInbox } from "react-icons/md";
import { FaSkype } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import mylogo from'../assets/mylogo.png'

const Contact = () => {
  return (
    <div className='lg:py-[100px]  bg-[#F8F8F8] px-[10px] lg:px-0 '>
      <div className="max-w-container mx-auto ">
        <div className=" lg:flex lg:py-[40px] py-[20px] px-[20px] lg:px-[50px]   shadow-lg bg-[#292929] mt-[150px] lg:mt-[-180px] rounded-[20px]"  data-aos="fade-down"
                data-aos-duration='1000'>
            <div className="lg:w-1/2 "  data-aos="fade-down"
                data-aos-duration='1000'>
                <div className="flex items-center">
              
              <div className=" lg:py-[30px] py-[15px] px-[15px] lg:px-[30px] rounded-[50%] hover:scale-90 hover:duration-300 bg-gradient-to-r from-[#6274e7] to-[#f7c2e6] ">
              <MdOutlineForwardToInbox  className=' text-[20px] lg:text-[40px] text-[#fff]'/>
              </div>
              
              <div className="ml-[20px] ">
              <h1 className=' font-pops font-medium text-[#fff] text-[18px] lg:text-[20px]'>Email Address </h1> 
               
               <h2 className=' font-pops font-medium text-[#ffffffd8] text-[14px] lg:text-[16px]'>redoyislam0064@gmail.com</h2>
              </div>
                </div>
                
            </div>
            <div className="lg:w-1/2 mt-[10px] lg:mt-0 "  data-aos="fade-down"
                data-aos-duration='1000'>
            <div className="flex items-center">
              
              <div className=" lg:py-[30px] py-[15px] px-[15px] lg:px-[30px] rounded-[50%] hover:scale-90 hover:duration-300 bg-gradient-to-r from-[#6274e7] to-[#f7c2e6] ">
              <FaSkype className=' text-[20px] lg:text-[40px] text-[#fff]'/>
              </div>
              
              <div className="ml-[20px]">
              <h1 className=' font-pops font-medium text-[#fff] text-[18px] lg:text-[20px]'>Skype </h1> 
               
               <h2 className=' font-pops font-medium text-[#ffffffd8] text-[14px] lg:text-[16px]'>Talk On Skype</h2>
              </div>
                </div>
            </div>
            <div className="lg:w-1/2 mt-[10px] lg:mt-0"  data-aos="fade-down"
                data-aos-duration='1000'>
            <div className="flex items-center">
              
              <div className="  lg:py-[30px] py-[15px] px-[15px] rounded-[50%] hover:scale-90 hover:duration-300 bg-gradient-to-r from-[#6274e7] to-[#f7c2e6] ">
              <SlLocationPin  className=' text-[20px] lg:text-[40px] text-[#fff]'/>
              </div>
              
              <div className="ml-[20px]">
              <h1 className=' font-pops font-medium text-[#fff] text-[18px] lg:text-[20px]'>Address Location </h1> 
               
               <h2 className=' font-pops font-medium text-[#ffffffd8] text-[14px] lg:text-[16px]'>Dhaka, Bangladesh</h2>
              </div>
                </div>
            </div>
           
           
        </div>
        <div className="lg:mt-[100px] py-[50px] mt-[50px] lg:flex">
            <div className=" lg:w-1/2"  data-aos="fade-left"
                data-aos-duration='1000'>
            <h1 className=' text-[18px]  lg:text-[20px] font-pops  font-bold fon    text-[#6274e7]'>_
            CONTACT & REACH ME</h1>  
<h2 className='font-pops font-bold text-[36px]  lg:text-[54px] mt-[15px] lg:mt-[25px] leading-10 lg:leading-[60px] text-[#000000cc]'>Get In Touch And  <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#6274e7] to-[#f7c2e6]'>Contact Me !</span></h2>
<div className="w-[30%] mt-[35px] ">
<img src={mylogo} alt="" className='lg:w-[90%] w-[100%]   h-[120px]  ' />
</div>

           
            </div>
            <div className="lg:w-1/2 mt-[60px] "  data-aos="fade-right"
                data-aos-duration='1000'>
                <div className=" flex">
                    <input type="text"  placeholder='Your Name' className=' border-2 border-[#80808048] lg:pl-[15px] pl-[10px] w-[160px] lg:w-[340px] rounded-[10px] h-[40px] lg:h-[65px] font-pops text-[14px] lg:text-[18px] font-normal '/>
                    <input type="text" placeholder='Your Name' className='lg:ml-[30px] ml-[10px] lg:pl-[15px] lg:w-[340px] pl-[10px] w-[160px] border-2 border-[#80808048] rounded-[10px] h-[40px] lg:h-[65px] font-pops text-[14px] lg:text-[18px] font-normal' />
                </div>
                <div className="">
                    <input type="text"  placeholder='Subject ' className='lg:pl-[15px] pl-[10px] w-[330px] lg:w-[710px] rounded-[10px] border-2 border-[#80808048] h-[40px] lg:h-[65px] font-pops text-[14px] lg:text-[18px] font-normal mt-[15px] lg:mt-[30px]'/>
                    <input type="text"  placeholder='Message ' className=' pl-[10px] lg:pl-[15px] w-[330px] lg:w-[710px] rounded-[10px] border-2 border-[#80808048] h-[100px]  lg:h-[200px] font-pops text-[14px] lg:text-[18px] font-normal mt-[15px] lg:mt-[30px]'/>
                </div>
                <div className="lg:mt-[30px] mt-[20px]"  data-aos="zoom-in"
                data-aos-duration='1000'>
                    <a href="#" className='lg:py-[20px] py-[10px] font-pops font-medium text-[16px] lg:text-[20px] text-[#fff] px-[30px] lg:px-[60px] rounded-[10px] hover:scale-90 hover:duration-300 bg-gradient-to-r from-[#6274e7] to-[#f7c2e6] inline-block'>SEND MESSAGE</a>
                </div>
            </div>
        </div>
      </div>
     
     
    </div>
    
  )
}

export default Contact
