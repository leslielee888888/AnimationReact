import {fromJS} from 'immutable';
import * as Actions from "../../Utils/actions";

const initialState = fromJS({
    clearingOrderAll: {},
    clearingOrderFreeze: {},
    clearingOrderCashout: {},
    sumAmt: 0,
    allPageIndex: 1,
    freezePageIndex:1,
    cashoutPageIndex:1
});

export function loadAll() {
    return {
        type: Actions.PERFORMANCE_ALL_LOAD
    }
}

export function loadAllNext(index) {
    return {
        type: Actions.PERFORMANCE_ALL_LOAD_NEXT,
        payload: {
            allPageIndex: ++index
        }
    }
}
export function loadFreeze() {
    return {
        type: Actions.PERFORMANCE_FREEZE_LOAD
    }
}

export function loadFreezeNext(index) {
    return {
        type: Actions.PERFORMANCE_FREEZE_LOAD_NEXT,
        payload: {
            freezePageIndex: ++index
        }
    }
}
export function loadCashout() {
    return {
        type: Actions.PERFORMANCE_CASHOUT_LOAD
    }
}

export function loadCashoutNext(index) {
    return {
        type: Actions.PERFORMANCE_CASHOUT_LOAD_NEXT,
        payload: {
            cashoutPageIndex: ++index
        }
    }
}
export default function PerformanceActions(state = initialState, action) {
    switch (action.type) {
        case Actions.PERFORMANCE_ALL_LOAD: {
            return state;
        }
        case Actions.PERFORMANCE_ALL_LOAD_SUCCESS: {
            return state.set('clearingOrderAll', fromJS(action.data)).set('sumAmt', action.data && action.data.sumAmt);
        }
        case Actions.PERFORMANCE_ALL_LOAD_NEXT: {
            return state.set('allPageIndex', action.payload.allPageIndex)
        }
        case Actions.PERFORMANCE_ALL_LOAD_NEXT_SUCCESS: {
            if (action.data.success) {
                let clearingOrder = state.get('clearingOrderAll').toJSON().clearingOrder;
                clearingOrder = clearingOrder.concat(action.data.clearingOrder);
                return state.set('clearingOrderAll', fromJS({
                    ...action.data,
                    clearingOrder
                }));
            } else {
                return state
            }
        }
        case Actions.PERFORMANCE_FREEZE_LOAD: {
            return state;
        }
        case Actions.PERFORMANCE_FREEZE_LOAD_SUCCESS: {
            console.log(action.data);
            return state.set('clearingOrderFreeze', fromJS(action.data));
        }
        case Actions.PERFORMANCE_FREEZE_LOAD_NEXT: {
            return state.set('freezePageIndex', action.payload.freezePageIndex)
        }
        case Actions.PERFORMANCE_FREEZE_LOAD_NEXT_SUCCESS: {
            if (action.data.success) {
                let clearingOrder = state.get('clearingOrderFreeze').toJSON().clearingOrder;
                clearingOrder = clearingOrder.concat(action.data.clearingOrder);
                return state.set('clearingOrderFreeze', fromJS({
                    ...action.data,
                    clearingOrder
                }));
            } else {
                return state
            }
        }
        case Actions.PERFORMANCE_CASHOUT_LOAD: {
            return state;
        }
        case Actions.PERFORMANCE_CASHOUT_LOAD_SUCCESS: {
            return state.set('clearingOrderCashout', fromJS(action.data));
        }
        case Actions.PERFORMANCE_CASHOUT_LOAD_NEXT: {
            return state.set('cashoutPageIndex', action.payload.cashoutPageIndex)
        }
        case Actions.PERFORMANCE_CASHOUT_LOAD_NEXT_SUCCESS: {
            if (action.data.success) {
                let clearingOrder = state.get('clearingOrderCashout').toJSON().clearingOrder;
                clearingOrder = clearingOrder.concat(action.data.clearingOrder);
                return state.set('clearingOrderCashout', fromJS({
                    ...action.data,
                    clearingOrder
                }));
            } else {
                return state
            }
        }
        default:
            return state
    }
}