import React from 'react'
import Image from 'next/image'
import HeroPoster from "/public/header.webp";


const Avatar = () => {
  return (
    <div className="bg-[#FFECE3] rounded-full hidden md:hidden xl:block ">
    <Image src={"/header.webp"} alt={"HeroPoster"} width={800} height={800}/>
  </div>
  )
}

export default Avatar