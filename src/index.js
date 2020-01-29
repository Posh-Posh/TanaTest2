import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* data */
import data from "./data.json"

import App from './App';

ReactDOM.render(<App data={data}/>, document.getElementById('root'));
