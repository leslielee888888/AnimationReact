import { combineReducers } from 'redux-immutable';
import Menu from '../components/Home/MenuRedux';
// 引入 reducer 及 actionCreator
export default combineReducers({
    Menu
});

export * as menuActions from '../components/Home/MenuRedux';