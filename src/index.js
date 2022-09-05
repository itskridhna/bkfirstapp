import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

import App from './Use_Bootstrap5/App'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  	<BrowserRouter>
	   	<App />
	  </BrowserRouter>
	</>
);

