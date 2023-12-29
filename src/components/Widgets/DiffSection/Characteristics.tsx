import React from "react";

const Characteristics = () => {
  return (
    <div className="flex flex-col gap-20">

      <div className="flex flex-row gap-20">
        <div className="max-w-sm space-y-2">
          <div className="font-bold text-lg">Using Good Quality Materials</div>
          <p className="max-w-xs ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="max-w-sm space-y-2">
          <div className="font-bold">100% Handmade Products</div>
          <p className="max-w-xs ">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="flex flex-row gap-20"> 
      <div  className="max-w-sm space-y-2">
        <div className="font-bold">Modern Fashion Design</div>
        <p className="max-w-xs ">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
      </div>
      <div className="max-w-sm space-y-2">
        <div className="font-bold">Discount for Bulk Orders</div>
        <p className="max-w-xs ">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
      </div>
      </div>
    </div>
  );
};

export default Characteristics;
