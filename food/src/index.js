import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/global.css";
import Rotas from './rotas.js';
import { CartProvider } from './contexts/cart-contexts.jsx';

//Arquivo JSX que mescla HTML e JS


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
     <Rotas/>
    </CartProvider>
);

