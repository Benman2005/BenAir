"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const flight_1 = require("./flights/flight");
let MainController = class MainController {
    constructor() {
        this.getFlights = async () => {
            const newDate1 = new Date();
            const flights = await flight_1.Flight.find();
            if (!flights)
                throw new routing_controllers_1.NotFoundError(`Destination does not exist`);
            const newDate2 = new Date();
            console.log(Number(newDate1) - Number(newDate2));
            return { flights };
        };
        this.getOrigins = async () => {
            const newDate1 = new Date();
            const flights = await flight_1.Flight.find();
            if (!flights)
                throw new routing_controllers_1.NotFoundError(`Destination does not exist`);
            const newDate2 = new Date();
            console.log(Number(newDate1) - Number(newDate2));
            return flights.map(flight => flight.origin);
        };
    }
    async findDestination(flight) {
        const flights = await flight_1.Flight.find({ where: { origin: flight.origin } });
        if (!flights)
            throw new routing_controllers_1.NotFoundError(`Destination does not exist`);
        return flights.map(flight => flight.destination);
    }
    async findFlight(flight) {
        const flights = await flight_1.Flight.find({ where: { origin: flight.origin, destination: flight.destination } });
        if (!flights)
            throw new routing_controllers_1.NotFoundError(`Flight does not exist`);
        return { flights };
    }
};
__decorate([
    routing_controllers_1.Get('/flights'),
    __metadata("design:type", Object)
], MainController.prototype, "getFlights", void 0);
__decorate([
    routing_controllers_1.Get('/origins'),
    routing_controllers_1.HttpCode(200),
    __metadata("design:type", Object)
], MainController.prototype, "getOrigins", void 0);
__decorate([
    routing_controllers_1.Post('/destination'),
    routing_controllers_1.HttpCode(200),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MainController.prototype, "findDestination", null);
__decorate([
    routing_controllers_1.Post('/flight'),
    routing_controllers_1.HttpCode(200),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MainController.prototype, "findFlight", null);
MainController = __decorate([
    routing_controllers_1.Controller()
], MainController);
exports.default = MainController;
//# sourceMappingURL=controller.js.map