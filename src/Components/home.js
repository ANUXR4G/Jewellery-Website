import React from 'react';
import { Carousel } from 'antd';
import img1 from "../Assets/logo.jpeg"
import img2 from "../Assets/img2.jpeg"

const Home = () => (
    <Carousel  className='max-h-screen w-full overflow-hidden relative bg-black'>
    <div className='relative w-full h-full'>
      <img src={img1} className=' object-cover h-full lg:h-auto w-full' alt='Image1'></img>
    </div>
    <div className='relative w-full h-full flex justify-center items-center'>
      <img src={img2} className='object-fit lg:h-[100vh]' alt='Image2'></img>
    </div>
  </Carousel>
  );
export default Home;