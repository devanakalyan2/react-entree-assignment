
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';



ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
