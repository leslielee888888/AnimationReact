import { combineReducers } from 'redux-immutable';
import MyBonus from '../components/MyBonus/MyBonusRedux';
// 引入 reducer 及 actionCreator
export default combineReducers({
    MyBonus
});

export * as myBonusActions from '../components/MyBonus/MyBonusRedux';