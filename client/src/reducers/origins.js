import {GET_ORIGINS} from '../actions/flights'

export default function (state =null, action) {
    switch (action.type) {
        case GET_ORIGINS:
            return [ ...new Set(action.payload) ] //new Set ensures no duplicates in array
        default:
            return state
    }

}