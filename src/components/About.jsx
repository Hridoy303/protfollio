import React from 'react'
import style from'../assets/style.jpg'



const About = () => {
  return (
    <div className='lg:py-[130px] py-[60px]'>
        
        
        <div className="max-w-container mx-auto">
       
       <div className="px-[15px] lg:px-0">
       <div className="flex justify-center  lg:py-[50px]  lg:rounded-3xl py-[20px] px-[20px] lg:px-[100px] lg:mb-[60px] mb-[20px] bg-[#262626] ">
            <h2 className='text-[#fff] font-pops font-semibold   text-[22px] sm:mt-0 mt-[0] lg:w-[500px] w-[1000px] text-center lg:mt-0 lg:text-[40px] '>A Passionate Developer
Who Loves to Code</h2>
            </div>
       </div>
           
            <div className="lg:flex  lg:mt-[50px] sm:flex ">
                
                <div className="lg:w-[37%] sm:w-1/2 sm:ml-[10px] lg:ml-0 ">
                <div className=" lg:h-[400px]  px-[15px] lg:px-0       r lg:w-[400px] relative after:absolute after:content-[''] after:top-0 after:left-0 after:hover: rounded-3xl   after:w-lg:[400px] lg:after:h-[600px] hover:after:bg-[#00000063]  after:duration-300 hover:scale-95 hover:duration-300 ">
                    
                    <img src={style} alt="" className='  ' />
                    
                
                </div>
                </div>
                <div className="  lg:w-[37%] sm:w-1/2  px-[15px] lg:px-0 sm:mx-[30px] lg:mx-0  ">
                    <h2 className='text-[#fff] font-pops font-semibold text-[28px] sm:mt-0 mt-[40px] lg:mt-0 lg:text-[50px]'>About me</h2>
                    <p className='text-[#ababab]   lg:w-[600px]    font-pops font-normal mt-[7px]  lg:mt-0 lg:text-[18px]  text-[13px] lg:text-left '>Hi There, I'm a passionate web developer with a keen eye for detail, and a drive to create elegant, efficient, and user-friendly web app. With over 1+ years of experience in web development, I've honed my skills in a variety of technologies, including ReactJs, Nodejs, ExpressJs, Firebase, Javascript, es6+ and MongoDB.</p>
                    <div className="flex lg:mt-[20px]  sm:mt-[20px] mt-[30px]   sm:justify-start  lg:justify-start  ">
                        <h2 className='text-[white]  font-pops font-medium text-[14px] lg:text-[18px] relative after:absolute after:content-[""] after:left-0 lg:after:bottom-[-6px] after:bottom-[-3px] after:w-[0] lg:after:h-[4px] after:h-[3px]  after:bg-[lightseagreen]  after:hover:w-[100%] after:hover:duration-300'>Skills</h2>
                        <h4  className='text-[white] ml-[40px]  font-pops font-medium text-[14px] lg:text-[18px] relative after:absolute after:content-[""] after:left-0 lg:after:bottom-[-6px] after:bottom-[-3px] after:w-[0] lg:after:h-[4px] after:h-[3px]  after:bg-[lightseagreen]  after:hover:w-[100%] after:hover:duration-300'>Experience</h4>
                        <h5 className='text-[white] ml-[40px] font-pops font-medium text-[14px] lg:text-[18px] relative after:absolute after:content-[""] after:left-0 lg:after:bottom-[-6px] after:bottom-[-3px] after:w-[0] lg:after:h-[4px] after:h-[3px]  after:bg-[lightseagreen]  after:hover:w-[100%] after:hover:duration-300'>Education</h5>
                        
                    </div>
                    <div className="lg:mt-[40px] sm:mt-[20px]  mt-[30px]   sm:ml-0     lg:ml-0 mr-[10px]">
                        <h2 className='text-[lightseagreen] font-pops font-normal  lg:text-[18px] text-[16px]'>Ui/Ux</h2>
                        <h3 className='text-[white] font-pops font-medium lg:text-[22px] text-[18px]'>Web Design/App Intercase</h3>
                        <h4 className='text-[#ff04ffbd] mt-[10px] font-pops font-normal lg:text-[18px] text-[16px]'>Web Development</h4>
                        <h4 className='text-[white] font-pops font-medium lg:text-[22px] text-[18px]'>Web app Development</h4>
                        <h5 className='text-[lightseagreen] mt-[10px] font-pops font-normal lg:text-[18px] text-[16px]'>Apps Development</h5>
                        <h6 className='text-[white] font-pops font-medium lg:text-[22px] text-[18px]'>Building Android/iOS apps</h6>
                    </div>
                </div>
               
               
            </div>
           
           
        </div>
       
       
    </div>
  )
}

export default About
