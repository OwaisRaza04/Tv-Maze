
import React from "react";
import { useParams } from 'react-router-dom';
import useFilteredApiData from '../../API/filteredData';

const ProductDetails = () => {
  const { id } = useParams();
  const filteredData = useFilteredApiData(id);
  // const imageUrl = data.image && data.image.original;
  return (
    <div>
      {/* <section className="grid grid-cols-1 px-4 pt-10 lg:grid-cols-2 gap-x-8 gap-y-10"> */}
        {/* <div className="flex flex-col items-center">
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
        </div> */}
{filteredData[0] && <p>{filteredData[0].show.language}</p>}
{filteredData[0] && <p>{filteredData[0].show.name}</p>}

        {/* <div className="max-w-2xl px-4 pb-16 lg:col-span-1 max-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
          <div className="lg:col-span-2">
            <h1 className="text-lg font-semibold text-gray-900 lg:text-xl">
              Universaloutfit
            </h1>
            <h1 className="pt-1 text-lg text-gray-900 opacity-60 lg:text-xl">
              Casual Puff Sleeves Solid Women White Top
            </h1>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <div className="flex items-center mt-6 space-x-5 text-lg text-gray-900 lg:text-xl">
              <p className="font-semibold">₹199</p>
              <p className="line-through opacity-50">₹211</p>
              <p className="font-semibold text-green-600">5% Off</p>
            </div>

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
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                </div>

                
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
                  },
                }}
              >
                Add to Cart
              </Button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
     
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">description</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

            
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">jj</p>
              </div>
            </div>
          </div>
        </div> */}
      {/* </section> */}
    </div>
  );
};

export default ProductDetails;
