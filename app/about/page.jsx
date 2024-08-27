import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex md:items-center items-start flex-col justify-center md:gap-20 md:mx-52 md:my-20 gap-20 my-12 mx-16">
      <div className="relative">
        <h1 className="md:px-7 md:text-7xl p-0 text-5xl font-sem ">About me</h1>
        <Image
          src={"/theme_pattern.svg"}
          alt="Not Available"
          width={200}
          height={200}
          className="absolute right-0 bottom-0 -z-10 md:w-36 w-32 "
        />
      </div>
      <div className="flex md:flex-row flex-col gap-20">
        <div className="left">
          <Image
            src={"/Optimistic_Thrive.png"}
            alt="Not Available"
            width={400}
            height={400}
            className="min-w-[24rem] min-h-[36rem] xl:block hidden"
          />
        </div>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-5 md:text-xl text-lg font-medium ">
            <p>
              I am a passionate junior Front-End Developer with one year of
              experience in the following technologies.I amm looking for a
              progressive organization where I can dive into a challenging
              environment that will push me to learn from experienced developers
              and grow my skills.
            </p>
            <p>
              I believe that facing real challenges is the key to becoming a
              better developer, and I am ready to take on those challenges with
              dedication and Passion.
            </p>
          </div>
          <div className="flex flex-col md:gap-5 gap-2 ">
            <div className="flex gap-12 items-center transition-transform hover:scale-105 cursor-pointer">
              <p className="min-w-36 font-medium text-xl">HTML & CSS</p>
              <hr className="outline-none border-none md:w-[90%] w-[50%] lg:max-w-[51.9rem] sm:max-w-[30rem] max-w-[13rem] md:h-2 h-1 bg-gradient-to-tr to-[#da7d25] from-[#b823e1]" />
            </div>
            <div className="flex gap-12 items-center transition-transform hover:scale-105 cursor-pointer">
              <p className="min-w-36 font-medium md:text-xl text-lg ">
                JAVASCRIPT
              </p>
              <hr className="outline-none border-none md:w-[60%] w-[20%] lg:max-w-[51.9rem] sm:max-w-[30rem] max-w-[13rem] md:h-2 h-1 bg-gradient-to-tr to-[#da7d25bd] from-[#b823e1c5]" />
            </div>
            <div className="flex gap-12 items-center transition-transform hover:scale-105 cursor-pointer">
              <p className="min-w-36 font-medium md:text-xl text-lg ">
                REACT.js
              </p>
              <hr className="outline-none border-none md:w-[50%] w-[10%] lg:max-w-[51.9rem] sm:max-w-[30rem] max-w-[13rem] md:h-2 h-1 bg-gradient-to-tr to-[#da7d25bd] from-[#b823e1c5]" />
            </div>
            <div className="flex gap-12 items-center transition-transform hover:scale-105 cursor-pointer">
              <p className="min-w-36 font-medium md:text-xl text-lg ">
                NEXT.js
              </p>
              <hr className="outline-none border-none md:w-[60%] w-[20%] lg:max-w-[51.9rem] sm:max-w-[30rem] max-w-[13rem] md:h-2 h-1 bg-gradient-to-tr to-[#da7d25bd] from-[#b823e1c5]" />
            </div>
            <div className="flex gap-12 items-center transition-transform hover:scale-105 cursor-pointer">
              <p className="min-w-36 font-medium md:text-xl text-lg ">
                TAILWIND CSS
              </p>
              <hr className="outline-none border-none md:w-[50%] w-[10%] lg:max-w-[51.9rem] sm:max-w-[30rem] max-w-[13rem] md:h-2 h-1 bg-gradient-to-tr to-[#da7d25bd] from-[#b823e1c5]" />
            </div>
            <div className="flex gap-12 items-center transition-transform hover:scale-105 cursor-pointer">
              <p className="min-w-36 font-medium md:text-xl text-lg ">
                TYPESCRIPT
              </p>
              <hr className="outline-none border-none md:w-[36%] w-[8%] lg:max-w-[51.9rem] sm:max-w-[30rem] max-w-[13rem] md:h-2 h-1 bg-gradient-to-tr to-[#da7d25bd] from-[#b823e1c5]" />
            </div>
            <div className="flex gap-12 items-center transition-transform hover:scale-105 cursor-pointer">
              <p className="min-w-36 font-medium md:text-xl text-lg ">
                REDUX TOOLKIT
              </p>
              <hr className="outline-none border-none md:w-[50%] w-[10%] lg:max-w-[51.9rem] sm:max-w-[30rem] max-w-[13rem] md:h-2 h-1 bg-gradient-to-tr to-[#da7d25bd] from-[#b823e1c5]" />
            </div>
            <div className="flex gap-12 items-center transition-transform hover:scale-105 cursor-pointer">
              <p className="min-w-36 font-medium md:text-xl text-lg ">C++</p>
              <hr className="outline-none border-none md:w-[90%] w-[50%] lg:max-w-[51.9rem] sm:max-w-[30rem] max-w-[13rem] md:h-2 h-1 bg-gradient-to-tr to-[#da7d25bd] from-[#b823e1c5]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[100%] md:justify-around justify-between mb-20 text-xl text-center font-medium ">
        <div className="flex flex-col items-center sm:gap-3 gap-2 transition-transform hover:scale-125 cursor-pointer">
          <h1 className="md:text-6xl sm:text-4xl text-2xl sm:tracking-normal tracking-tighter font-bold bg-gradient-to-b bg-clip-text text-transparent to-[#da7d25] from-[#b823e1] ">
            1+
          </h1>
          <p className="lg:text-lg md:text-sm sm:text-xs text-[.35rem] font-medium">
            YEARS OF EXPERIENCE
          </p>
        </div>
        <hr className="w-[1px] h-24 bg-white" />
        <div className="flex flex-col items-center sm:gap-3 gap-2 transition-transform hover:scale-125 cursor-pointer">
          <h1 className="md:text-6xl sm:text-4xl text-2xl sm:tracking-normal tracking-tighter font-bold bg-gradient-to-b bg-clip-text text-transparent to-[#da7d25] from-[#b823e1] ">
            10+
          </h1>
          <p className="lg:text-lg md:text-sm sm:text-xs text-[.35rem] font-medium">
            PROJECTS COMPLETED
          </p>
        </div>
        <hr className="w-[1px] h-24 bg-white" />
        <div className="flex flex-col items-center sm:gap-3 gap-2 transition-transform hover:scale-125 cursor-pointer">
          <h1 className="md:text-6xl sm:text-4xl text-2xl sm:-tracking-normal tracking-tighter font-bold bg-gradient-to-b bg-clip-text text-transparent to-[#da7d25] from-[#b823e1] ">
            1
          </h1>
          <p className="lg:text-lg md:text-sm sm:text-xs text-[.35rem]  font-medium">
            DIPLOMA IN WEB DEVELOPMENT
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
