import { combineReducers } from 'redux-immutable';
import Performance from '../components/Performance/PerformanceRedux';
// 引入 reducer 及 actionCreator
export default combineReducers({
    Performance
});

export * as performanceActions from '../components/Performance/PerformanceRedux';