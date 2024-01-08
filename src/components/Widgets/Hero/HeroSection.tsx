import { Button } from "@/components/ui/button";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import Websites from "./Websites";
import Avatar from "./Image";

export default function HeroSection() {
  return (
    <div className="flex flex-row items-center gap-60  mt-16">
      <div className=" flex flex-col gap-10">
        <Button variant="secondary">Sale 70%</Button>{" "}
        <div className="text-5xl font-bold">
          An Industrial Take on <br />
          <span className="block">Streetwear</span>
        </div>
        <div className="flex flex-wrap">
          Anyone can beat you but no one can beat your outfit as long as you
         wear Dine outfits.
        </div>
        <div>
          <Button className=" flex items-center gap-4 bg-[#212121] text-lg text-white px-12 md:px-28 py-8 border border-gray-400 hover:bg-[#333333]">
            <FiShoppingCart className="h-5 w-5" />
            Start Shopping
          </Button>
        </div>
        <Websites />
      </div>
      <Avatar />
    </div>
  );
}
