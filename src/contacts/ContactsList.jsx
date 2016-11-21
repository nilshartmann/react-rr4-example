import React from 'react';
import classnames from 'classnames';
import Link from 'react-router/Link';

const MenuEntry = ({ label, to }) => (
	<Link to={to}>{params => (
		<li className={params.isActive ? 'active' : null}>
			<a href={params.href} onClick={params.onClick}>{label}</a>
		</li>
	)}
	</Link>
);

export default ({contacts, selectedContactPk}) => (
	<ul className={'menu vertical'}>
		{contacts.map(contact => <MenuEntry key={contact.pk} to={`/contacts/${contact.pk}`} label={contact.name} />)}
	</ul>
);
