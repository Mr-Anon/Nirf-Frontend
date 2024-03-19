import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <React.StrictMode >
                <BrowserRouter basename="/" >
                    <App />
                </BrowserRouter> 
            </React.StrictMode>
);

reportWebVitals();