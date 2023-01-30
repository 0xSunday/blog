import Image from "next/image";
import React from "react";
import profile from "../../public/profile.jpg";
const Hero = (props) => {
  
  return (
    <section className="flex justify-center items-center flex-col">
      <div>
        <Image
          src={profile}
          alt="Sunil Reddy"
          className="rounded-full h-52 w-52"
        />
        <div className="absolute z-5 right-1/6 top-0 w-[20%] h-[40%] rounded-full white__gradient"></div>
        <div className="absolute z-0 right-1/6 top-0 w-[20%] h-[40%] rounded-full pink__gradient"></div>
      </div>
      <h1 className="font-1 font-poppins font-semibold sm:text-[52px] text-[35px] text-white ss:leading-[100px] leading-[75px]">
        HI, I'M SUNIL
      </h1>
      <p className="font-poppins font-normal text-dimWhite text-[14px] sm:text-[18px] leading-[30.8px] text-center">
        Love to Spend <span className="text-white"> Sleepless </span> Night With{" "}
        <span className="text-white"> Nextjs </span>
      </p>
    </section>
  );
};

export default Hero;
