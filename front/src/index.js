import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { store } from '../src/store/index';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}> 
        <BrowserRouter>
        <App />
        </BrowserRouter> 
    </Provider>
);