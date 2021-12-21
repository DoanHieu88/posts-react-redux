import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'   
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './app/store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'

ReactDOM.render(
      <Provider store={store}>
            <Router>
                  <App/>
            </Router>
      </Provider>,
    document.getElementById('root'))