import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './css/style.css'
import './plugins/bootstrap/css/bootstrap.min.css';
import './plugins/icofont/icofont.min.css'
import {UserContextProvider} from "./store/userContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <UserContextProvider>
            <App/>
        </UserContextProvider>
    </React.StrictMode>
);

reportWebVitals();
