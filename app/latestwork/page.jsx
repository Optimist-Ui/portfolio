import React from "react";
import { data } from "../components/worklist";
import Image from "next/image";
import Link from "next/link";
const MyWork = () => {
  return (
    <div className="flex flex-col items-start md:items-center justify-center gap-12 mx-12 my-16 md:gap-20 md:my-20 md:mx-44">
      <div className="relative">
        <h1 className="p-0 text-5xl md:px-7 md:text-7xl font-semibold">
          My latest work
        </h1>
        <Image
          src={"/theme_pattern.svg"}
          alt="Not Available"
          width={250}
          height={0}
          className="absolute bottom-0 right-0  -z-10 w-36 md:w-52 "
        />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-7 ">
        {data.map((work, index) => {
          return (
            <Link href={work.link} key={index} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src={work.img}
                  alt="Not Available"
                  height={600}
                  width={600}
                  className="md:w-[419px] w-96 h-48 md:h-72 transition-all hover:scale-110 hover:border-[0.125rem] border-[#ff00ff] border-solid rounded-md "
                />
              </a>
            </Link>
          );
        })}
      </div>
      <div className="md:mb-20 my-0 mb-12 mx-auto">
        <p className="flex md:gap-4 gap-2 border-2 border-solid border-white md:py-7 md:px-14 py-4 px-7 md:text-xl text-sm font-medium md:mb-20 my-6 mx-auto cursor-pointer transition-transform rounded-full hover:gap-7 hover:transition-all hover:border-[#ff00ff]">
          Show More
          <Image
            src={"/arrow_icon.svg"}
            alt="Not Available"
            width={25}
            height={25}
            className="md:w-auto w-4"
          />
        </p>
      </div>
    </div>
  );
};

export default MyWork;
