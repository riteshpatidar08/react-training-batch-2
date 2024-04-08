import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import NavBar from './components/NavBar';
function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
