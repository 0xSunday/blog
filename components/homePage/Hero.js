import Image from "next/image";
import React from "react";
import profile from "../../public/profile.jpg";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = (props) => {
  const [text] = useTypewriter({
    words: [" I'M Sunil Reddy", "  Meme Coin Lovers"],
    loop: true,
    delaySpeed: 2000,
  });

  // const parentDiv = {
  //   hidden: {
  //     opacity: 0,
  //   },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       when: "beforeChildren",
  //       staggerChildren: 0.5,
  //     },
  //   },
  // };
  // const childrenDiv = {
  //   hidden: {
  //     y: "100vh",
  //     opacity: 0,
  //   },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     rotate: [100, 0],
  //     transition: {
  //       type: "tween",
  //       duration: 1,
  //     },
  //   },
  // };

  return (
    <motion.section
      className="flex justify-center items-center flex-col  my-6 mb-14 sm:mb-14"
      // variants={parentDiv}
      // initial="hidden"
      // animate="visible"
    >
      <motion.div /**variants={childrenDiv} **/>
        <Image
          src={profile}
          alt="Sunil Reddy"
          className="rounded-full h-52 w-52 sm:h-72 sm:w-72"
        />
      </motion.div>
      <motion.h1
        /**variants={childrenDiv} **/
        className="font-1 font-poppins font-semibold sm:text-[52px] text-[25px] text-white "
      >
        HI,<span className="text-yellow-300"> {text}</span>
      </motion.h1>
      <motion.p
        /**variants={childrenDiv} **/
        className="font-poppins font-normal text-dimWhite text-[14px] sm:text-[18px] leading-[30.8px] text-center"
      >
        Love to Spend <span className="text-yellow-300"> Sleepless </span> Night
        With <span className="text-yellow-300"> Nextjs </span>
      </motion.p>
    </motion.section>
  );
};

export default Hero;
