import * as React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import { IRedirectLocationState, IGlobalState } from './types';

import App from './components/App';
import ContactsPage from './components/ContactsPage';
import LoginPage from './components/LoginPage';
import NotFoundPage from './components/NotFoundPage';

export default function configureRoutes(store) {
	function requireAuth(nextState, replaceState) {
		const state = store.getState() as IGlobalState;
		if (!state.auth.username) {
			const redirectState: IRedirectLocationState = {
				redirect: nextState.location.pathname
			};
			replaceState({
				pathname: `/login`,
				state: redirectState
			});
		}
	}

	const routes = <Route component={App}>
		<Redirect from='/' to='contacts' />
		<Route path='contacts(/:contactId)' component={ContactsPage} onEnter={requireAuth} />
		<Route path='login' component={LoginPage} />
		<Route path='*' component={NotFoundPage} />
	</Route>;

	return routes;
}
