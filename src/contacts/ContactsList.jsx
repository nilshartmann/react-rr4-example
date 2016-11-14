import React from 'react';
import classnames from 'classnames';
import Link from 'react-router/Link';

const LinkedListEntry = ({ isActive, href, onClick, label, pk }) => (
	<li className={isActive ? 'active' : null}>
		<a href={href} onClick={onClick}>
			{label}
		</a>
	</li>
);

export default ({contacts, selectedContactPk}) => (
	<ul className={'menu vertical'}>
		{contacts.map(contact => (
			<Link key={contact.pk} to={`/contacts/${contact.pk}`}>{params => <LinkedListEntry label={contact.name} {...params} />}</Link>
		))}
	</ul>
);
