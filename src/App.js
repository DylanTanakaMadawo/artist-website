import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Appbar } from './Components/Appbar';
import theme from './Theme';
import { ThemeProvider } from '@mui/material';
import { UIProvider } from './Context/DrawerContext';
import AppDrawerMobile from './Components/AppDrawerMobile';
import { Products } from './Components/Products';

import './App.css';
import { Footer } from './Components/Footer';
import { HomePage } from './Components/HomePage';
import { Cart } from './Components/Cart';
import { CheckoutForm } from './Components/CheckoutForm';
// import AddressForm from './Components/Checkout/AddressForm';

export const App = () => {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <UIProvider>
            <Appbar />
            <AppDrawerMobile />
            
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/merch' element={<Products />} /> 
              <Route path='/cart' element={<Cart />} />
              <Route path='/placeorder' element={<CheckoutForm />} />
              {/* <Route path='/placeorder' element={<AddressForm />} /> */}
            </Routes>
            <Footer />
          </UIProvider>
        </BrowserRouter>        
    </ThemeProvider>
    </div>
   
  )
}
