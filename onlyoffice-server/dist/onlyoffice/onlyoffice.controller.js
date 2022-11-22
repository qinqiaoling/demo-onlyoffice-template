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
exports.OnlyofficeController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const onlyoffice_dto_1 = require("./onlyoffice.dto");
const onlyoffice_service_1 = require("./onlyoffice.service");
let OnlyofficeController = class OnlyofficeController {
    constructor(onlyofficeService) {
        this.onlyofficeService = onlyofficeService;
    }
    async callback(body) {
        return await this.onlyofficeService.callback(body);
    }
};
__decorate([
    (0, common_1.Post)('callback'),
    (0, swagger_1.ApiOperation)({
        summary: '文档回调地址',
        description: '对应 Onlyoffice 的 editorConfig.callbackUrl 字段',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: require("./onlyoffice.entity").OnlyofficeCallback }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [onlyoffice_dto_1.OnlyofficeCallbackDto]),
    __metadata("design:returntype", Promise)
], OnlyofficeController.prototype, "callback", null);
OnlyofficeController = __decorate([
    (0, swagger_1.ApiTags)('Onlyoffice'),
    (0, common_1.Controller)({
        path: 'onlyoffice',
        version: '1',
    }),
    __metadata("design:paramtypes", [onlyoffice_service_1.OnlyofficeService])
], OnlyofficeController);
exports.OnlyofficeController = OnlyofficeController;
//# sourceMappingURL=onlyoffice.controller.js.map