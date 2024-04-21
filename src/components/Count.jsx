import React from 'react'
import mobaile from '../assets/mobaile.jpg'
import CountUp from 'react-countup';

const Count = () => {
  return (
    <div className='bg-[#292929] lg:mt-[100px] mb-[50px] mt-[50px] lg:mb-[100px] '>
       <div className="max-w-container mx-auto">
        <div className=" lg:flex">
            <div className="lg:w-[70%] text-[#fff] px-[10px] lg:px-0 py-[60px]"  data-aos="zoom-in-right"
                data-aos-duration='1000'>
                <h1 className='   text-[16px] lg:text-[20px] font-pops font-bold   text-[#fff]'>_MY COMMITMENT</h1>
                <h2 className='font-pops font-bold text-[34px] lg:text-[54px] lg:w-[700px] mt-[15px] lg:leading-[70px] leading-10 text-[#fff]'>I'm Committed To Build Successful Website!</h2>
                <p className='lg:w-[600px]  mt-[15px] lg:mt-[25px] font-pops font-normal text-[14px] lg:text-[18px] leading-5 text-[#D9D9D9]'>Building a successful website requires dedication, planning, and execution. With a strong commitment and the right tools, I can assist you in achieving your goals with a thriving online presence.
</p>           
                <div className="">
                <a href="#" className='lg:py-[16px] py-[10px] px-[20px] rounded-[8px] bg-gradient-to-r from-[#6274e7] to-[#f7c2e6] text-[#ffffffee] lg:px-[30px]  hover:scale-90 hover:duration-300 font-pops lg:mt-[40px] mt-[20px] font-bold lg:text-[18px] text-[14px] inline-block '>CONTACT ME NOW</a>
                </div>
            </div>
            <div className="lg:w-[30%] mx-[10px] lg:-0"  data-aos="fade-down"
                data-aos-duration='1000'>
                <img src={mobaile} alt=""  className='lg:w-[100%] w-[70%]    rotate-12 hover:rotate-0 hover:duration-300 lg:mb-[-50px] rounded-[30px]  border-4 border-[#ffffffa8] lg:mt-[-80px] bg-no-repeat bg-center bg-cover'/>
            </div>
        </div>
        <div className=" lg:py-[50px] lg:px-[40px] py-[20px] px-[10px]   shadow-lg  rounded-t-[20px]  bg-[white]"  data-aos="fade-up"
                data-aos-duration='1000'>
          <div className="flex">
       <div className="w-[50%]">
        <h1 className='text-center mt-[10px] lg:mt-0  bg-clip-text text-transparent bg-gradient-to-r from-[#6274e7] to-[#f7c2e6] font-pops font-bold text-[26px] lg:text-[40px]'>
        <CountUp start={0}
       
       
         end={90}
         delay={0}
         ></CountUp>%
       
          
          </h1>
        <h2 className='text-center text-[#292929] font-pops font-medium lg:text-[18px] text-[14px] leading-4'>Scuccess Rate</h2>
        </div>            
       <div className="w-[50%] relative  after:absolute after:top-[10px] after:left-[0] after:h-[70px] after:w-[1px] after:bg-[#D9D9D9]">
        <h1 className='text-center bg-clip-text text-transparent lg:mt-0 mt-[10px] bg-gradient-to-r from-[#6274e7] to-[#f7c2e6] font-pops font-bold text-[26px] lg:text-[40px]'>
        <CountUp start={0}
         end={70}
         ></CountUp>%
          </h1>
        <h2 className='text-center text-[#292929] font-pops font-medium text-[14px] lg:text-[18px] leading-4 '>Complete Project</h2>
        </div>            
       <div className=" w-[50%]  relative  after:absolute after:top-[10px] after:left-0 after:h-[70px] after:w-[1px] after:bg-[#D9D9D9]">
        <h1 className='text-center bg-clip-text text-transparent bg-gradient-to-r from-[#6274e7] to-[#f7c2e6] font-pops font-bold text-[28px] lg:mt-0 mt-[10px] lg:text-[40px]'>
        <CountUp start={0}
        
        end={65}
        ></CountUp>%
      
          </h1>
        <h2 className='text-center text-[#292929] font-pops font-medium text-[14px] lg:text-[18px] leading-4 '>Satisfied Client</h2>
        </div>   
        <div className=" w-[50%]  relative  after:absolute after:top-[10px] after:left-0 after:h-[70px] after:w-[1px] after:bg-[#D9D9D9]">
        <h1 className='text-center bg-clip-text text-transparent bg-gradient-to-r from-[#6274e7] to-[#f7c2e6] font-pops font-bold lg:mt-0 mt-[10px] text-[26px] lg:text-[40px]'>
        <CountUp start={0}
        
        end={15}
        ></CountUp>%
      
        </h1>
        <h2 className='text-center text-[#292929] font-pops font-medium text-[14px] lg:text-[18px] leading-4 '>Trade In The World</h2>
        </div>            

          </div>
        </div>
       </div>
    </div>
  )
}

export default Count
