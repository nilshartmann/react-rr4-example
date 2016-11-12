const { push } = require('react-router-redux');

import {
  IContact,
  IContactsAction,
  ISelectedContactAction,
  IFilterAction, IFilterActionTypes,
  IAuthAction, IAuthActionTypes, IAuthentication } from '../types';
import { IApiAction, IApiCallData } from '../middleware/api';

export const startEditing = (): ISelectedContactAction => ({ type: 'SET_EDITING', payload: true });
export const stopEditing = (): ISelectedContactAction => ({ type: 'SET_EDITING', payload: false });

export const setFilter = (filter: string): IFilterAction => ({ type: 'SET_FILTER', payload: filter });
export const clearFilter = (): IFilterAction => ({ type: 'SET_FILTER', payload: '' });


function saveContactApiAction(contact: IContact): IApiAction {
  const contactRequestEntity = Object.assign({}, contact);
  delete contactRequestEntity.pk;
  return {
    CALL_API: {
      endpoint: contact.pk ? `/contacts/${contact.pk}` : '/contacts',
      method: contact.pk ? 'PATCH' : 'POST',
      body: contactRequestEntity,
      types: ['SAVE_CONTACT_PENDING', 'SAVE_CONTACT_SUCCESS', 'SAVE_CONTACT_FAILED'],
      successMessage: 'Contact saved'
    }
  };
}

export function saveContact(contact: IContact) {
  return dispatch => dispatch(saveContactApiAction(contact));
}



function fetchContactsApiAction(): IApiAction {
  return {
    CALL_API: {
      endpoint: '/contacts',
      types: ['FETCH_CONTACTS_PENDING', 'FETCH_CONTACTS_SUCCESS', 'FETCH_CONTACTS_FAILED']
    }
  };
}

export function fetchContacts() {
  return dispatch => dispatch(fetchContactsApiAction());
}


function loginApiAction(authentication): IApiAction {
  return {
    CALL_API: {
      types: ['LOGIN_PENDING', 'LOGIN_SUCCESS', 'LOGIN_FAILED'],
      method: 'POST',
      endpoint: '/login',
      body: authentication
    }
  };
}

// TODO: https://github.com/tshelburne/redux-batched-actions
// http://stackoverflow.com/a/32922381/6134498

export function login(authentication: IAuthentication, redirect: string) {
  return dispatch =>
    dispatch(loginApiAction(authentication))
      .then(() => dispatch(push(redirect || '/')));
}
