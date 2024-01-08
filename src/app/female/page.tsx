import React from 'react'
import Card from '@/components/Widgets/ProductsColl/Card'
import Products from '@/data/products'
import ProductDisplay from "./Map"

const Female = () => {
    return (
      <div className='px-7 lg:px-20 md:px-16 mt-16'>
        <div className="flex justify-center">
         <ProductDisplay/>
        </div>
      </div>
    );
  }
  
  export default Female;
  