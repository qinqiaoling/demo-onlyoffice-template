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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentInfoDto = exports.DocumentForceSaveDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class DocumentForceSaveDto {
    constructor() {
        this.useJwtEncrypt = 'n';
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String, description: "\u4E1A\u52A1 id" }, key: { required: true, type: () => String, description: "\u6587\u6863\u6807\u8BC6\u7B26" }, useJwtEncrypt: { required: false, type: () => String, description: "\u4F7F\u7528 JWT \u52A0\u5BC6\u6587\u6863\u53C2\u6570\uFF0C\u9ED8\u8BA4\u4E0D\u52A0\u5BC6\uFF0C\u9700\u8981\u914D\u5408 Onlyoffice \u7684 secret \u914D\u7F6E\u4F7F\u7528\u3002", default: 'n', enum: ['y', 'n'] } };
    }
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", String)
], DocumentForceSaveDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentForceSaveDto.prototype, "key", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['y', 'n']),
    __metadata("design:type", String)
], DocumentForceSaveDto.prototype, "useJwtEncrypt", void 0);
exports.DocumentForceSaveDto = DocumentForceSaveDto;
class DocumentInfoDto {
    constructor() {
        this.useJwtEncrypt = 'n';
        this.usePlugin = 'n';
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { key: { required: true, type: () => String, description: "\u6587\u6863\u6807\u8BC6\u7B26\uFF08\u4E3A\u4E86\u83B7\u53D6\u672C\u5730\u7F13\u5B58\u7684\u6587\u6863\u6587\u4EF6\uFF09", example: "test1.docx" }, useJwtEncrypt: { required: false, type: () => String, description: "\u4F7F\u7528 JWT \u52A0\u5BC6\u6587\u6863\u53C2\u6570\uFF0C\u9ED8\u8BA4\u4E0D\u52A0\u5BC6\uFF0C\u9700\u8981\u914D\u5408 Onlyoffice \u7684 secret \u914D\u7F6E\u4F7F\u7528\u3002", default: 'n', enum: ['y', 'n'] }, usePlugin: { required: false, type: () => String, description: "\u4F7F\u7528\u63D2\u4EF6\u3002\u9ED8\u8BA4\u4E0D\u8FD4\u56DE\u63D2\u4EF6\u914D\u7F6E", default: 'n', enum: ['y', 'n'] } };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentInfoDto.prototype, "key", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['y', 'n']),
    __metadata("design:type", String)
], DocumentInfoDto.prototype, "useJwtEncrypt", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['y', 'n']),
    __metadata("design:type", String)
], DocumentInfoDto.prototype, "usePlugin", void 0);
exports.DocumentInfoDto = DocumentInfoDto;
//# sourceMappingURL=document.dto.js.map