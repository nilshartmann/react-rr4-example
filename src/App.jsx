import React from 'react';
import Match from 'react-router/Match';
import Redirect from 'react-router/Redirect';
import Link from 'react-router/Link';
import Miss from 'react-router/Miss';

import AboutPage from './about/AboutPage';
import ContactsPage from './contacts/ContactsPage';

import contactsModel from './contacts/ContactsModel';

const NoMatch = (props) => (
	// There's a bug in <Miss />, so no props are passed in yet: https://github.com/ReactTraining/react-router/issues/4026
	<div>Nothing matched!
		<pre>
			{JSON.stringify(props)}
		</pre>
	</div>
);

const renderContactsPage = (props) => {
	console.log('props', props);

	// there's a bug with undefined optional props: https://github.com/ReactTraining/react-router/issues/4138
	if (!props.params.pk || props.params.pk === 'undefined') {
		return <Redirect to={`${props.pathname}/1`} />;
	}
	return <ContactsPage contacts={contactsModel.contacts} selectedContactPk={props.params.pk} />;
}


export default (props) => {
	return <main>
		<header>
			<div className='nav'>
				<ul>
					<li><Link to='/about' className="button" activeClassName="active">About</Link></li>
					<li><Link to='/contacts' className="button" activeClassName="active">Contacts</Link></li>
					<li><Link to='/secret' className="button" activeClassName="active">Secret</Link></li>
				</ul>
			</div>
		</header>

		<Match exactly pattern='/' render={() => <Redirect to='/about' />} />
		<Match pattern='/about' component={AboutPage} />
		<Match pattern='/contacts/:pk?' render={renderContactsPage} />
		<Miss component={NoMatch} />
	</main>;
};
