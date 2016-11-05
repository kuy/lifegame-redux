import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'common/containers/app';
import * as Ship from 'redux-ship';
import { logControl } from 'redux-ship-logger';
import control from './controllers';
import * as Effect from './effects';
import configureStore from './store';

const store = configureStore();

function dispatch(action) {
  store.dispatch(action);
  Ship.run(Effect.run, store.dispatch, store.getState, logControl(control)(action));
}

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h2>Lifegame Redux - redux-ship</h2>
      <App dispatch={dispatch} />
    </div>
  </Provider>,
document.getElementById('container'));
