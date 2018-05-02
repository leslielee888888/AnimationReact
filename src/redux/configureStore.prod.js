import {createStore, compose, applyMiddleware} from 'redux';
import {combineReducers} from 'redux-immutable';
import createHistory from 'history/createHashHistory';
import {ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import DevTools from './DevTools';
import rootSaga from '../sagas/saga';
import {Map} from 'immutable';

export const history = createHistory();
const middleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const finalCreateStore = compose(
    applyMiddleware(middleware, sagaMiddleware),
)(createStore);

const reducer = combineReducers(Object.assign({}, rootReducer, {
    routing: routerReducer,
}));

export default function configureStore(initialState = Map({})) {
    const store = finalCreateStore(reducer, initialState);
    sagaMiddleware.run(rootSaga);
    return store;
};

