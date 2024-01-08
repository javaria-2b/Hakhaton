import React from "react";
import Products from "@/data/products";
import Title from "./Title";
import Card from "./Card";
import ProductList from "./ProductList";

const NewProducts = () => {
  return (
    <div className=" mt-48 flex flex-col items-center gap-10 ">
      <Title />
      <ProductList />
    </div>
  );
};

export default NewProducts;
