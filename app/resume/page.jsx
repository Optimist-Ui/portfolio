import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center  mt-12  mb-56">
      <Image
        src="/resume.jpg"
        alt="Not Available"
        width={800}
        height={600}
        className="w-fit"
      />
    </div>
  );
};

export default page;
