import { IContact, IFetchContactsSuccessAction, ISelectedContactState, ISelectedContactAction } from '../types';
const { LOCATION_CHANGE } = require('react-router-redux');

/** Matches /contacts and contacts/XXX  and /contacts/XXX/blabla */
const urlRegExp = /contacts\/?([^\/]*)/;

const EMPTY_SELECTED_CONTACT = {
  pk: '',
  editing: false,
  isNew: false
};

const selectedContact = (state: ISelectedContactState = EMPTY_SELECTED_CONTACT, action: ISelectedContactAction | IFetchContactsSuccessAction): ISelectedContactState => {
  switch (action.type) {
    case LOCATION_CHANGE: {
      // read selected contact (PK) from url
      const pathname = (action.payload as any).pathname;
      const match = urlRegExp.exec(pathname);

      if (!match) {
        return EMPTY_SELECTED_CONTACT;
      }

      const pk = match[1];
      if ('new' === pk) {
        return { editing: true, isNew: true };
      }

      return { pk };
    }
    case 'SET_EDITING': {
      const isEditing = action.payload;
      return Object.assign({}, state, { editing: isEditing });
    }
  }
  return state;
};

export default selectedContact;
