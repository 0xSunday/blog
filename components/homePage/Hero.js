import Image from "next/image";
import React from "react";
import profile from "../../public/profile.jpg";
const Hero = (props) => {
  return (
    <section className="flex justify-center items-center flex-col  my-6 mb-14 sm:mb-14">
      <div>
        <Image
          src={profile}
          alt="Sunil Reddy"
          className="rounded-full h-52 w-52 sm:h-72 sm:w-72"
        />

      </div>
      <h1 className="font-1 font-poppins font-semibold sm:text-[52px] text-[35px] text-white ss:leading-[100px] leading-[75px]">
        HI , I'M <span className="text-yellow-300"> SUNIL </span>
      </h1>
      <p className="font-poppins font-normal text-dimWhite text-[14px] sm:text-[18px] leading-[30.8px] text-center">
        Love to Spend <span className="text-yellow-300"> Sleepless </span> Night
        With <span className="text-yellow-300"> Nextjs </span>
      </p>
    </section>
  );
};

export default Hero;
