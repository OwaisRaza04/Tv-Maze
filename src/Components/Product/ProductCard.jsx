import React from "react";
import Rating from "@mui/material/Rating";
import "./Product.css";
// import { useNavigate } from "react-router-dom";

const ProductCard = ({ show }) => {
  const imageUrl = show.image && show.image.original;
  const truncatedGenres =
    show.genres.join(", ").slice(0, 14) +
    (show.genres.join(", ").length > 14 ? "..." : "");
  //   const navigate = useNavigate();

  //   const handleClick = () => {
  //     navigate('/details/${show.id}')
  //   };

  return (
    <div
      className="product-card w-[15rem] transition-all cursor-pointer m-3"
    >
      <div className="h-[20rem]">
        {imageUrl ? (
          <img
            className="object-cover object-left-top w-full h-full"
            src={imageUrl}
            alt="product"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-300">
            <p className="text-gray-500">No Image Available</p>
          </div>
        )}
      </div>
      <div className="p-3 transition-all bg-white product-card__info">
        <div>
          <p className="font-bold">{show.name}</p>
          <div className="flex items-center space-x-2 justify-between">
            <p className="font-semibold opacity-70">{truncatedGenres}</p>
            {show.runtime && (
              <p className="font-semibold">{show.runtime} min</p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Rating
            name="read-only"
            value={(show.rating.average / 10) * 5}
            readOnly
          />
          <p className=" opacity-60">
            {((show.rating.average / 10) * 5).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
