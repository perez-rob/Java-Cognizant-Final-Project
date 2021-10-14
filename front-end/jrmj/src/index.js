import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import App from './App';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const qc = new QueryClient();
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);


ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={qc}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


