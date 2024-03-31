import React from 'react'
import workone from'../assets/workone.png'
import worktwo from'../assets/worktwo.png'
import workthree from'../assets/workthree.png'
import { FaExternalLinkAlt } from "react-icons/fa";

const Work = () => {
  return (
    <div className='lg:py-[120px] py-[60px]'>
        <div className="max-w-container mx-auto">
       
        <div className="px-[15px] lg:px-0">
       <div className="flex justify-center  lg:rounded-3xl lg:py-[50px] py-[20px] px-[20px] lg:px-[100px] lg:mb-[60px] mb-[20px] bg-[#262626] ">
            <h2 className='text-[#fff] font-pops font-semibold   text-[22px] sm:mt-0 mt-[0] lg:w-[500px] w-[1000px] text-center lg:mt-0 lg:text-[40px] '>What I Do for My Clients</h2>
            </div>
       </div>
            <div className="px-[15px] lg:px-0">
            <h1 className='text-[white] lg:text-[48px] text-[28px] font-pops font-semibold  mb-[30px]  '>My Work</h1>
            </div>
            <div className="lg:flex px-[5px] lg:px-0 flex-wrap lg:mx-0 mx-[10px]">
                <div className="lg:w-[33%] relative overflow-hidden mb-[30px] lg:mb-0 ">
                   
                   
                   <img src={workone} alt="" className='w-[100%] bg-cover bg-no-repeat bg-center   rounded-[10px]    ' />
                
                    <div className=" absolute   bg-[rgba(34,34,34,0.69)] top-0 bottom-0   overflow-hidden  w-[100%]   h-[100%] opacity-0 text-center lg:py-[180px] py-[140px] px-[20px] lg:px-[40px]    hover:opacity-100  hover:duration-500 ">
                    <h1 className='text-[white]  font-pops font-medium lg:mb-[20px] mb-[10px] lg:text-[24px] text-[18px]'>Ui/Ux Design</h1>
                     <p className='text-[white] font-pops font-medium lg:text-[18px] text-[14px]'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, ipsa. Quia velit ipsa adipisicing elit. Porro,  </p>
                     <div className="">
                    
                    <div className=" flex justify-center ">
                    <a href="#" className='lg:py-[12px] py-[10px] px-[18px] lg:px-[22px] lg:mt-[20px] mt-[15px] hover:bg-[lightseagreen] hover:duration-300    rounded-full  bg-[#fff]'><FaExternalLinkAlt className='text-[#222]  text-[18px]  ' /></a>
                    </div>
                     </div>
                    
                    
                    </div>
                </div>
                
               
               
                <div className="lg:w-[33%] relative overflow-hidden mb-[30px] lg:mb-0">
                <img src={worktwo} alt="" className='w-[100%] lg:ml-[30px] bg-cover bg-no-repeat bg-center  rounded-[10px] ' />
                
                <div className=" absolute  bg-[rgba(34,34,34,0.69)] top-0 bottom-0   overflow-hidden  w-[100%]   h-[100%] opacity-0 text-center lg:lg:py-[180px] py-[140px] px-[20px] lg:lg:px-[40px] lg:ml-[20px]    hover:opacity-100  hover:duration-500 ">
                    <h1 className='text-[white]  font-pops font-medium mb-[10px] lg:mb-[20px] lg:text-[24px] text-[18px]'>Web Design</h1>
                     <p className='text-[white] font-pops font-medium lg:text-[18px] text-[14px] '> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, ipsa. Quia velit ipsa adipisicing elit. Porro,  </p>
                     <div className="">
                  
                  
                     </div>
                     <div className=" flex justify-center ">
                    <a href="#" className='lg:py-[12px] py-[10px] px-[18px] lg:px-[22px] lg:mt-[20px] mt-[15px] hover:bg-[lightseagreen] hover:duration-300    rounded-full  bg-[#fff]'><FaExternalLinkAlt className='text-[#222]  text-[18px]  ' /></a>
                    </div>
                    
                    </div>
                    
                </div>
                 <div className="lg:w-[33%] relative overflow-hidden">
                  <img src={workthree} alt="" className='lg:ml-[35px] w-[100%] bg-cover bg-no-repeat bg-center  rounded-[10px] '/>
                  <div className=" absolute  bg-[rgba(34,34,34,0.69)] top-0 bottom-0   overflow-hidden  w-[100%] lg:ml-[20px]  h-[100%] opacity-0 text-center lg:py-[180px] lg:px-[40px] py-[140px] px-[20px]    hover:opacity-100  hover:duration-500 ">
                    <h1 className='text-[white]  font-pops font-medium lg:mb-[20px] mb-[10px] text-[18px] lg:text-[24px]'>Web Development</h1>
                     <p className='text-[white] font-pops font-medium lg:text-[18px] text-[14px]'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, ipsa. Quia velit ipsa adipisicing elit. Porro,  </p>
                     <div className="">
                    
                  
                     <div className=" flex justify-center ">
                    <a href="#" className='lg:py-[12px] py-[10px] px-[18px] lg:px-[22px] lg:mt-[20px] mt-[15px] hover:bg-[lightseagreen] hover:duration-300    rounded-full  bg-[#fff]'><FaExternalLinkAlt className='text-[#222]  text-[18px]  ' /></a>
                    </div>
                    
                     </div>
                    
                    
                    </div>
                 </div>
              
            </div>
          
        </div>
        <div className=" flex justify-center">
                <a href="#" className='text-[#fff] font-pops font-medium lg:text-[16px] text-[14px]  border-2 border-[#ff00518e] rounded-[6px] lg:py-[14px] py-[8px] px-[20px] lg:px-[50px] hover:bg-[#ff004f] duration-200 lg:mt-[55px] mt-[40px]'>See more</a>
            </div>
      
    </div>
  )
}

export default Work
