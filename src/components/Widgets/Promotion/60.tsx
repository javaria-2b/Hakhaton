import React from "react";
import Image from "next/image";

const banner2 = () => {
  return (
    <div className="flex justify-between items-center bg-[#D6D6D8] p-4">
      <div className="text-center md:text-left">
        <p className="text-xl md:text-3xl font-bold text-black">GET UP TO 60%</p>
        <p className="text-sm md:text-lg text-black">For the summer season</p>
      </div>
      <div className="hidden md:block">
        <Image src={"/avatar.webp"} alt={"Avatar"} width={200} height={200}/>
      </div>
    </div>
  );
};

export default banner2;
