import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { ProductListPage } from '../pages/PageProductsList';
import { CartPage } from '../pages/CartPage';
import { OrderPage } from '../pages/OrderPage';
import products from '../data/products';
import { CartProvider } from './actions/cartContext';


function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path='/' element={ <ProductListPage products={products}/> }/>
        <Route path="/cart" element={ <CartPage />} />
        <Route path="/order" element={ <OrderPage />} />
      </Routes>
    </CartProvider>
      

    
  )
}

export default App;
