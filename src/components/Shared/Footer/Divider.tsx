import React from "react";

const Divider = () => {
  return (
    <div>
      <div className="my-6 mt-40 ">
        <hr className="border-t border-gray-500" />
      </div>
      <div className="flex justify-between mb-6 flex-col md:flex-row gap-6 px-7 lg:px-32 md:px-16">
        <p className="text-gray-500">Copyright © 2022 Javaria Shaukat</p>
        <p className="text-gray-500">
        Design by. <strong>Javaria Shaukat</strong>
        </p>
        <p className="text-gray-500">Code by. javaria-2b on github</p>
      </div>
    </div>
  );
};

export default Divider;