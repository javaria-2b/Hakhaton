import React from 'react';
import Products from '@/data/products';
import Card from './Card'; // Adjust the import path as necessary

const ProductDisplay = () => {
  return (
    <div className='  p-4'>
      <div className='flex flex-wrap  justify-between items-start gap-y-6 '>
        {Products.map(product => (
          <div key={product.id} className='p-2' >
            <Card
              id={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
              category={product.category}
              showCategory={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;