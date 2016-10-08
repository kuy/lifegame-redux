import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';
import reducer from 'common/reducers';
import epics from './epics';

export default function configureStore(initialState) {
  const epicMiddleware = createEpicMiddleware(epics);
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(
      epicMiddleware, logger()
    )
  );
  return store;
};
