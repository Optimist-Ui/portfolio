import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col md:items-center items-start justify-center md:gap-20 gap-12 my-12 mx-16 md:my-20 md:mx-44 ">
      <div className="relative ">
        <h1 className="md:text-7xl text-5xl font-semibold md:px-8 p-0">
          Get in touch
        </h1>
        <Image
          src={"theme_pattern.svg"}
          alt="Not Available"
          width={200}
          height={200}
          className="absolute md:right-0 right-[-1.25rem] md:w-60 w-32   bottom-0 -z-10 "
        />
      </div>
      <div className="flex md:flex-row flex-col gap-36">
        <div className="flex flex-col gap-7">
          <h1 className="md:text-7xl text-5xl font-bold bg-gradient-to-tl bg-clip-text text-transparent to-[#da7d25] from-[#b823e1fd]">
            Let's talk
          </h1>
          <p className="md:max-w-[34.38rem] max-w-[30rem] text-[#D8D8D8] md:text-xl text-sm my-10">
            I am a junior front-end developer working with the MERN stack. I am
            looking for internships or entry-level jobs to learn and grow. If
            you have any opportunities or projects, lets talk and see how I can
            help.
          </p>
          <div className="flex flex-col md:gap-7 gap-5 text-[#D8D8D8] text-xl">
            <div className="flex items-center gap-5">
              <Image
                src={"/mail_icon.svg"}
                alt="Not Available"
                width={40}
                height={40}
                className="md:w-auto w-6"
              />{" "}
              <p>moosazahoormzee@gmail.com</p>
            </div>
            <div className="flex items-center gap-5">
              <Image
                src={"/call_icon.svg"}
                alt="Not Available"
                width={40}
                height={40}
                className="md:w-auto w-6"
              />{" "}
              <p>+92 325-5654049</p>
            </div>
            <div className="flex items-center gap-5">
              <Image
                src={"/location_icon.svg"}
                alt="Not Available"
                width={40}
                height={40}
                className="md:w-auto w-6"
              />{" "}
              <p>Punjab, Pakistan.</p>
            </div>
          </div>
        </div>
        <form name="g" id="2" className="flex flex-col items-start gap-7">
          <label
            htmlFor="name"
            className="text-[#D8D8D8] md:text-xl text-base font-medium"
          >
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="border-none md:w-[43.75rem] w-[100%] h-16 pl-5 rounded-md bg-[#32323c] text-[#A0A0A0] text-xl md:text-2xl"
          />
          <label
            htmlFor="email"
            className="text-[#D8D8D8] md:text-xl text-base font-medium"
          >
            Your Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border-none md:w-[43.75rem] w-[100%] h-16 pl-5 rounded-md bg-[#32323c] text-[#A0A0A0] text-xl md:text-2xl"
          />
          <label
            htmlFor="message"
            className="text-[#D8D8D8] md:text-xl text-base font-medium"
          >
            Write your message
          </label>
          <textarea
            rows={8}
            placeholder="Enter your message"
            className="md:w-[40.625rem] w-[90%] border-none p-6 rounded-md bg-[#32323c] text-[#A0A0A0] text-xl md:text-2xl"
          />
          <button
            type="submit"
            className="border-none text-white rounded-full bg-gradient-to-r  to-[#da7d25] from-[#b823e1fd] md:text-xl text-base md:py-5 md:px-14 py-3 px-7 cursor-pointer transition-all hover:scale-110 mb-4"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
