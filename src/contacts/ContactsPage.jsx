import * as React from 'react';

import ContactsList from './ContactsList';
import ContactView from './ContactView';

export default ({contacts, selectedContactPk}) => {
	const currentContact = contacts.find(contact => contact.pk === selectedContactPk);

	return <div className='Page'>
		<div className='title'><h1>Contacts</h1></div>
		<div className='Left'><ContactsList contacts={contacts} selectedContactPk={selectedContactPk}/></div>
		<div className='Right'><ContactView contact={currentContact} /></div>
	</div>;

};

