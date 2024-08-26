import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-center items-center gap-5 flex-col md:m-auto md:mb-40 md:w-auto mb-32 w-[100%]">
      <Image
        src="/Optimistic_Thrive.png"
        alt="Not Available"
        width={300}
        height={300}
        className="rounded-full mt-[3.5rem] w-auto h-auto"
      />
      <h1 className="font-semibold md:text-8xl md:max-w-[70%] text-center md:m-auto mt-12 w-[90%] text-xl ">
        <span className="bg-gradient-to-l from-[#da7d25bd] to-[#b823e1c5] bg-clip-text text-transparent">
          {" "}
          I'm Musa Zahoor,
        </span>{" "}
        Front-End developer based in Pakistan.
      </h1>
      <p className="md:w-[50%] text-center md:text-2xl w-[70%]  text-sm my-3 ">
        I am looking for internships or entry-level jobs to learn and grow.
      </p>
      <div className="flex flex-row justify-around items-center md:gap-6 gap-2 mb-12 font-semibold ">
        <div className="md:py-6 md:px-12 py-4 px-5 md:text-inherit text-md bg-gradient-to-l from-[#da7d25bd] to-[#b823e1c5] rounded-[50px] cursor-pointer hover:shadow-[0px_2px_0px_white]">
          <Link href={"/contact"}>Connect With Me</Link>
        </div>
        <div className="md:py-6 md:px-16 py-4 px-10 md:text-inherit text-md border-2 border-white  rounded-[50px] cursor-pointer hover:border-[#b823e1c5]">
          <Link href={"/resume"}>My Resume</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
