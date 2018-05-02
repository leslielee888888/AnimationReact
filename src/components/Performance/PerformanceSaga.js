import Fetch from '../../Utils/fetch';
import {put, call} from 'redux-saga/effects';
import * as Actions from '../../Utils/actions';
import * as URL from '../../Utils/URL';

export function* getAllPerformance(action) {
    const data = yield call(Fetch, URL.PERFORMANCE);

    try {
        yield put({type: Actions.PERFORMANCE_ALL_LOAD_SUCCESS, data});
    } catch (e) {
    }
}
export function* getFreezePerformance(action) {
    const data = yield call(Fetch, URL.PERFORMANCE,'state=0');

    try {
        yield put({type: Actions.PERFORMANCE_FREEZE_LOAD_SUCCESS, data});
    } catch (e) {
    }
}
export function* getCashoutPerformance(action) {
    const data = yield call(Fetch, URL.PERFORMANCE,'state=1');

    try {
        yield put({type: Actions.PERFORMANCE_CASHOUT_LOAD_SUCCESS, data});
    } catch (e) {
    }
}
export function* nextAllPerformance(action) {
    console.log(action);
    const data = yield call(Fetch, URL.PERFORMANCE,`pageIndex=${action.payload.allPageIndex}`);

    try {
        yield put({type: Actions.PERFORMANCE_ALL_LOAD_NEXT_SUCCESS, data});
    } catch (e) {
    }
}
export function* nextFreezePerformance(action) {
    console.log(action);
    const data = yield call(Fetch, URL.PERFORMANCE,`pageIndex=${action.payload.freezePageIndex}`);

    try {
        yield put({type: Actions.PERFORMANCE_FREEZE_LOAD_NEXT_SUCCESS, data});
    } catch (e) {
    }
}
export function* nextCashoutPerformance(action) {
    console.log(action);
    const data = yield call(Fetch, URL.PERFORMANCE,`pageIndex=${action.payload.cashoutPageIndex}`);

    try {
        yield put({type: Actions.PERFORMANCE_CASHOUT_LOAD_NEXT_SUCCESS, data});
    } catch (e) {
    }
}