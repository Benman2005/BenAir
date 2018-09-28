import 'reflect-metadata'
import {createKoaServer, useKoaServer} from "routing-controllers"
import Controller from "./controller"
import LogController from './logController';
import setupDb from './db'
import * as responseTime from 'response-time'
import {Server} from 'http'
import * as Koa from 'koa'

// const app = new Koa()
// const server = new Server(app.callback())
// useKoaServer(app, {
//     cors: true,
//     controllers: [Controller]})

const port = process.env.PORT || 4000
  
const app = createKoaServer({
  cors: true,
  controllers: [Controller, LogController],
  // middlewares: [responseTime]  
})
// app.use(responseTime()),

setupDb()
.then(_ =>
  app.listen(port, () => console.log('Listening on port 4000'))
  )
  .catch(err => console.error(err))