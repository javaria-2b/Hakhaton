import React from "react";
import Card from "./Card"; // Update the path as per your directory structure
import Products from "@/data/products"; // Update the path as per your directory structure

const ProductList = () => {
  const firstThreeProducts = Products.slice(0, 3);

  return (
    <div className="flex flex-wrap justify-between gap-12 ">
      {firstThreeProducts.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          price={product.price}
          category={product.category}
          showCategory={false}
          imageUrl={product.imageUrl}
          id={product.id}
        />
      ))}
    </div>
  );
};

export default ProductList;
