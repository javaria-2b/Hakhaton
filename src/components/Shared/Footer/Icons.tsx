import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Icons = () => {
  return (
    <div className="flex gap-5">
    <div className="bg-gray-200 p-2 rounded-md">
      <FaTwitter className="w-5 h-5" />
    </div>
    <div className="bg-gray-200 p-2 rounded-md">
      <FaFacebookF className="w-5 h-5" />
    </div>
    <div className="bg-gray-200 p-2 rounded-md">
      <FaLinkedinIn className="w-5 h-5" />
    </div>
  </div>
  )
}

export default Icons