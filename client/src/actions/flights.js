import * as request from 'superagent'
const baseUrl = 'http://localhost:4000'

export const GET_DESTINATIONS = "GET_DESTINATIONS"
export const UPDATE_FLIGHTS = "UPDATE_FLIGHTS"
export const UPDATE_ORIGIN = "UPDATE_ORIGIN"
export const UPDATE_DESTINATION = "UPDATE_DESTINATION"
export const GET_ORIGINS = 'GET_ORIGINS'

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

const logResponse = (response, responseTime)=>{
    const status=response.status
    request.post(`${baseUrl}/response`)
        .send({status, responseTime})
        .catch(err=>console.log(err))
}
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
export const getAllFlights = () => (dispatch) =>{
    request
        .get(`${baseUrl}/flights`)
        .then(result => dispatch(updateFlights(result.body)))
        .catch(err=> console.log(err))
}
export const getFlightsFromOrigin = (origin) => (dispatch) =>{
    request
        .post(`${baseUrl}/destination`)
        .send({origin})
        .then(res=> dispatch(getDestinations(res.body)))
        .catch(err=> console.log(err))
}
export const getFlight = (origin, destination) => (dispatch) =>{
    request
        .post(`${baseUrl}/flight`)
        .send({origin, destination})
        .then(result => dispatch(updateFlights(result.body)))
        .catch(err=> console.log(err))
}