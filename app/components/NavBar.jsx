"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const NavBar = () => {
  const menuRef = useRef();
  const open = () => {
    menuRef.current.style.right = "0rem";
  };
  const close = () => {
    menuRef.current.style.right = "-22rem";
  };
  return (
    <div className="flex justify-between  items-center  lg:my-5 lg:mx-44 md:my-5 md:mx-20 sm:my-5 mr-[80%]   md:self-baseline  md:flex-row  flex-col">
      <Link href={"/"}>
        <Image
          src={"/next.svg"}
          alt="Not Available"
          width={0}
          height={0}
          priority={true}
          className="bg-stone-300  py-1 px-2 sm:py-2 sm:px-5 rounded-sm w-36 h=36 sm:min-w-48 sm:min-h-16 "
        />
      </Link>
      <Image
        src={"/menu_open.svg"}
        alt="Not Available"
        width={40}
        height={40}
        className="md:hidden block fixed right-8 w-auto h-auto "
        onClick={open}
      />

      <ul
        ref={menuRef}
        className="flex md:flex-row md:static fixed  flex-col top-0 gap-4 lg:gap-8 bg-[#1F0016] w-[12rem] h-full z-[2] right-[-22rem] items-start md:h-auto md:w-auto md:bg-inherit md:items-center  lg:text-xl "
      >
        <Image
          src={"/menu_close.svg"}
          alt="Not Available"
          width={40}
          height={40}
          className="md:hidden block relative top-4 left-3 w-auto h-auto"
          onClick={close}
        />
        <li className="text-base lg:m-2 ml-20  md:text-inherit md:p-0 md:m-auto  hover:shadow-[0px_2px_0px_white] focus:shadow-[0px_2px_0px_white]">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="text-base lg:m-2 ml-20  md:text-inherit md:p-0 md:m-auto  hover:shadow-[0px_2px_0px_white] focus:shadow-[0px_2px_0px_white]">
          <Link href={"/latestwork"}>Latest Work</Link>
        </li>
        <li className="text-base lg:m-2 ml-20  md:text-inherit md:p-0 md:m-auto  hover:shadow-[0px_2px_0px_white] focus:shadow-[0px_2px_0px_white]">
          <Link href={"/about"}>About Me</Link>
        </li>
        <li className="text-base lg:m-2 ml-20  md:text-inherit md:p-0 md:m-auto  hover:shadow-[0px_2px_0px_white] focus:shadow-[0px_2px_0px_white]">
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>

      <div className="lg:text-2xl text-sm cursor-pointer bg-gradient-to-l md:block hidden from-[#da7d25bd] to-[#b823e1c5] lg:py-3 lg:px-4 py-2 px-2 rounded-3xl hover:scale-105 transition-transform">
        <Link href={"/contact"}>Contact Me</Link>
      </div>
    </div>
  );
};

export default NavBar;
