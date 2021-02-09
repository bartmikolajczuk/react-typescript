import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import ProductsList from './components/Products/productsList';

const PRODUCTS = [
    {
        name: 'Expat Leasing',
        duration: 300,
        country: 'Saudi Arabia',
    },
    {
        name: 'BlaBlaCar',
        duration: 300,
        country: 'France',
    },
    {
        name: 'A2I',
        duration: 300,
        country: 'Saudi Arabia',
    },
]
const App = () => {
  return (
    <div className="App">
      <Navbar title="Profiles"/>
      <ProductsList
          products={PRODUCTS}
      />
    </div>
  );
}

export default App;
