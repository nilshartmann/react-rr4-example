// React and Hot Loader
import React from 'react';
import ReactDOM from 'react-dom';

// styles
import './styles/styles.css';

// The Application
import App from './App';
import ContactsPage from './components/ContactsPage';

import model from './Model';

// Render Application
const mountPoint = document.getElementById('mount');
ReactDOM.render(
	<App>
		<ContactsPage contacts={model.contacts} selectedContact={1} />
	</App>,
	mountPoint
);
