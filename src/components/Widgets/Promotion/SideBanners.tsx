import Image from 'next/image'
import React from 'react'

const SideBanners: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 lg:flex-row">
      <div className="w-[312px] h-[400px] shrink-0">
        <Image src="/banner3.webp" alt="Banner 1" width={312} height={400} layout="responsive"/>
      </div>
      <div className="w-[312px] h-[400px] shrink-0">
        <Image src="/banner4.webp" alt="Banner 2" width={312} height={400} layout="responsive"/>
      </div>
    </div>
  )
}

export default SideBanners
