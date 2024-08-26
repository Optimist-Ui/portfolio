import Image from "next/image";

const Footer = () => {
  return (
    <div className="md:my-12 md:mx-44 my-12 mx-16 flex flex-col gap-7 ">
      <div className="flex md:flex-row flex-col md:gap-0 gap-12 justify-between ">
        <div>
          <Image
            src={"/next.svg"}
            alt="Not Available"
            width={200}
            height={200}
            className="bg-stone-300 md:m-0  mb-3 py-2 px-5 rounded-sm"
          />
          <p className="text-5 max-w-[25rem] md:mt-3 mt-2  ">
            Stay updated with my journey in front-end development. Enter your
            email to subscribe and follow along.
          </p>
        </div>
        <div className="flex flex-row items-center md:gap-9 gap-5">
          <div className="flex md:gap-7 gap-5 md:py-4 md:px-7 py-4 px-3 rounded-full bg-[#32323B] md:pr-20 pr-10 hover:shadow-[0px_2px_0px_white] ">
            <Image
              src="/user_icon.svg"
              alt="Not Available"
              width={40}
              height={40}
              className="w-auto h-auto"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="outline-none border-none bg-transparent text-[#a0a0a0] md:text-lg text-base "
            />
          </div>
          <div className="md:text-lg text-base md:py-6 md:px-12 py-5 px-7 rounded-full cursor-pointer transition-all bg-gradient-to-tr  from-[#da7d25bd] to-[#b823e1c5] hover:scale-110">
            Subscribe
          </div>
        </div>
      </div>
      <hr />
      <div className="flex md:flex-row flex-col-reverse md:m-0 mb-12 justify-between md:text-lg text-base text-center">
        <p>© 2024 Optimistic Thrive. All rights resereved.</p>
        <div className="flex gap-12 mb-12">
          <p>Terms of services</p>
          <p>Privacy policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
