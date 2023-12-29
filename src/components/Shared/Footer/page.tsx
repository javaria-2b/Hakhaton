import Image from "next/image";
import React from "react";
import Title from "./Title";
import Divider from "./Divider";
import Icons from "./Icons";

const Footer = () => {
  return (
    <div>
      <div className="px-32 mt-56 flex gap-48">
        <div className="flex flex-col gap-10">
          <Title />
          <Icons />
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-bold  text-xl text-gray-500">Company</p>
          <p className="">About</p>
          <p className="">Terms of Use</p>
          <p className="">Privacy Policy</p>
          <p className="">Contact Us</p>
        </div>

        <div className="flex flex-col gap-4 text-gray-500">
          <p className="font-bold text-xl">Support</p>
          <p className="">Support Carrer</p>
          <p className="">24h Service</p>
          <p className="">Quick Chat</p>
        </div>

        <div className="flex flex-col gap-4 text-gray-500">
          <p className="font-bold text-xl">Contact</p>
          <p className="">Whatsapp</p>
          <p className="">Support 24h</p>
        </div>
      </div>

      <Divider/>
    </div>
  );
};

export default Footer;
