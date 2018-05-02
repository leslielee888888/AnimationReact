import Fetch from '../../Utils/fetch';
import {put, call} from 'redux-saga/effects';
import * as Actions from '../../Utils/actions';
import * as URL from '../../Utils/URL';

export function* getMyBonus(action) {
    const data = yield call(Fetch, URL.MYBONUS);

    try {
        yield put({type: Actions.MYBONUS_LOAD_SUCCESS, data});
    } catch (e) {
    }
}