import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import useApiData from '../../API/useApiData';

const Product = () => {
  const data = useApiData();

  return (
    <div className="w-full lg:col-span-4">
      <div className="flex flex-wrap justify-center py-5 bg-white">
        {data.map((item) => (
          <ProductCard key={item.show.id} show={item.show} />
        ))}
      </div>
    </div>
  );
};

export default Product;
