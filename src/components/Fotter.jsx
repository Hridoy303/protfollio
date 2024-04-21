import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'
import mylogo from'../assets/mylogo.png'
import { IoLogoSkype } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";


const Fotter = () => {
  return (
    <div className='bg-gradient-to-r from-[#6274e7] to-[#f7c2e6] py-[50px] lg:py-[120px] '>
      
      <div className="max-w-container mx-auto">
        <div className="lg:flex">
            <div className="lg:w-[40%] px-[10px] lg:px-0 "  data-aos="fade-up"
                data-aos-duration='1000'>
                <div className="py-[30px] px-[25px]  rounded-[10px] bg-[#fff]">
                   
                   <div className="flex items-center justify-between">
                   <h1 className=' font-pops  font-bold text-[#222222e5] text-[24px] lg:text-[32px]'>Hridoy Islam</h1>
                    <img src={mylogo} alt="" className='w-[10%]   h-[40px]  ' />
                   </div>
                    {/* <h2 className=' font-pops font-medium  bg-clip-text text-transparent bg-gradient-to-r from-[#6274e7] to-[#f7c2e6] text-[20px]'>_Web Developer</h2> */}


                    <h1 style={{ paddingTop: '', marginLeft: 'auto 0', fontWeight: 'semibold', fontSize:'20px', color:'#ffffffe7' }}>
                 {' '}
        <span style={{ color:'#222222c5',  fontWeight: 'bold' }}>
          
          <Typewriter
            words={['_Web Developer', '_Web Developer', '_Web Developer', '_Web Developer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
            
          />
        </span>
      </h1>
                   
                   
                   <p className=' mt-[10px] lg:mt-[15px] text-[#222222c5] font-pops font-medium text-[14px] lg:text-[16px] lg:w-[400px] '>

                   As a passionate web developer, I work with various technologies to provide optimal solutions for my clients, while keeping myself up-to-date with latest techonlogy.

        
         <div className="flex mt-[20px]">
      
      <div className="py-[10px] px-[10px]  hover:scale-90 hover:duration-300 bg-gradient-to-r from-[#6274e7] to-[#f7c2e6] rounded-[50%]">
      <a href="#" className=' text-[18px] lg:text-[22px] text-[#] text-[#fff]   '><FaFacebook/></a>
      </div>
      <div className="py-[10px] px-[10px] hover:scale-90 hover:duration-300 ml-[10px] bg-gradient-to-r from-[#6274e7] to-[#f7c2e6] rounded-[50%]">
      <a href="#" className=' text-[18px] lg:text-[22px] text-[#] text-[#fff]   '><FaTwitter/></a>
      </div>
      <div className="py-[10px] px-[10px] hover:scale-90 hover:duration-300 ml-[10px] bg-gradient-to-r from-[#6274e7] to-[#f7c2e6] rounded-[50%]">
      <a href="#" className=' text-[18px] lg:text-[22px] text-[#] text-[#fff]   '><FaYoutube/></a>
      </div>
      <div className="py-[10px] px-[10px] hover:scale-90 hover:duration-300 ml-[10px] bg-gradient-to-r from-[#6274e7] to-[#f7c2e6] rounded-[50%]">
      <a href="#" className=' text-[18px] lg:text-[22px] text-[#] text-[#fff]   '><FaSquareInstagram/></a>
      </div>
      <div className="py-[10px] px-[10px] hover:scale-90 hover:duration-300 ml-[10px] bg-gradient-to-r from-[#6274e7] to-[#f7c2e6] rounded-[50%]">
      <a href="#" className=' text-[18px] lg:text-[22px] text-[#] text-[#fff]   '><FaLinkedin/></a>
      </div>
        
        
        
        
        
       </div>
      
         
</p>
                
                </div>
            </div>
            <div className="lg:w-[15%] mx-[10px] lg:mx-0 lg:ml-[100px]"  data-aos="fade-up"
                data-aos-duration='1000'>
                <div className="">
                    <h1 className='text-[#fff] font-pops font-bold text-[18px] mt-[10px] lg:mt-0 lg:text-[20px]'>Quick Links</h1>
                    <h2 className='text-[#ffffffb9] mt-[10px] lg:mt-[15px] font-pops font-medium text-[16px] lg:text-[18px]'>Home</h2>
                    <h2 className='text-[#ffffffb9] mt-[4px] lg:mt-[7px] font-pops font-medium text-[16px] lg:text-[18px]'>About</h2>
                    <h2 className='text-[#ffffffb9] mt-[4px] lg:mt-[7px] font-pops font-medium text-[16px] lg:text-[18px]'>Blog</h2>
                    <h2 className='text-[#ffffffb9] mt-[4px] lg:mt-[7px] font-pops font-mediumtext-[16px]  lg:text-[18px]'>Protfolio</h2>
                    <h2 className='text-[#ffffffb9] mt-[4px] lg:mt-[7px] font-pops font-medium text-[16px] lg:text-[18px]'>Skills</h2>
                    <h2 className='text-[#ffffffb9] mt-[4px] lg:mt-[7px] font-pops font-medium text-[16px] lg:text-[18px]'>Contact</h2>
                </div>
            </div>
            <div className=" lg:w-[15%] mx-[10px] lg:mx-0"  data-aos="fade-up"
                data-aos-duration='1000'>
                <div className="">
                    <h1 className='text-[#fff] font-pops font-bold text-[18px] mt-[10px] lg:mt-0 lg:text-[20px]'>OTHER PAGE</h1>
                    <h1 className='text-[#ffffffb9] font-pops font-medium mt-[10px] lg:mt-[15px]  text-[16px] lg:text-[18px]'>Testimonial</h1>
                    <h1 className='text-[#ffffffb9] font-pops font-medium mt-[4px] lg:mt-[7 mt-[7px]px] text-[16px] lg:text-[18px]'>Commitment</h1>
                    <h3 className='text-[#ffffffb9] font-pops font-medium mt-[4px] lg:mt-[7px] text-[16px] lg:text-[18px]'>Contact</h3>
                </div> 
            </div>
            <div className=" lg:w-[15%] mx-[10px] lg:mx-0"  data-aos="fade-up"
                data-aos-duration='1000'>
                <div className="">
                    <h1 className='text-[#fff] font-pops font-bold text-[20px]'>Location Address</h1>
                    <h2 className='text-[#ffffffb9] font-pops font-medium text-[18px] mt-[15px]'>Know where to find me? Let's take a look and get in touch!</h2>

                   
                   <div className="mt-[30px]">
                   <div className="flex items-center">
                            <SlLocationPin  className=' text-[22px] text-[#ffffffb9] hover:text-[#ffffff86] duration-[0.3s]  hover:scale-110 hover:duration-[0.4s]'/>
                            <h1 className='ml-[5px] text-[16px] font-pops font-medium text-[#ffffffb9]'>Dhaka, Bangladesh</h1>
                        </div>
                        <div className="flex items-center mt-[5px]">
                            <IoMail className='text-[22px] text-[#ffffffb9] hover:text-[#ffffff86] duration-[0.3s]  hover:scale-110 hover:duration-[0.4s]' />
                            <h1 className='ml-[5px] text-[16px] font-pops font-medium text-[#ffffffb9]'>redoyislam@</h1>
                        </div>
                        <div className=" mt-[5px] flex items-center">
                            <IoLogoSkype  className='text-[22px] text-[#ffffffb9] hover:text-[#ffffff86] duration-[0.3s]  hover:scale-110 hover:duration-[0.4s]'/>
                            <h1 className='ml-[5px] text-[16px] font-pops font-medium text-[#ffffffb9]'>Talk On Skype</h1>
                        </div>
                   </div>
                    <div className="lg:mt-[70px] mt-[30px]">
                       
                       
                        <a href="#" className='lg:py-[12px] py-[8px] hover:bg-[pink] hover:duration-300   hover:scale-90 px-[20px] lg:px-[30px] bg-[#fff] inline-block rounded-[8px] font-pops font-medium text-[16px] lg:text-[18px] text-[#222222dc]'>Download\cv</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Fotter
