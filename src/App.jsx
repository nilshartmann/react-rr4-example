import React from 'react';
import Match from 'react-router/Match';
import Redirect from 'react-router/Redirect';
import Link from 'react-router/Link';
import Miss from 'react-router/Miss';

import WelcomePage from './welcome/WelcomePage';
import AboutPage from './about/AboutPage';
import ContactsPage from './contacts/ContactsPage';
import RedirectsPage from './redirects/RedirectsPage';

import contactsModel from './contacts/ContactsModel';

const NoMatch = (props) => (
	// There's a bug in <Miss />, so no props are passed in yet: https://github.com/ReactTraining/react-router/issues/4026
	<div>Nothing matched!</div>
);

const renderContactsPage = (props) => {
	console.log('renderContactsPage --- props', props);

	// there's a bug with undefined optional props: https://github.com/ReactTraining/react-router/issues/4138
	if (!props.params.pk || props.params.pk === 'undefined') {
		return <Redirect to={`${props.pathname}/1`} />;
	}
	return <ContactsPage contacts={contactsModel.contacts} selectedContactPk={props.params.pk} />;
}


export default (props) => {
    console.log('main - props', props);
	return <main>
		<header>
			<div className='nav'>
				<ul>
					<li><Link to='/welcome' className="button" activeClassName="active">Welcome</Link></li>
					<li><Link to='/about' className="button" activeClassName="active">About</Link></li>
					<li><Link to='/contacts' className="button" activeClassName="active">Contacts</Link></li>
					<li><Link to='/redirects' className="button" activeClassName="active">Redirects</Link></li>
				</ul>
			</div>
		</header>

		<Match exactly pattern='/' render={() => <Redirect to='/welcome' />} />
		<Match pattern='/welcome' component={WelcomePage} />
		<Match pattern='/about' component={AboutPage} />
		<Match pattern='/contacts/:pk?' exactly render={renderContactsPage} />
		<Match pattern='/redirects' exactly component={RedirectsPage} />
		<Miss component={NoMatch} />
	</main>;
};
