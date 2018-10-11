import * as request from 'superagent'
const baseUrl = 'http://localhost:4000'

export const GET_DESTINATIONS = "GET_DESTINATIONS"
export const UPDATE_FLIGHTS = "UPDATE_FLIGHTS"
export const UPDATE_ORIGIN = "UPDATE_ORIGIN"
export const UPDATE_DESTINATION = "UPDATE_DESTINATION"
export const GET_ORIGINS = 'GET_ORIGINS'
export const UPDATE_LOGS = "UPDATE_LOGS"

const updateFlights = (flights)=>({
    type: UPDATE_FLIGHTS,
    payload: flights
})
export const selectOrigin = (origin)=>({
    type: UPDATE_ORIGIN,
    payload: origin
})
export const selectDestination = (destination)=>({
    type: UPDATE_DESTINATION,
    payload: destination
})
export const getDestinations = (destinations) => ({
    type: GET_DESTINATIONS,
    payload: destinations
})
export const getOrigins = (origins) =>({
    type:GET_ORIGINS,
    payload: origins
})

export const updateLogs = (logs) =>({
    type: UPDATE_LOGS,
    payload: logs
})
//this logs response status and times to response table 
const logResponse = (response, responseTime)=>{
    const status=response.status
    request.post(`${baseUrl}/response`)
        .send({status, responseTime})
        .catch(err=>console.log(err))
}

//gets all origins
export const getOriginsFromDatabase = () => (dispatch) =>{
    const newDate1 = new Date()
    request
        .get(`${baseUrl}/origins`)
        .then(result=>{
            const newDate2 = new Date()
            const dif = newDate2 - newDate1
            dispatch(getOrigins(result.body))&& logResponse(result, dif)})
        .catch(err=> console.log(err))
}
//no longer in use
export const getAllFlights = () => (dispatch) =>{
    const newDate1 = new Date()
    request
        .get(`${baseUrl}/flights`)
        .then(result =>{ 
            const newDate2 = new Date()
            const dif = newDate2 - newDate1
            dispatch(updateFlights(result.body))&& logResponse(result, dif)})
        .catch(err=> console.log(err))
}

//gets available destinations based on origin
export const getFlightsFromOrigin = (origin) => (dispatch) =>{
    const newDate1 = new Date()
    request
        .post(`${baseUrl}/destination`)
        .send({origin})
        .then(result=>{ 
            const newDate2 = new Date()
            const dif = newDate2 - newDate1
             dispatch(getDestinations(result.body))&& logResponse(result, dif)})
        .catch(err=> console.log(err))
}

//gets available flights based on origin and destination
export const getFlight = (origin, destination) => (dispatch) =>{
    const newDate1 = new Date()
    request
        .post(`${baseUrl}/flight`)
        .send({origin, destination})
        .then(result =>{
            const newDate2 = new Date()
            const dif = newDate2 - newDate1
            dispatch(updateFlights(result.body))&& logResponse(result, dif)})
        .catch(err=> console.log(err))
}
// used in Logs page to get stats from response table
export const getLogs = () => (dispatch)=>{
    request
        .get(`${baseUrl}/response`)
        .then(result=>dispatch(updateLogs(result.body)))
        .catch(err=>console.log(err))
}