import React from 'react'
import Image from 'next/image'
import Featured1 from "/public/Featured1.webp";
import Featured2 from "/public/Featured2.webp";
import Featured3 from "/public/Featured3.webp";
import Featured4 from "/public/Featured4.webp";

const Websites = () => {
  return (
    <div className="md:flex flex-wrap gap-20 mt-20">
    <Image
      src={"/Featured1.webp"}
      alt={"Featured1"}
      width={100}
      height={100}
    />
    <Image
      src={"/Featured2.webp"}
      alt={"Featured2"}
      width={100}
      height={100}
    />
    <Image
      src={"/Featured3.webp"}
      alt={"Featured3"}
      width={100}
      height={100}
    />
    <Image
      src={"/Featured4.webp"}
      alt={"Featured4"}
      width={100}
      height={100}
    />
  </div>
  )
}

export default Websites