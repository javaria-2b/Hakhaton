import React from "react";
import Products from "@/data/products";
import Title from "./Title";
import Card from "./Card";
import ProductList from "./ProductList";

const NewProducts = () => {
  return (
    <div className="px-32 mt-24 flex flex-col gap-10">
      <Title />
      <ProductList />
    </div>
  );
};

export default NewProducts;
