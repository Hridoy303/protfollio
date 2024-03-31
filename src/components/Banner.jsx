import React from 'react'
import group from '../assets/group.jpg'



const Banner = () => {
 
  

  return (
    <div>
      <div className=" max-w-container mx-auto">
        <div className="lg:flex px-[15px] lg:px-0 text-left  lg:text-left ">
           
           
            <div className="lg:w-2/3 lg:py-[250px] ">
          
          
                <h1 className='text-[white] lg:text-[48px] text-[24px] font-pops font-semibold lg:mt-[20px] mt-[60px]'>Hi, i'm  <span className='text-[#ff00f4] font-pops font-medium'>Hridoy</span></h1>
              
              
                <h5 className='text-[white] lg:text-[40px] text-[26px] font-pops font-medium lg:mt-[5px] mt-[7px]'><span className='text-[lightseagreen]'>From</span> Bangladesh</h5>
               
            
                <h2 className='text-[#ff004f] lg:text-[48px] text-[24px] font-pops font-semibold '>i'm a</h2>
                <p className='text-[white] lg:text-[48px] text-[28px] font-pops font-semibold lg:mt-[5px] mt-[7px] '>Frontend Developer</p>
            </div>
           
          <div className="lg:h-[400px] lg:w-[700px] lg:py-[90px] mt-[40px] lg:mt-0 ">
          <img src={group} alt="" className=' rounded-full  w-[100%]  bg-center bg-no-repeat bg-cover
    ' />

          </div>
          
       
       
           </div>
        </div>
      </div>
    
  )
}

export default Banner
