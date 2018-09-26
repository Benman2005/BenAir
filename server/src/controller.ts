import {Controller, Get, Post, Param,  Body, NotFoundError} from 'routing-controllers'
import { Flight } from './flights/flight'

@Controller()
export default class MainController {

    @Get('/flights')
    getFlights = async() =>{
        const flights = await Flight.find()
        if(!flights) throw new NotFoundError(`Destination does not exist`)
        return {flights}
    }

    @Get('/origins')
    getOrigins = async() =>{
        const flights = await Flight.find()
        if(!flights) throw new NotFoundError(`Destination does not exist`)
        console.log(flights.map(flight=>flight.origin))
        return flights.map(flight=>flight.origin)
    }

    @Post('/destination')
    async findDestination(
        @Body() flight: Partial<Flight>
    ){const flights = await Flight.find({where: {origin:flight.origin}})
    if(!flights) throw new NotFoundError(`Destination does not exist`)
    return flights.map(flight=>flight.destination)
    }
    
    @Post('/flight')
    async findFlight(
        @Body() flight: Partial<Flight>){
        const flights = await Flight.find({where: {origin:flight.origin, destination: flight.destination}})
        if(!flights) throw new NotFoundError(`Flight does not exist`)
        return {flights}
    }
}