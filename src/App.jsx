import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import HomePage from "./Components/Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:id" element={<ProductDetails />} />
          </Routes>
        </Router>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
