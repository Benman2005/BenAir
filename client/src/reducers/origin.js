import {UPDATE_ORIGIN} from '../actions/flights'

export default function (state =null, action) {
    switch (action.type) {
        case UPDATE_ORIGIN:
        if(action.payload === undefined){return state}
        else return action.payload
        default:
            return state
    }

}