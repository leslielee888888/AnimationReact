import {fromJS} from 'immutable';
import * as Actions from "../../Utils/actions";

const initialState = fromJS({
    "needApprove": false,
    "unClearing": 0,
    "success": true,
    "withdraw0": 0,
    "endamt": 0,
    "withdraw1": 0,
    "sumAmt": 0
});

export function load() {
    return {
        type:Actions.MYBONUS_LOAD
    }
}

export default function MyBonusActions(state = initialState, action)
{
    switch (action.type) {
        case Actions.MYBONUS_LOAD: {
            return state;
        }
        case Actions.MYBONUS_LOAD_SUCCESS:{
            return state.merge({
                ...action.data
            })
        }
        default:
            return state
    }
}