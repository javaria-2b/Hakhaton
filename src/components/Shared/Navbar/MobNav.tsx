import Image from 'next/image'
import React from 'react'
import { RiMenu3Fill } from "react-icons/ri";


const MobNav = () => {
  return (
    <div className='flex justify-between xl:hidden '>
        <Image src="/logo.webp" alt="Logo" width={150} height={200} />
        <RiMenu3Fill 
        size={20}
        />

    </div>
  )
}

export default MobNav