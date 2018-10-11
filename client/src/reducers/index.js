import { combineReducers } from 'redux'
import flights from './flights'
import origin from './origin'
import origins from './origins'
import destination from './destination'
import destinations from './destinations'
import logs from './logs'


export default combineReducers({
    flights, 
    origin,
    origins,
    destination,
    destinations,
    logs
})