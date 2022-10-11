import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./reducers/store";
import { Provider } from 'react-redux';
import AllProducts from "./products/allProducts";
import Cart from "./cart/cart";
import Checkout from "./checkout/checkout";
import Orders from "./orders/orders";

function App() {
  
  return (
      <div>
          <Provider store={store}>
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<AllProducts />} />
                      <Route path="/orders" element={<Orders />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/checkout" element={<Checkout />} />
                  </Routes>
              </BrowserRouter>
          </Provider>
      </div>
  );
}

export default App;
