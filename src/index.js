import React from 'react';
import ReactDOM from 'react-dom/client';
// File to be render
// In /App we config the routes
import App from './App';

// select by id in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
