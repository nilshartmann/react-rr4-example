import {  IContactsState, IContactsAction, IContact } from '../types';

const updateOrAddContact = (contacts: IContact[], updatedOrNewContact: IContact) => {
  let isContactNew = true;
  let result = [];

  contacts.forEach(oldContact => {
    if (oldContact.pk === updatedOrNewContact.pk) {
      result.push(updatedOrNewContact);
      isContactNew = false;
    } else {
      result.push(oldContact);
    }
  });

  if (isContactNew) {
    result.push(updatedOrNewContact);
  }

  return result;
};

const contacts = (state: IContactsState = [], action: IContactsAction): IContactsState => {
  switch (action.type) {
    case 'SAVE_CONTACT_SUCCESS':
      const payload = action.payload; // payload is the saved SINGLE contact (as returned from server)
      return updateOrAddContact(state, payload);
    case 'FETCH_CONTACTS_SUCCESS': {
      const payload = action.payload; // payload is a LIST of contactss (as returned from server)
      return payload;
    }
  }
  return state;
};

export default contacts;
