import {IAuthState, IAuthAction, IAuthActionTypes } from '../types';

const contacts = (state: IAuthState = {username: null, error: null}, action: IAuthAction): IAuthState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      // payload is username of logged in user
      return { username: action.payload.username, authorization: action.payload.authorization };
    case 'LOGIN_FAILED':
      return { error: 'Invalid Credentials' };
  }
  return state;
};

export default contacts;
