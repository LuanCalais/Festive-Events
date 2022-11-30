import React from 'react';
import ReactDOM from 'react-dom/client';
// File to be render
import App from '../src/view/login';

// select by id in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
