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
exports.DocumentController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const document_dto_1 = require("./document.dto");
const document_service_1 = require("./document.service");
let DocumentController = class DocumentController {
    constructor(documentService) {
        this.documentService = documentService;
    }
    async forceSave(body) {
        return await this.documentService.forceSave(body);
    }
    async documentInfo(query) {
        return await this.documentService.documentInfo(query);
    }
    async excelInfo(query) {
        return await this.documentService.excelInfo(query);
    }
};
__decorate([
    (0, common_1.Post)('forceSave'),
    (0, swagger_1.ApiOperation)({
        summary: '强制保存文档',
        description: '通过调用 Onlyoffice 提供的指令接口间接保存文件，最终文件的报错操作还是在 editorConfig.callbackUrl 所指定的接口里面完成的',
    }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [document_dto_1.DocumentForceSaveDto]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "forceSave", null);
__decorate([
    (0, common_1.Get)('documentInfo'),
    (0, swagger_1.ApiOperation)({
        summary: '获取文档信息',
        description: '仅构造 Onlyoffice 文档编辑器显示和保存需要的必要信息',
    }),
    openapi.ApiResponse({ status: 200, type: require("./document.entity").DocumentInfo }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [document_dto_1.DocumentInfoDto]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "documentInfo", null);
__decorate([
    (0, common_1.Get)('excelInfo'),
    (0, swagger_1.ApiOperation)({
        summary: '获取表格信息',
        description: '仅构造 Onlyoffice 表格编辑器显示和保存需要的必要信息',
    }),
    openapi.ApiResponse({ status: 200, type: require("./document.entity").DocumentInfo }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [document_dto_1.DocumentInfoDto]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "excelInfo", null);
DocumentController = __decorate([
    (0, swagger_1.ApiTags)('Document'),
    (0, common_1.Controller)({
        path: 'document',
        version: '1',
    }),
    __metadata("design:paramtypes", [document_service_1.DocumentService])
], DocumentController);
exports.DocumentController = DocumentController;
//# sourceMappingURL=document.controller.js.map