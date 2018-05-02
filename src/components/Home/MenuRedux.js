import {fromJS} from 'immutable';
import * as Actions from '../../Utils/actions';

const initailState = fromJS({
    distributor: {},
    members: 0,
    myProfit: 0,
    profitDetail: 0,
    team: 0,
    withdrawDetail: 0,
    success: false
});

export function load() {
    return {
        type: Actions.HOME_MENU_LOAD
    }
}

export default function MenuReduxActions(state = initailState, action) {
    switch (action.type) {
        case Actions.HOME_MENU_LOAD: {
            return state;
        }
        case Actions.HOME_MENU_LOAD_SUCCESS: {
            return state.merge({
                ...action.data
            });
        }
        default: {
            return state;
        }
    }
}