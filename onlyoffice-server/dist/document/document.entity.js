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
exports.DocumentForceSave = exports.DocumentInfo = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const onlyoffice_entity_1 = require("../onlyoffice/onlyoffice.entity");
class DocumentInfo {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => Number, description: "\u4E1A\u52A1 id" }, remarks: { required: false, type: () => String, description: "\u5907\u6CE8" }, editorConfig: { required: true, type: () => require("../onlyoffice/onlyoffice.entity").OnlyofficeEditorConfig, description: "\u7F16\u8F91\u5668\u914D\u7F6E" } };
    }
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DocumentInfo.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", String)
], DocumentInfo.prototype, "remarks", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", onlyoffice_entity_1.OnlyofficeEditorConfig)
], DocumentInfo.prototype, "editorConfig", void 0);
exports.DocumentInfo = DocumentInfo;
class DocumentForceSave {
    static _OPENAPI_METADATA_FACTORY() {
        return { code: { required: true, type: () => Number, description: "\u72B6\u6001\u7801" }, message: { required: false, type: () => String, description: "\u6D88\u606F" } };
    }
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DocumentForceSave.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentForceSave.prototype, "message", void 0);
exports.DocumentForceSave = DocumentForceSave;
//# sourceMappingURL=document.entity.js.map