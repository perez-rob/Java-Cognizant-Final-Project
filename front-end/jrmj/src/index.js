import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import App from './App';


const qc = new QueryClient();


ReactDOM.render(
  <React.StrictMode>
     <QueryClientProvider client={qc}>
    <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


