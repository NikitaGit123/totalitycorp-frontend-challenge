import React from 'react';
import { createRoot } from 'react-dom/client';  // Updated import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = document.getElementById('root');
if (root) {
  const rootContainer = createRoot(root);  // Updated usage
  rootContainer.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  );
}

reportWebVitals();
