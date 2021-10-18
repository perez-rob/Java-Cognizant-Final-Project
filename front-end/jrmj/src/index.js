import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import App from './App';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CartContextProvider from './context/cart-context';


const qc = new QueryClient();
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);


ReactDOM.render(
    <QueryClientProvider client={qc}>
    <CartContextProvider>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </CartContextProvider>
    </QueryClientProvider>,
  document.getElementById('root')
);


