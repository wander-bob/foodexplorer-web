import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from "./routes";

import GlobalStyles from "./styles/global";
import { AuthProvider } from "./hooks/auth";
import { CartProvider } from "./hooks/cart";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <AuthProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
)