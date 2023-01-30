import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

const NavBar = (props) => {
  let con = props.con;
  return (
    <nav className="w-full xl:px-0 sm:px-16 px-6 flex py-6 justify-between items-center navbar text-white">
      <h1 className="font-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ">
        <Link href="/">
          BL
          <span className="text-yellow-300">O</span>G
        </Link>
      </h1>

      {con && (
        <ul className="list-none flex justify-end items-center flex-1">
          <li className="menu font-poppins font-normal  text-dimWhite cursor-pointer text:[18px] sm:text-[26px] mr-5 sm:mr-10  hover ">
            <Link href="/posts">All Posts</Link>
          </li>
          <li className="menu font-poppins font-normal  text-dimWhite cursor-pointer text:[18px] sm:text-[26px] hover ">
            <Link href="/contect">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
