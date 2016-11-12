import * as React from 'react';

import ContactsList from './list/ContactsList';
import ContactEditor from './editor/ContactEditor';

export default ({contacts, selectedContact}) => {
	const currentContact = contacts.find(contact => contact.pk === selectedContact);
	console.log('selectedContact', selectedContact);
	console.log('currentContact', currentContact);

	return <div className='ContactsPage'>
		<div className='Left'><ContactsList contacts={contacts} /></div>
		<div className='Right'><ContactEditor contact={currentContact} /></div>
	</div>;

};

