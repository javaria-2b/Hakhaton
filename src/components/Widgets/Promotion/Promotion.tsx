import React from "react";
import { Button } from "../../ui/button";
import { Banner } from "./30";
import Banner2 from "./60";
import SideBanners from "./SideBanners";
import Image from "next/image";



export default function Promotion() {
  return (
    <div className=" mt-24 flex flex-col gap-10 w-full">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-blue-600 font-bold text-sm">PROMOTIONS</div>
        <div className="text-4xl font-bold">Our Promotions Events</div>
      </div>  
      <div className="flex gap-5 flex-col lg:flex-row w-full">
      <div className="flex flex-col gap-5 w-full">
        <Banner2 />

        <Banner />
      </div>
<div className="flex w-full  justify-center">
  <SideBanners/>
</div>


      </div>
    </div>
  );
}
