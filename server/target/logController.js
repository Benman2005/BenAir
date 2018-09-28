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
const response_1 = require("./flights/response");
let LogController = class LogController {
    async logResponse(response) {
        const entity = await response.save();
        return entity;
    }
    async getLogs() {
        const logs = await response_1.Response.find();
        if (!logs)
            throw new routing_controllers_1.NotFoundError('no logs to be found...(yet)');
        const averageTime = logs.map(log => log.responseTime).reduce((a, b) => a + b) / logs.length;
        const minResponseTime = logs.map(log => log.responseTime).reduce((a, b) => Math.min(a, b));
        const maxResponseTime = logs.map(log => log.responseTime).reduce((a, b) => Math.max(a, b));
        const twoHundreds = logs.map(log => log.status.toString()).filter(log => log.startsWith('2')).length;
        const fourHundreds = logs.map(log => log.status.toString()).filter(log => log.startsWith('4')).length;
        const fiveHundreds = logs.map(log => log.status.toString()).filter(log => log.startsWith('5')).length;
        return {
            totalRequests: logs.length,
            averageTime,
            minResponseTime,
            maxResponseTime,
            twoHundreds,
            fourHundreds,
            fiveHundreds,
        };
    }
};
__decorate([
    routing_controllers_1.Post('/response'),
    routing_controllers_1.HttpCode(201),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [response_1.Response]),
    __metadata("design:returntype", Promise)
], LogController.prototype, "logResponse", null);
__decorate([
    routing_controllers_1.Get('/response'),
    routing_controllers_1.HttpCode(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LogController.prototype, "getLogs", null);
LogController = __decorate([
    routing_controllers_1.Controller()
], LogController);
exports.default = LogController;
//# sourceMappingURL=logController.js.map