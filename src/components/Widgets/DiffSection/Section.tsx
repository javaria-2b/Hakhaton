import React from "react";
import Characteristics from "./Characteristics";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Section = () => {
  return (
    <div className="px-32 mt-48 ">
      <div className="flex gap-20 items-center">
        <div className="relative">
          <Characteristics />
          <p className="absolute top-0 text-8xl font-bold opacity-5 ">
            Different <br /> From <br />
            Others
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <div className="text-5xl font-bold ">
            Unique and Authentic <br />
            Vintage Designer <br /> Jewellery
          </div>

          <div className="flex gap-10">
            <Image
              src={"/product8.png"}
              alt={"Porduct"}
              width={300}
              height={200}
            />

            <div className="flex items-center">
              <div className="flex flex-col gap-10 ">
                <p className="max-w-md">
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
