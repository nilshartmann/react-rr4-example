import { combineReducers } from 'redux';
const { routerReducer } = require('react-router-redux');
import contacts from './contacts';
import selectedContact from './selectedContact';
import auth from './auth';
import filter from './filter';
import messages from './messages';

const contactsApp = combineReducers({
  routing: routerReducer,
  contacts,
  selectedContact,
  auth,
  filter,
  messages
});

export default contactsApp;