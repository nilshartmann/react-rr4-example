import React from 'react';
import classnames from 'classnames';

export default ({contacts}) => {
	const menuStyles = {
		marginBottom: '1rem'
	};

	const ulClasses = classnames('menu vertical', {
		'disabled': false // selectedContact.editing
	});


	return <div>
		<ul className={ulClasses} style={menuStyles}>
			{contacts.map(contact => {
				const liClasses = classnames({
					'active': contact.pk === false, // selectedContact.pk,
				});
				return <li key={contact.pk}
					className={liClasses}>
					<a>{contact.name}</a>
				</li>
					;
			})}
		</ul>
	</div>;
}
