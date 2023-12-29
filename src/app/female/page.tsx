import React from 'react'
import Card from '@/components/Widgets/ProductsColl/Card'
import Products from '@/data/products'

const Female = () => {
    return (
      <div className='px-48 mt-24'>
        <div className="grid grid-cols-4 gap-4">
          {Products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
              category={product.category}
              showCategory={true} // Set to false if you don't want to show the category
            />
          ))}
        </div>
      </div>
    );
  }
  
  export default Female;
  