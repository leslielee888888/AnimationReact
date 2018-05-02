import * as Actions from '../Utils/actions';
import {takeEvery} from 'redux-saga/effects';
import {getMenu} from '../components/Home/MenuSaga';
import {getMyBonus} from '../components/MyBonus/MyBonusSaga'
import {getAllPerformance,nextAllPerformance,getFreezePerformance,nextFreezePerformance,getCashoutPerformance,nextCashoutPerformance} from '../components/Performance/PerformanceSaga';

export default function* rootSagas() {
    yield takeEvery(Actions.HOME_MENU_LOAD, getMenu);
    yield takeEvery(Actions.MYBONUS_LOAD, getMyBonus);
    yield takeEvery(Actions.PERFORMANCE_ALL_LOAD, getAllPerformance);
    yield takeEvery(Actions.PERFORMANCE_ALL_LOAD_NEXT, nextAllPerformance);
    yield takeEvery(Actions.PERFORMANCE_FREEZE_LOAD, getFreezePerformance);
    yield takeEvery(Actions.PERFORMANCE_FREEZE_LOAD_NEXT, nextFreezePerformance);
    yield takeEvery(Actions.PERFORMANCE_CASHOUT_LOAD, getCashoutPerformance);
    yield takeEvery(Actions.PERFORMANCE_CASHOUT_LOAD_NEXT, nextCashoutPerformance);
}