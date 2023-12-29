import Image from 'next/image'
import React from 'react'
import Banner1 from "/banner3.webp"
import Banner2 from "/banner2.webp"

const SideBanners = () => {
  return (
    <div className="flex gap-5">
<Image src={"/banner3.webp"} alt={"Banner"} width={312} height={400}/>
<Image src={"/banner4.webp"} alt={"Banner"} width={312} height={400}/>

      </div>
  )
}

export default SideBanners