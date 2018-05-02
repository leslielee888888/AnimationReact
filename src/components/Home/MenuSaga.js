import Fetch from '../../Utils/fetch';
import {put, call} from 'redux-saga/effects';
import * as Actions from '../../Utils/actions';
import * as URL from '../../Utils/URL';

export function* getMenu(action) {
    const data = yield call(Fetch, URL.HOME_MENU);

    try {
        yield put({type: Actions.HOME_MENU_LOAD_SUCCESS, data});
    } catch (e) {
    }
}