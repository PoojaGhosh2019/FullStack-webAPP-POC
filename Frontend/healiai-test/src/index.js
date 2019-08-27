import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import Search from './components/search';

ReactDOM.render(<Search />, document.getElementById('root'));
serviceWorker.unregister();
