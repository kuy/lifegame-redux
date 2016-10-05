import { createStore, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import logger from 'redux-logger';
import reducer from 'common/reducers';
import logics from './logics';

export default function configureStore(initialState) {
  const deps = {};
  const logicMiddleware = createLogicMiddleware(logics, deps);
  return createStore(
    reducer,
    initialState,
    applyMiddleware(
      logicMiddleware, logger()
    )
  );
};
