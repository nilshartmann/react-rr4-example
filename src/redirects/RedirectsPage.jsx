import React from 'react';

import { routerContext } from 'react-router/PropTypes';

export default class RedirectsPage extends React.Component {

	redirectTo(path) {
		this.context.router.transitionTo(path);
	}

	render() {
		return <div className='Page'>
			Click to <a onClick={e => { e.preventDefault(); this.redirectTo('/') } }>Redirect</a>
		</div>;
	}
}

RedirectsPage.contextTypes = {
	router: routerContextc
};
