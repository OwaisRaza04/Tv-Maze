
import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = ({ movieName, genres, language ,onClose }) => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(userData)); 
    alert("Ticket Booked Successfully!");
    onClose();
  };

  return (
    <div className=" modal">
      <div className="rounded-md shadow-md modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg p-4 mx-auto rounded-lg shadow-md"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
            <label className="block mb-2 text-sm font-bold text-gray-700 opacity-70">
              Movie Name
            </label>
            <h1 className="text-xl font-semibold">
              
              {movieName}</h1>
            </div>
            <div>
            <label className="block mb-2 text-sm font-bold text-gray-700 opacity-70">
              Language
            </label>
            <h1 className="text-xl font-semibold">
              
              {genres}</h1>
            </div>
            <div>
            <label className="block mb-2 text-sm font-bold text-gray-700 opacity-70">
              Genres
            </label>
            <h1 className="text-xl font-semibold">
              
              {language}</h1>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              User Name:
            </label>
            <input
              name="userName"
              type="text"
              value={userData.userName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Email:
            </label>
            <input
              name="email"
              type="email"
              value={userData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Phone:
            </label>
            <input
              name="phone"
              type="tel"
              value={userData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            style={{background: '#9155fd'}}
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
