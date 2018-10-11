import {Controller, Get, Post, Body, NotFoundError, HttpCode} from 'routing-controllers'
import { Flight } from './flights/flight'

@Controller()
// @UseBefore(responseTime())
export default class MainController {
    
    @Get('/flights')
    getFlights = async() =>{
        const newDate1= new Date()
        const flights = await Flight.find()
        if(!flights) throw new NotFoundError(`Destination does not exist`)
        const newDate2= new Date()
        console.log(Number(newDate1)-Number(newDate2))
        return {flights}
    }
    
    @Get('/origins')
    @HttpCode(200)
    getOrigins = async() =>{
        const newDate1= new Date()
        const flights = await Flight.find()
        if(!flights) throw new NotFoundError(`Destination does not exist`)
        const newDate2= new Date()
        console.log(Number(newDate1)-Number(newDate2))
        return flights.map(flight=>flight.origin)
    }

    @Post('/destination')
    @HttpCode(200)
    async findDestination(
        @Body() flight: Partial<Flight>
    ){const flights = await Flight.find({where: {origin:flight.origin}})
    if(!flights) throw new NotFoundError(`Destination does not exist`)
    return flights.map(flight=>flight.destination)
    }
    
    @Post('/flight')
    @HttpCode(200)
    async findFlight(
        @Body() flight: Partial<Flight>){
        const flights = await Flight.find({where: {origin:flight.origin, destination: flight.destination}})
        if(!flights) throw new NotFoundError(`Flight does not exist`)
        return {flights}
    }
}