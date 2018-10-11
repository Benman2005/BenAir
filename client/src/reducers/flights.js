import {UPDATE_FLIGHTS} from '../actions/flights'

export default function (state ={}, action) {
    switch (action.type) {
        case UPDATE_FLIGHTS:
            return action.payload;
        default:
            return state
    }

}