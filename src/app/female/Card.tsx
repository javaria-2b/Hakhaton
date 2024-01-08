import React from 'react'
import Products from '@/data/products'
import Image from 'next/image'


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
    <div className='flex flex-col gap-2 cursor-pointer w-full'>
      <div className='relative h-[250px] w-full min-w-[250px] '>
      <Image src={imageUrl} alt={title} className='object-center' fill />

      </div>
      <div className='text-base font-bold'>{title}</div>
      {showCategory && <div className='font-bold text-sm text-gray-600'>{category}</div>}
      <div className='text-base font-bold'>{price}</div>
    </div>
  );
};

export default Card;