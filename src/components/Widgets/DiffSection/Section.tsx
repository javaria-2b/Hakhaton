import React from "react";
import Characteristics from "./Characteristics";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Section = () => {
  return (
    <div className="px-7 lg:px-32 md:px-16 mt-24">
        <div className="text-5xl font-bold flex justify-end mb-10">
            Unique and Authentic <br />
            Vintage Designer <br /> Jeweller
          </div>
      <div className="flex gap-20 items-center md:flex-row flex-wrap xl:flex-nowrap">
        <div className="relative">
          <Characteristics />
          <p className="absolute top-0 text-6xl font-bold opacity-5 md:text-8xl">
            Different <br /> From <br />
            Others
          </p>
        </div>

        <div className="flex gap-10">
        

          <div className="flex flex-col gap-10 md:flex-row">
            <div className="flex justify-center md:items-center">
            <Image
              src={"/product8.png"}
              alt={"Porduct"}
              width={300}
              height={200}
            />
            </div>

            <div className="flex items-center">
              <div className="flex flex-col gap-10">
                <p className="max-w-md flex  flex-wrap">
                  This piece is ethically crafted in our small family-owned
                  workshop in Peru with unmatched attention to detail and care.
                  The Natural color is the actual natural color of the fiber,
                  undyed and 100% traceable.
                </p>
                <div>
                  <Button className="flex items-center gap-4 bg-[#212121] text-base text-white px-16 py-6 border border-gray-400 hover:bg-[#333333]">
                    See all Product
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
