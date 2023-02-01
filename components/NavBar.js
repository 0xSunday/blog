import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

const NavBar = (props) => {
  let con = props.con;
  let cont = props.cont;
  let allp = false;
  allp = props.allp;
  return (
    <nav className="w-full  flex py-6 justify-between items-center navbar text-white">
      <h1 className="font-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ">
        <Link href="/">
          BL
          <span className="text-yellow-300">O</span>G
        </Link>
      </h1>

      {con && (
        <ul className="list-none flex justify-end items-center flex-1 z-10">
          <li className="menu font-poppins font-normal  text-dimWhite cursor-pointer text:[18px] sm:text-[26px] mr-5 sm:mr-10  hover ">
            <Link href="/posts">All Posts</Link>
          </li>
          <li className="menu font-poppins font-normal  text-dimWhite cursor-pointer text:[18px] sm:text-[26px] hover ">
            <Link href="/contect">Contact</Link>
          </li>
        </ul>
      )}

      {allp && (
        <ul className="list-none flex justify-end items-center flex-1 z-10">
          <li className="menu font-poppins font-normal  text-dimWhite cursor-pointer text:[18px] sm:text-[26px] mr-5 sm:mr-10  hover ">
            <Link href="/posts">All Posts</Link>
          </li>
        </ul>
      )}

      {cont && (
        <ul className="list-none flex justify-end items-center flex-1 z-10">
          <li className="menu font-poppins font-normal  text-dimWhite cursor-pointer text:[18px] sm:text-[26px] hover ">
            <Link href="/contect">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
