import React from 'react'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import HomePage from './Components/Pages/HomePage/HomePage'
import Footer from './Components/Footer/Footer'
import ProductDetails from './Components/ProductDetails/ProductDetails'

function App() {

  return (
    <>
    <div>
      <Navigation />
    </div>
    <div>
      <HomePage />
      {/* <ProductDetails /> */}
    </div>
    <div>
      <Footer />
    </div>
    </>
  )
}

export default App
