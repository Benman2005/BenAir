import {UPDATE_LOGS} from '../actions/flights'

export default function (state ={}, action) {
    switch (action.type) {
        case UPDATE_LOGS:
            return action.payload;
        default:
            return state
    }

}