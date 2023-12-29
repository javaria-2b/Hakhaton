import React from "react";
import { Button } from "../../ui/button";

export const Banner = () => {
  return (
    <div className="bg-[#212121] py-12 w-[60rem] flex flex-col items-center gap-5">
      <div className="text-3xl text-white font-bold">Get 30% Off</div>
      <div className="flex flex-col gap-2">
        <div className="text-white flex justify-center">USE PROMO CODE</div>
        <Button className="bg-[#474747] text-white rounded-md text-lg">
          D I N E W E E K E N D S A L E
        </Button>
      </div>
    </div>
  );
};
