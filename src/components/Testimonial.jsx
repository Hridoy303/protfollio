import React from 'react'
import manone from'../assets/manone.png'
import mantwo from'../assets/mantwo.png'
import manthree from'../assets/manthree.png'
import ScrollToTop from "react-scroll-to-top";
import { FaArrowTurnUp } from "react-icons/fa6";
// import { IoIosArrowRoundBack } from "react-icons/io";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import Slider from "react-slick";

// function SampleNextArrow(props) {
//   const { onClick } = props;
//   return (
//     <div className='next' onClick={onClick}><IoIosArrowRoundBack className='sei'/></div>
//   );
// }

// function SamplePrevArrow(props) {
//   const { onClick } = props;
//   return (
//     <div className='prev' onClick={onClick}><IoIosArrowRoundForward className='oi'/></div>
//   );
// }






const Testimonial = () => {


  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 200,
  //   slidesToShow: 1,
  //   slidesToScroll: 2,
  //   autoplay: true,
  
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />
  
    
  // };
  return (
  
 
    
    <div className='lg:py-[200px] pt-[80px] bg-[#fff]  '>
      
      
    
    
    {/* <ScrollToTop smooth component={<p style={{ color: "blue",     height:'40px',   fontFamily:'pops', fontSize:'25px' }}>up</p>} />
       */}
         <ScrollToTop smooth   component={<p className='text-[white] font-pops text-[24px] '><FaArrowTurnUp  className='ml-[8px]  '/></p>}  className=' z-50 bg-gradient-to-r from-[#6274e7] to-[#f7c2e6]  ' />
    
        <div className="max-w-container mx-auto">
        <div className="">
        <h1 className=' text-[16px] lg:text-[20px] font-pops font-bold fon  text-center  text-[#6274e7]'>_
CLIENT'S REVIEWS
</h1>
        <h2 className='font-pops font-bold text-center text-[32px] lg:text-[54px] mt-[10px] lg:mt-[20px] leading-10 lg:leading-[50px] text-[#000000cc]'>Checkout  <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#6274e7] to-[#f7c2e6]'>Testimonial</span></h2>
        </div>
        
     
            <div className=" lg:mt-[60px] mt-[30px] lg:flex">
         
         
          
            <div className="lg:w-[32%] lg:px-0 px-[10px]"  data-aos="fade-up"
                data-aos-duration='1000'>
                    <div className="py-[40px] hover:scale-95 hover:duration-300  px-[30px] shadow-lg  rounded-[10px] bg-[#292929]">
                         <h1 className=' font-pops font-medium text-[#fff]   lg:w-[400px]   text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error debitis iure, quibusdam saepe suscipit obcaecati distinctio eveniet quia magnam atque temporibus iusto repellendus impedit qui quod autem est deserunt quasi.</h1>
                       
                       
                    </div>
                    <div className="flex items-center mt-[20px]">
                  
                  <img src={manone} alt="" className='h-[90px] lg:ml-[35px] hover:scale-90 hover:duration-300' />
                  <h1 className=' font-pops font-semibold text-[#222] text-[22px] lg:ml-[25px]'>Marsh M.</h1>
                    </div>
                </div>
               
               
                <div className="lg:w-[32%] lg:px-0 px-[10px] mt-[50px] lg:mt-0 "  data-aos="fade-up"
                data-aos-duration='1000'>
                <div className="py-[40px]  hover:scale-95 hover:duration-300   px-[30px] lg:mx-[20px]  shadow-lg w-[100%] rounded-[10px] bg-[#292929]">
                         <h1 className=' font-pops font-medium text-[#fff]  lg:w-[400px]   text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error debitis iure, quibusdam saepe suscipit obcaecati distinctio eveniet quia magnam atque temporibus iusto repellendus impedit qui quod autem est deserunt quasi.</h1>
                    </div>
                    <div className="flex items-center mt-[20px]">
                  
                  <img src={mantwo} alt="" className='h-[90px] lg:ml-[60px] hover:scale-90 hover:duration-300' />
                  <h1 className=' font-pops font-semibold text-[#222] text-[22px] ml-[25px]'>Julin C.</h1>
                    </div>
                </div>
                <div className="lg:w-[32%] lg:px-0 px-[10px] mt-[50px] lg:mt-0"  data-aos="fade-up"
                data-aos-duration='1000'>
                <div className="py-[40px]  px-[30px] hover:scale-95 hover:duration-300 shadow-lg lg:ml-[40px] w-[100%]  rounded-[10px] bg-[#292929]">
                         <h1 className=' font-pops font-medium text-[#fff]  lg:w-[400px]   text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error debitis iure, quibusdam saepe suscipit obcaecati distinctio eveniet quia magnam atque temporibus iusto repellendus impedit qui quod autem est deserunt quasi.</h1>
                    </div>
                    <div className="flex items-center mt-[20px]">
                  
                  <img src={manthree} alt="" className='h-[90px] lg:ml-[90px] hover:scale-90 hover:duration-300' />
                  <h1 className=' font-pops font-semibold text-[#222] text-[22px] ml-[25px]'>David W.</h1>
                    </div>
                </div>
               
               
            </div>
          
        </div>
      
      
    </div>
    
  )
}

export default Testimonial
