import React from 'react'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter'


const Banner = () => {
  return (
    <div className=' py-[50px] bg-gradient-to-r from-[#6274e7] to-[#f7c2e6] '>
       
       
      <div className=" max-w-container  mx-auto">
        <div className="lg:flex px-[10px] ">
           
       
       
       <div className="lg:w-[30%]     bg-[url(../src/assets/ban.jpg)]  top-[80px]   lg:top-[80px] h-[400px]   rounded-full lg:rounded-none    bg-no-repeat bg-cover  bg-center
          relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-[100%] after:h-[100%]   hover:after:bg-gradient-to-r from-[#6274e744] to-[#f7c2e63f]    hover:after:duration-[0.5s]" 
        data-aos="fade-up" data-aos-duration="1000">
            
            
            
            

            </div>
       
            <div className=" lg:w-[50%] lg:mt-[60px] mt-[70px] lg:ml-[50px] ml-[10px] "data-aos="fade-up"
                data-aos-duration="1000">
              
                <h1 style={{ paddingTop: '', margin: 'auto 0', fontWeight: 'medium', fontSize:'48px', color:'#ffffffe7' }}>
                _Hridoy Islam {' '}
        <span style={{ color: '#ffffffe7', fontWeight: 'medium' }}>
          
          <Typewriter
            words={['(Johan)', '(Johan)', '(Johan)', '(Johan)']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
            
          />
        </span>
      </h1>

                {/* <h3 className='font-pops font-bold  text-[32px]  text-[#fff] mt-[3px] '>I'm A Mern Stack Web Developer</h3> */}
                
                <h1 style={{ paddingTop: '', margin: 'auto 0', fontWeight: 'bold', fontSize:'32px', color:'#fff' }}>
                I'm A{' '}
        <span style={{ color: '#fff', fontWeight: 'bold' }}>
          
          <Typewriter
            words={['Mern Stack Web Developer', 'Frontend Developer', 'Backend Developer', '']}
            
            loop={5}
            cursor
            cursorStyle='|'
            cursorColor=''
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          
            
          />
        </span>
      </h1>
              
              <div className="lg:mt-[30px] mt-[20px]">
                
              <h1 className='text-[#ffffffcb] font-pops font-medium lg:text-[18px]  text-[14px]'>Age : <span className='lg:ml-[55px] ml-[10px] '>19 (years)</span></h1>
                
                <h3 className='text-[#ffffffcb] font-pops font-medium lg:text-[18px] mt-[5px] text-[14px]'>Phone : <span className='lg:ml-[34px] ml-[10px]  '>01858095044</span></h3>
                <h4 className='text-[#ffffffcb] font-pops font-medium lg:text-[18px] text-[14px text-[14px] mt-[5px]'>Email : <span className='lg:ml-[41px]  ml-[10px] '>redoyislam0064@gmail.com</span></h4>
                <h5 className='text-[#ffffffcb] font-pops font-medium lg:text-[18px] mt-[5px] text-[14px]'>Address : <span className='lg:ml-[18px]   ml-[10px]'>Dhaka, Bangladesh</span></h5>
              
              </div>
              
                <div className="flex lg:mt-[30px] mt-[20px] ">
               
               <a href="#" className=' text-[#ffffffcb] lg:text-[25px] text-[18px] hover:text-[#fff] duration-[0.3s]  hover:scale-110 hover:duration-[0.4s]'><FaGithub/> </a>
               
               <a href="#" className='ml-[10px] text-[#ffffffcb] lg:text-[25px] text-[18px] hover:text-[#fff] hover:scale-110 hover:duration-[0.4s] duration-[0.3s]'>  <FaLinkedin/></a>
               
               <a href="#" className='ml-[10px] text-[#ffffffcb] lg:text-[25px] text-[18px] hover:text-[#fff] duration-[0.3s]  hover:scale-110 hover:duration-[0.4s]'> <FaFacebook/></a>
                
                <a href="#" className='ml-[10px] text-[#ffffffcb] lg:text-[25px] text-[18px] hover:text-[#fff] duration-[0.3s]  hover:scale-110 hover:duration-[0.4s]'><FaSquareInstagram/></a>

                </div>
              
                {/* <div className="mt-[30px]  ">
                    <a href="#" className='py-[12px] px-[30px] text-[16px] font-pops text-[#081b29] bg-gradient-to-r from-[#ffd68a] to-[#f4762d] hover:bg-[] hover:duration-[0.3s]  font-semibold  rounded-[8px] border-[#00abf0] hover:border-transparent  inline-block box-shadow: 4px 8px 5px 0px rgba(0,0,0,0.73);
                   -webkit-box-shadow: 4px 8px 5px 0px rgba(0,0,0,0.73);
                  -moz-box-shadow: 4px 8px 5px 0px rgba(0,0,0,0.73); ' >Hire/me</a>
                    <a href="#" className='py-[12px] px-[30px] text-[16px] font-pops text-[#ededed] bg-[] border-2 border-[#ededed] font-semibold  inline-block ml-[30px] rounded-[8px] hover:bg-gradient-to-r from-pink-400 to-purple-600 hover:duration-[0.3s] hover:border-transparent '>Download/cv</a>
                </div> */}
            </div>
          
          
        </div>
       
        
        
      </div>
    </div>
  )
}

export default Banner
