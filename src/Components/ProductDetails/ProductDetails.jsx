import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import Rating from "@mui/material/Rating";
import { Box, Button, LinearProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import { yellow } from "@mui/material/colors";
import { Navigate, useNavigate } from "react-router-dom";
import useApiData from '../../API/useApiData';

const ProductDetails = () => {
  const data = useApiData();
  
  const imageUrl = data.image && data.image.original;
  return (
    <div>
      <section className="grid grid-cols-1 px-4 pt-10 lg:grid-cols-2 gap-x-8 gap-y-10">
        <div className="flex flex-col items-center">
          <div className="overflow-hidden rounded-lg w-full max-h-[35rem]">
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
        </div>

        <div className="max-w-2xl px-4 pb-16 lg:col-span-1 max-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
          <div className="lg:col-span-2">
            <h1 className="text-lg font-semibold text-gray-900 lg:text-xl">
              Universaloutfit
            </h1>
            <h1 className="pt-1 text-lg text-gray-900 opacity-60 lg:text-xl">
              Casual Puff Sleeves Solid Women White Top
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <div className="flex items-center mt-6 space-x-5 text-lg text-gray-900 lg:text-xl">
              <p className="font-semibold">₹199</p>
              <p className="line-through opacity-50">₹211</p>
              <p className="font-semibold text-green-600">5% Off</p>
            </div>

            {/* Reviews */}
            <div className="mt-6">
              <div className="flex items-center space-x-3">
                <Rating name="read-only" value={4.5} readOnly />
                <p className="text-sm opacity-50">56400 Ratings</p>
                <p className="ml-3 text-sm font-medium text-indigo-500 cursor-pointer hover:text-indigo-600">
                  4010 Reviews
                </p>
              </div>
            </div>

            <form className="mt-10">
              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                </div>

                {/* <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a size
                  </RadioGroup.Label>
                  <div className="flex items-center gap-4 w-14">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            "mb-4",
                            size.inStock
                              ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            active ? "ring-2 ring-indigo-500" : "",
                            "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">
                              {size.name}
                            </RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? "border" : "border-2",
                                  checked
                                    ? "border-indigo-500"
                                    : "border-transparent",
                                  "pointer-events-none absolute -inset-px rounded-md"
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="absolute border-2 border-gray-200 rounded-md pointer-events-none -inset-px"
                              >
                                <svg
                                  className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup> */}
              </div>

              <Button
                variant="contained"
                color="secondary"
                sx={{
                  px: "2rem",
                  py: "1rem",
                  bgcolor: "#9155fd",
                  "&:hover": {
                    bgcolor: "#9155fd",
                    // boxShadow: 'inherit'
                  },
                }}
              >
                Add to Cart
              </Button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">description</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              {/* <div className="mt-4">
                <ul role="list" className="pl-4 space-y-2 text-sm list-disc">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">jj</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
