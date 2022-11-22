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
exports.OnlyofficeForceSaveDto = exports.OnlyofficeCallbackDto = exports.IHistory = exports.IUser = exports.IActions = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class IActions {
    static _OPENAPI_METADATA_FACTORY() {
        return { type: { required: true, type: () => Number, description: "\u64CD\u4F5C\u7C7B\u578B" }, userid: { required: false, type: () => Object, description: "\u7528\u6237 id" } };
    }
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], IActions.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], IActions.prototype, "userid", void 0);
exports.IActions = IActions;
class IUser {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => Object, description: "\u7528\u6237 id" }, name: { required: false, type: () => String, description: "\u7528\u6237\u540D\uFF0C\u91CC\u9762\u5305\u542B\u4E86\u7EC4\u7EC7\u4FE1\u606F\u548C\u7528\u6237\u540D", example: "\u6280\u672F\u90E8\u00A0\u7A0B\u5E8F\u5458\u672A\u592E" } };
    }
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], IUser.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IUser.prototype, "name", void 0);
exports.IUser = IUser;
class IChange {
    static _OPENAPI_METADATA_FACTORY() {
        return { created: { required: false, type: () => String, description: "\u521B\u5EFA\u65F6\u95F4" }, user: { required: false, type: () => require("./onlyoffice.dto").IUser, description: "\u7528\u6237\u4FE1\u606F" } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IChange.prototype, "created", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", IUser)
], IChange.prototype, "user", void 0);
class IHistory {
    static _OPENAPI_METADATA_FACTORY() {
        return { serverVersion: { required: false, type: () => String, description: "\u5F53\u524D Onlyoffice \u670D\u52A1\u7248\u672C\u53F7" }, changes: { required: false, type: () => [IChange], description: "\u5386\u53F2\u8BB0\u5F55\u4FE1\u606F" } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IHistory.prototype, "serverVersion", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], IHistory.prototype, "changes", void 0);
exports.IHistory = IHistory;
class OnlyofficeCallbackDto {
    constructor() {
        this.actions = null;
        this.changeshistory = null;
        this.history = null;
        this.changesurl = null;
        this.filetype = null;
        this.forcesavetype = null;
        this.status = null;
        this.url = null;
        this.userdata = null;
        this.users = null;
        this.lastsave = null;
        this.token = null;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { actions: { required: false, type: () => [require("./onlyoffice.dto").IActions], description: "\u7528\u6237\u4E0E\u6587\u6863\u7684\u4EA4\u4E92\u72B6\u6001\u30020\uFF1A\u7528\u6237\u65AD\u5F00\u4E0E\u6587\u6863\u5171\u540C\u7F16\u8F91\u7684\u8FDE\u63A5\uFF1B1\uFF1A\u65B0\u7528\u6237\u8FDE\u63A5\u5230\u6587\u6863\u5171\u540C\u7F16\u8F91\uFF1B2\uFF1A\u7528\u6237\u5355\u51FB\u5F3A\u5236\u4FDD\u5B58\u6309\u94AE", default: null }, changeshistory: { required: false, type: () => require("./onlyoffice.dto").IHistory, description: "\u5B57\u6BB5\u5DF2\u5728 4.2 \u540E\u7248\u672C\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 history \u4EE3\u66FF", default: null }, history: { required: false, type: () => require("./onlyoffice.dto").IHistory, description: "\u6587\u6863\u53D8\u66F4\u7684\u5386\u53F2\u8BB0\u5F55\uFF0C\u4EC5\u5F53 status \u7B49\u4E8E 2 \u6216\u8005 3 \u65F6\u8BE5\u5B57\u6BB5\u624D\u6709\u503C\u3002\u5176\u4E2D\u7684 serverVersion \u5B57\u6BB5\u4E5F\u662F refreshHistory \u65B9\u6CD5\u7684\u5165\u53C2", default: null }, changesurl: { required: false, type: () => String, description: "\u6587\u6863\u7F16\u8F91\u7684\u5143\u6570\u636E\u4FE1\u606F\uFF0C\u7528\u6765\u8DDF\u8E2A\u663E\u793A\u6587\u6863\u66F4\u6539\u8BB0\u5F55\uFF0C\u4EC5\u5F53 status \u7B49\u4E8E 2 \u6216\u8005 2 \u65F6\u8BE5\u5B57\u6BB5\u624D\u6709\u503C\u3002\u8BE5\u5B57\u6BB5\u4E5F\u662F setHistoryData\uFF08\u663E\u793A\u4E0E\u7279\u5B9A\u6587\u6863\u7248\u672C\u5BF9\u5E94\u7684\u66F4\u6539\uFF0C\u7C7B\u4F3C Git \u5386\u53F2\u8BB0\u5F55\uFF09\u65B9\u6CD5\u7684\u5165\u53C2", default: null }, filetype: { required: false, type: () => String, description: "url \u5B57\u6BB5\u4E0B\u8F7D\u7684\u6587\u6863\u6269\u5C55\u540D\uFF0C\u6587\u4EF6\u7C7B\u578B\u9ED8\u8BA4\u4E3A OOXML \u683C\u5F0F\uFF0C\u5982\u679C\u542F\u7528\u4E86 assemblyFormatAsOrigin\uFF08https://api.onlyoffice.com/editors/save#assemblyFormatAsOrigin\uFF09 \u670D\u52A1\u5668\u8BBE\u7F6E\u5219\u6587\u4EF6\u4EE5\u539F\u59CB\u683C\u5F0F\u4FDD\u5B58", default: null }, forcesavetype: { required: false, type: () => Number, description: "\u6587\u6863\u5F3A\u5236\u4FDD\u5B58\u7C7B\u578B\u30020\uFF1A\u5BF9\u547D\u4EE4\u670D\u52A1\uFF08https://api.onlyoffice.com/editors/command/forcesave\uFF09\u6267\u884C\u5F3A\u5236\u4FDD\u5B58\uFF1B1\uFF1A\u6BCF\u6B21\u4FDD\u5B58\u5B8C\u6210\u65F6\u90FD\u4F1A\u6267\u884C\u5F3A\u5236\u4FDD\u5B58\u8BF7\u6C42\uFF0C\u4EC5\u8BBE\u7F6E forcesave \u7B49\u4E8E true \u65F6\u751F\u6548\uFF1B2\uFF1A\u5F3A\u5236\u4FDD\u5B58\u8BF7\u6C42\u7531\u8BA1\u65F6\u5668\u4F7F\u7528\u670D\u52A1\u5668\u4E2D\u7684\u8BBE\u7F6E\u6267\u884C\u3002\u8BE5\u5B57\u6BB5\u4EC5 status \u7B49\u4E8E 7 \u6216\u8005 7 \u65F6\u624D\u6709\u503C", default: null }, key: { required: true, type: () => String, description: "\u6587\u6863\u6807\u8BC6\u7B26\uFF0C\u7C7B\u4F3C id\uFF0C\u5728 Onlyoffice \u670D\u52A1\u5185\u90E8\u552F\u4E00" }, status: { required: false, type: () => Number, description: "\u6587\u6863\u72B6\u6001\u30021\uFF1A\u6587\u6863\u7F16\u8F91\u4E2D\uFF1B2\uFF1A\u6587\u6863\u5DF2\u51C6\u5907\u597D\u4FDD\u5B58\uFF1B3\uFF1A\u6587\u6863\u4FDD\u5B58\u51FA\u9519\uFF1B4\uFF1A\u6587\u6863\u6CA1\u6709\u53D8\u5316\u65E0\u9700\u4FDD\u5B58\uFF1B6\uFF1A\u6B63\u5728\u7F16\u8F91\u6587\u6863\uFF0C\u4F46\u4FDD\u5B58\u4E86\u5F53\u524D\u6587\u6863\u72B6\u6001\uFF1B7\uFF1A\u5F3A\u5236\u4FDD\u5B58\u6587\u6863\u51FA\u9519", default: null, enum: [1, 2, 3, 4, 6, 7] }, url: { required: false, type: () => String, description: "\u5DF2\u7F16\u8F91\u6587\u6863\u7684\u94FE\u63A5\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5B83\u4E0B\u8F7D\u5230\u6700\u65B0\u7684\u6587\u6863\uFF0C\u4EC5\u5F53 status \u7B49\u4E8E 2\u30013\u30016 \u6216 7 \u65F6\u8BE5\u5B57\u6BB5\u624D\u6709\u503C", default: null }, userdata: { required: false, type: () => Object, description: "\u81EA\u5B9A\u4E49\u53C2\u6570\uFF0C\u5BF9\u5E94\u6307\u4EE4\u670D\u52A1\u7684 userdata \u5B57\u6BB5", default: null }, users: { required: false, type: () => [String], description: "\u6253\u5F00\u6587\u6863\u8FDB\u884C\u7F16\u8F91\u7684\u7528\u6237\u6807\u8BC6\u5217\u8868\uFF0C\u5F53\u6587\u6863\u88AB\u4FEE\u6539\u65F6\uFF0C\u8BE5\u5B57\u6BB5\u5C06\u8FD4\u56DE\u6700\u540E\u7F16\u8F91\u6587\u6863\u7684\u7528\u6237\u6807\u8BC6\u7B26\uFF0C\u5F53 status \u5B57\u6BB5\u7B49\u4E8E 2 \u6216\u8005 6 \u65F6\u6709\u503C", default: null }, lastsave: { required: false, type: () => String, description: "\u6700\u8FD1\u4FDD\u5B58\u65F6\u95F4", default: null }, token: { required: false, type: () => String, description: "\u52A0\u5BC6\u4EE4\u724C", default: null } };
    }
}
__decorate([
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], OnlyofficeCallbackDto.prototype, "actions", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", IHistory)
], OnlyofficeCallbackDto.prototype, "changeshistory", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", IHistory)
], OnlyofficeCallbackDto.prototype, "history", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OnlyofficeCallbackDto.prototype, "changesurl", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OnlyofficeCallbackDto.prototype, "filetype", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], OnlyofficeCallbackDto.prototype, "forcesavetype", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OnlyofficeCallbackDto.prototype, "key", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsIn)([1, 2, 3, 4, 6, 7]),
    __metadata("design:type", Number)
], OnlyofficeCallbackDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OnlyofficeCallbackDto.prototype, "url", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], OnlyofficeCallbackDto.prototype, "userdata", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], OnlyofficeCallbackDto.prototype, "users", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OnlyofficeCallbackDto.prototype, "lastsave", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OnlyofficeCallbackDto.prototype, "token", void 0);
exports.OnlyofficeCallbackDto = OnlyofficeCallbackDto;
class OnlyofficeForceSaveDto {
    constructor() {
        this.userdata = null;
        this.useJwtEncrypt = 'n';
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { key: { required: true, type: () => String, description: "\u6587\u6863\u6807\u8BC6\u7B26" }, userdata: { required: false, type: () => String, description: "\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u6570\u636E", default: null }, useJwtEncrypt: { required: false, type: () => String, description: "\u4F7F\u7528 JWT \u52A0\u5BC6\u6587\u6863\u53C2\u6570\uFF0C\u9ED8\u8BA4\u4E0D\u52A0\u5BC6\uFF0C\u9700\u8981\u914D\u5408 Onlyoffice \u7684 secret \u914D\u7F6E\u4F7F\u7528\u3002", default: 'n', enum: ['y', 'n'] } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OnlyofficeForceSaveDto.prototype, "key", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OnlyofficeForceSaveDto.prototype, "userdata", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['y', 'n']),
    __metadata("design:type", String)
], OnlyofficeForceSaveDto.prototype, "useJwtEncrypt", void 0);
exports.OnlyofficeForceSaveDto = OnlyofficeForceSaveDto;
//# sourceMappingURL=onlyoffice.dto.js.map