import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFilteredApiData from "../../API/filteredData";
import { Rating } from "@mui/material";
import BookingForm from "../BookingForm/BookingForm";

const ProductDetails = () => {
  const { id } = useParams();
  const filteredData = useFilteredApiData(id);

  let imageUrl = null;

  if (filteredData[0] && filteredData[0].show.image) {
    imageUrl = filteredData[0].show.image.original;
  }

  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => setShowForm(!showForm);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="grid grid-cols-1 px-4 pt-10 lg:grid-cols-2 gap-x-8 gap-y-10">
        <div className="flex flex-col items-center">
          <div className="overflow-hidden rounded-lg w-full max-h-[40rem]">
            {imageUrl ? (
              <img
                className="object-cover object-left-top w-full h-full"
                src={imageUrl}
                alt="product"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-[40rem] bg-gray-300">
                <p className="text-gray-500">No Image Available</p>
              </div>
            )}
          </div>
        </div>

        <div className="max-w-2xl px-4 pb-16 lg:col-span-1 max-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
          <div className="lg:col-span-2">
            {filteredData[0] && (
              <h1 className="text-3xl font-bold text-gray-900">
                {filteredData[0].show.name}
              </h1>
            )}
            {filteredData[0] && (
              <h1 className="pt-1 text-lg text-gray-900 opacity-60 lg:text-xl">
                Language : {filteredData[0].show.language}
              </h1>
            )}
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <div className="flex items-center mt-6 space-x-5 text-lg text-gray-900 lg:text-xl">
              {filteredData[0] && (
                <p className="font-semibold opacity-70">
                  {filteredData[0].show.genres}
                </p>
              )}
              {filteredData[0] && (
                <p className="font-semibold opacity-70">
                  Runtime : {filteredData[0].show.runtime} min
                </p>
              )}
            </div>

            <div className="mt-6">
              <div className="flex items-center space-x-3">
                <p className="text-xl font-bold text-yellow-400">&#9733;</p>
                {filteredData[0] && (
                  <p className="font-bold">
                    {filteredData[0] &&
                    filteredData[0].show.rating &&
                    filteredData[0].show.rating.average ? (
                      filteredData[0].show.rating.average
                    ) : (
                      <p className="font-semibold opacity-70">No Rating</p>
                    )}
                  </p>
                )}
              </div>
            </div>

            <button
              className="p-5 mt-5 font-bold text-white rounded-md shadow-md"
              style={{ backgroundColor: "#9155fd" }}
              onClick={toggleForm}
            >
              BOOK TICKET
            </button>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <div className="space-y-6">
                <h1 className="text-2xl font-semibold">Summary</h1>
                <div
                  className="text-justify"
                  dangerouslySetInnerHTML={{
                    __html: filteredData[0] && filteredData[0].show.summary,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {showForm && (
        <BookingForm
          movieName={filteredData[0] ? filteredData[0].show.name : ""}
          genres={filteredData[0] ? filteredData[0].show.genres : ""}
          language={filteredData[0] ? filteredData[0].show.language : ""}
          onClose={toggleForm}
        />
      )}
    </>
  );
};

export default ProductDetails;
