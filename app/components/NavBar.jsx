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
    <div className="flex justify-between items-center  lg:my-5 lg:mx-44 sm:my-5  sm:mx-8 mr-[65%] sm:mr-[65%] md:self-baseline  md:flex-row  flex-col">
      <Link href={"/"}>
        <Image
          src={"/next.svg"}
          alt="Not Available"
          width={0}
          height={0}
          priority={true}
          className="bg-stone-300  py-1 px-2 sm:py-2 sm:px-5 rounded-sm w-36 h=36 sm:min-w-44 sm:min-h-42 "
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
        className="flex md:flex-row md:static fixed  flex-col top-0 gap-8 bg-[#1F0016] w-[22rem] h-full z-[2] right-[-22rem] items-start md:h-auto md:w-auto md:bg-inherit md:items-center md:gap-[60px] text-xl "
      >
        <Image
          src={"/menu_close.svg"}
          alt="Not Available"
          width={40}
          height={40}
          className="md:hidden block relative top-8 left-72 w-8"
          onClick={close}
        />
        <li className="text-8 m-2 ml-20  md:text-inherit md:p-0 md:m-auto  hover:shadow-[0px_2px_0px_white] focus:shadow-[0px_2px_0px_white]">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="text-8 m-2 ml-20  md:text-inherit md:p-0 md:m-auto  hover:shadow-[0px_2px_0px_white] focus:shadow-[0px_2px_0px_white]">
          <Link href={"/latestwork"}>Latest Work</Link>
        </li>
        <li className="text-8 m-2 ml-20  md:text-inherit md:p-0 md:m-auto  hover:shadow-[0px_2px_0px_white] focus:shadow-[0px_2px_0px_white]">
          <Link href={"/about"}>About Me</Link>
        </li>
        <li className="text-8 m-2 ml-20  md:text-inherit md:p-0 md:m-auto  hover:shadow-[0px_2px_0px_white] focus:shadow-[0px_2px_0px_white]">
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>

      <div className="text-2xl cursor-pointer bg-gradient-to-l md:block hidden from-[#da7d25bd] to-[#b823e1c5] py-3 px-4 rounded-3xl hover:scale-105 transition-transform">
        <Link href={"/contact"}>Contact Me</Link>
      </div>
    </div>
  );
};

export default NavBar;
