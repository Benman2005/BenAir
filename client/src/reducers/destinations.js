import {GET_DESTINATIONS} from '../actions/flights'

export default function (state =null, action) {
    switch (action.type) {
        case GET_DESTINATIONS:
            return action.payload
        default:
            return state
    }

}