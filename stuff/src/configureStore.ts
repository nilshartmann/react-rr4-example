import contactsApp from './reducers';
import { compose, createStore, applyMiddleware } from 'redux';
const { routerMiddleware } = require('react-router-redux');
import thunk from 'redux-thunk';

import api from './middleware/api';
declare var module: any;


export default function configureStore(history) {
  const theRouterMiddleware = routerMiddleware(history);
  const store = createStore(
    contactsApp,
    applyMiddleware(thunk, api, theRouterMiddleware)
  );

  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers').default)
    );
  }

  return store;
}