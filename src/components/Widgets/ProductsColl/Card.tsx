import React from 'react'
import Products from '@/data/products'
import Image from 'next/image'
import product1 from "/public/product1.png";


interface CardProps {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
  category: string;
  showCategory?: boolean; // New optional prop
}



const Card: React.FC<CardProps> = ({ id, title, price, imageUrl, category, showCategory = true }) => {
  return (
    <div className='card flex flex-col gap-2 cursor-pointer'>
      <Image src={imageUrl} alt={title} width={400} height={400} />
      <div className='text-lg font-bold'>{title}</div>
      {showCategory && <div className='font-bold text-base text-gray-600'>{category}</div>}
      <div className='text-lg font-bold'>{price}</div>
    </div>
  );
};

export default Card;