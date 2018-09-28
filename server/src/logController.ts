import {Controller, Get, Post, Body, NotFoundError, HttpCode} from 'routing-controllers'
import { Response } from './flights/response'

@Controller()
// @UseBefore(responseTime())
export default class LogController {

    @Post('/response')
    @HttpCode(201)
    async logResponse(
        @Body() response: Response){
            const entity = await response.save()
            return entity
    }   

    @Get('/response')
    @HttpCode(200)
    async getLogs(){
        const logs = await Response.find()
        if(!logs)throw new NotFoundError('no logs to be found...(yet)')
        const averageTime = logs.map(log=>log.responseTime).reduce((a,b)=>a+b)/ logs.length
        const minResponseTime = logs.map(log=>log.responseTime).reduce((a,b)=>Math.min(a,b))
        const maxResponseTime = logs.map(log=>log.responseTime).reduce((a,b)=>Math.max(a,b))
        const twoHundreds = logs.map(log=>log.status.toString()).filter(log=>log.startsWith('2')).length
        const fourHundreds = logs.map(log=>log.status.toString()).filter(log=>log.startsWith('4')).length
        const fiveHundreds = logs.map(log=>log.status.toString()).filter(log=>log.startsWith('5')).length

        return {
            totalRequests: logs.length,
            averageTime,
            minResponseTime,
            maxResponseTime,
            twoHundreds,
            fourHundreds,
            fiveHundreds,
            }
    }

}
