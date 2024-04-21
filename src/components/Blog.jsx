import React from 'react'
import blog from '../assets/blog.jpg'

const Blog = () => {
  return (
    <div className='lg:py-[60px] px-[10px] py-[30px] lg:mt-[60px] mt-[30px] '>
    <div className="max-w-container mx-auto">
        <div className="lg:flex " >
            <div className="lg:w-[60%] " data-aos="zoom-in-right"
                data-aos-duration='1000'>
              
              <div className="px-[10px] lg:px-0">
              <img src={blog} alt="" className='w-[100%] cursor-pointer  object-cover  duration-500 hover:scale-90 rounded-t-[20px]  bg-no-repeat bg-cover bg-center' />
              </div>
              
              <div className="">
              <h3 className=' font-pops font-medium lg:text-[28px] text-[22px] px-[20px] text-[#223645] mt-[30px]  lg:leading-[38px] '>Take Automatic Backup of react Website | Save to Google Drive | Dropbox | Free Plugin </h3>
              </div>
              <div className=" shadow-lg rounded-b-[20px] ">
             
             
                <p className='mt-[15px] lg:w-[400px] pb-[30px] font-pops px-[20px] text-[#787878] font-regular text-[16px] lg:text-[18px]'>How to take automatic backup of a react website</p>
              </div>
            </div>
            <div className="lg:w-[40%] px-[10px] lg:px-0 lg:ml-[400px] lg:mt-[80px] mt-[40px]"  data-aos="fade-up"
                data-aos-duration='1000'>
             
            <h4 className='  lg:ml-[50px] lg:text-[22px] font-pops font-bold   text-[#6274e7] '>_LATEST BLOG!</h4>
            <h2 className='font-pops font-bold lg:text-[60px] text-[36px] mt-[15px] lg:leading-[70px] leading-10 text-[#000000cc]'>My Recent Insights & <span className=' bg-clip-text text-transparent bg-gradient-to-r from-[#6274e7] to-[#f7c2e6]'>Blog</span></h2>
            <p className='lg:w-[500px]  lg:mt-[25px] mt-[15px] font-pops font-normal lg:text-[18px] text-[16px] text-[#222222ad]'>In my free time, I try to share my knowledge with my audience on the topic of web design and development. Also, information about various technology like HTML, CSS, Javascript, React, Etc</p>
              
            <a href="#" className='lg:py-[16px] rounded-[8px] bg-indigo-500 shadow-lg shadow-indigo-500/50 text-[#ffffffee] py-[8px] px-[15px] lg:px-[30px] bg-gradient-to-r from-[#6274e7] to-[#f7c2e6] hover:scale-90 hover:duration-300 font-pops lg:mt-[40px] mt-[20px] font-bold lg:text-[18px] text-[14px] inline-block  hover:bg-[#1B3096]'>VIEW ALL BLOG</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Blog
