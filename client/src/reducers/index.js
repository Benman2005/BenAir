import { combineReducers } from 'redux'
import flights from './flights'
import origin from './origin'
import origins from './origins'
import destination from './destination'
import destinations from './destinations'


export default combineReducers({
    flights, 
    origin,
    origins,
    destination,
    destinations
})