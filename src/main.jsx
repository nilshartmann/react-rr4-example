// React and Hot Loader
import React from 'react';
import ReactDOM from 'react-dom';

import BrowserRouter from 'react-router/BrowserRouter'

// styles
import './styles/styles.css';

// The Application
import App from './App';

// Render Application
const mountPoint = document.getElementById('mount');
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	mountPoint
);
