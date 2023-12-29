import Image from "next/image";
import React from "react";

const Title = () => {
  return (
    <div className="flex flex-col gap-10">
      {" "}
      <Image src="/logo.webp" alt="Logo" width={150} height={200} />
      <p>
        Small, artisan label that offers a thoughtfully curated collection{" "}
        <br /> of high quality everyday essentials made.
      </p>
    </div>
  );
};

export default Title;
