import {GET_ORIGINS} from '../actions/flights'

export default function (state =null, action) {
    switch (action.type) {
        case GET_ORIGINS:
            return action.payload
        default:
            return state
    }

}