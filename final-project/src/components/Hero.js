import React from "react";
import { Carousel } from "flowbite-react";
import image1 from '../image/image1.jpg'
import image2 from '../image/image2.jpg'
import image3 from '../image/image3.jpg'

const Hero = () => {
  return (
    <div className="container mb-6">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={false}>
        <img src={image1} alt="Hero Banner 1" /> 
        <img src={image2} alt="Hero Banner 2" /> 
        <img src={image3} alt="Hero Banner 3" /> 
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
