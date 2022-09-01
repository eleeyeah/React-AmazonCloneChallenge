import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  const [basket, setBasket] = React.useState([{
    id: 1,
    title: 'React Book',
    price: 10,
  },
{
    id: 2,
    title: 'React Book 2',
    price: 20,

}]);

  return (
    <Router>
      <div className="app">
        <Header />
        
      <Routes>
        <Route path="/checkout" element={<Checkout basket={basket} />} />
        <Route path="/" element={<Home />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
