import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'src/redux/';
import rootSaga from 'src/redux/saga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [sagaMiddleware];

const middleware = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(rootReducer, window.INITIAL_STATE, middleware);

sagaMiddleware.run(rootSaga);
export default store;
