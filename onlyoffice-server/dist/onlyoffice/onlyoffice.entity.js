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
exports.OnlyofficeEditorConfig = exports.OnlyofficeForceSave = exports.OnlyofficeCallback = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class IFeatures {
    constructor() {
        this.spellcheck = false;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { spellcheck: { required: false, type: () => Boolean, description: "\u662F\u5426\u542F\u7528\u62FC\u5199\u68C0\u67E5", default: false } };
    }
}
class ICustomization {
    constructor() {
        this.forcesave = true;
        this.features = new IFeatures();
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { forcesave: { required: false, type: () => Boolean, description: "\u5F3A\u5236\u4FDD\u5B58", default: true }, features: { required: false, type: () => IFeatures, description: "\u81EA\u5B9A\u4E49\u53C2\u6570", default: new IFeatures() } };
    }
}
class IPlugins {
    constructor() {
        this.autostart = [];
        this.pluginsData = [];
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { autostart: { required: true, type: () => [String], description: "\u9700\u8981\u81EA\u52A8\u52A0\u8F7D\u7684\u63D2\u4EF6\u5217\u8868", default: [] }, pluginsData: { required: true, type: () => [String], description: "\u81EA\u5B9A\u4E49\u7684\u63D2\u4EF6\u5217\u8868", default: [] } };
    }
}
class IPermission {
    constructor() {
        this.comment = false;
        this.download = true;
        this.edit = true;
        this.print = true;
        this.review = true;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { comment: { required: false, type: () => Boolean, description: "\u662F\u5426\u542F\u7528\u8BC4\u8BBA", default: false }, download: { required: false, type: () => Boolean, description: "\u662F\u5426\u542F\u7528\u4E0B\u8F7D", default: true }, edit: { required: false, type: () => Boolean, description: "\u662F\u5426\u542F\u7528\u7F16\u8F91", default: true }, print: { required: false, type: () => Boolean, description: "\u662F\u5426\u542F\u7528\u5BFC\u51FA", default: true }, review: { required: false, type: () => Boolean, description: "\u662F\u5426\u542F\u7528\u9884\u89C8", default: true } };
    }
}
class IDocument {
    constructor() {
        this.fileType = 'docx';
        this.permissions = new IPermission();
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { fileType: { required: true, type: () => Object, description: "\u6587\u4EF6\u7C7B\u578B", default: 'docx' }, key: { required: true, type: () => String, description: "\u6587\u6863\u6807\u8BC6\u7B26" }, url: { required: true, type: () => String, description: "\u6587\u6863\u5730\u5740\uFF0C\u7EDD\u5BF9\u8DEF\u5F84" }, title: { required: true, type: () => String, description: "\u6587\u6863\u6807\u9898" }, permissions: { required: true, type: () => IPermission, description: "\u6587\u6863\u6743\u9650\u914D\u7F6E", default: new IPermission() } };
    }
}
class IEditorConfig {
    constructor() {
        this.callbackUrl = process.env.ONLYOFFICE_CALLBACK;
        this.lang = 'zh-CN';
        this.user = {};
        this.templates = [];
        this.customization = new ICustomization();
        this.plugins = new IPlugins();
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { callbackUrl: { required: true, type: () => String, description: "\u56DE\u8C03\u5730\u5740", default: process.env.ONLYOFFICE_CALLBACK }, lang: { required: false, type: () => String, description: "\u8BED\u8A00", default: 'zh-CN' }, user: { required: true, type: () => Object, description: "\u7528\u6237\u4FE1\u606F", default: {} }, templates: { required: false, type: () => [Object], description: "\u6A21\u677F\u5217\u8868", default: [] }, customization: { required: false, type: () => ICustomization, description: "\u81EA\u5B9A\u4E49\u914D\u7F6E\u3002\u5B57\u6BB5\u76F8\u5173\u914D\u7F6E\u8BE6\u89E3\uFF1Ahttps://api.onlyoffice.com/editors/config/editor", default: new ICustomization() }, plugins: { required: false, type: () => IPlugins, description: "\u63D2\u4EF6\u5217\u8868", default: new IPlugins() } };
    }
}
class OnlyofficeCallback {
    static _OPENAPI_METADATA_FACTORY() {
        return { error: { required: true, type: () => Number, description: "\u8FD4\u56DE 0 \u8868\u793A\u6210\u529F\uFF0C\u5426\u5219\u8868\u793A\u5931\u8D25" } };
    }
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], OnlyofficeCallback.prototype, "error", void 0);
exports.OnlyofficeCallback = OnlyofficeCallback;
class OnlyofficeForceSave {
    static _OPENAPI_METADATA_FACTORY() {
        return { code: { required: true, type: () => Number, description: "\u72B6\u6001\u7801" }, error: { required: true, type: () => Number, description: "\u72B6\u6001\u7801" }, message: { required: false, type: () => String, description: "\u6D88\u606F" } };
    }
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], OnlyofficeForceSave.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], OnlyofficeForceSave.prototype, "error", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OnlyofficeForceSave.prototype, "message", void 0);
exports.OnlyofficeForceSave = OnlyofficeForceSave;
class OnlyofficeEditorConfig {
    constructor() {
        this.width = 1200;
        this.height = 800;
        this.documentType = 'word';
        this.document = new IDocument();
        this.editorConfig = new IEditorConfig();
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { width: { required: false, type: () => Object, description: "\u7F16\u8F91\u5668\u5BBD\u5EA6", default: 1200 }, height: { required: false, type: () => Object, description: "\u7F16\u8F91\u5668\u9AD8\u5EA6", default: 800 }, documentType: { required: true, type: () => Object, description: "\u6587\u6863\u7C7B\u578B\u3002word\uFF1A\u6587\u6863\uFF0Ccell\uFF1A\u8868\u683C\uFF0Cslide\uFF1APPT", default: 'word', enum: ['word', 'cell', 'slide'] }, document: { required: true, type: () => IDocument, description: "\u6587\u6863\u914D\u7F6E", default: new IDocument() }, editorConfig: { required: true, type: () => IEditorConfig, description: "\u7F16\u8F91\u5668\u914D\u7F6E", default: new IEditorConfig() }, token: { required: false, type: () => String, description: "\u7F16\u8F91\u5668\u52A0\u5BC6\u4EE4\u724C\uFF0C\u5F00\u542F\u52A0\u5BC6\u65F6\u6709\u503C" } };
    }
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], OnlyofficeEditorConfig.prototype, "width", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], OnlyofficeEditorConfig.prototype, "height", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['word', 'cell', 'slide']),
    __metadata("design:type", Object)
], OnlyofficeEditorConfig.prototype, "documentType", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", IDocument)
], OnlyofficeEditorConfig.prototype, "document", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", IEditorConfig)
], OnlyofficeEditorConfig.prototype, "editorConfig", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OnlyofficeEditorConfig.prototype, "token", void 0);
exports.OnlyofficeEditorConfig = OnlyofficeEditorConfig;
//# sourceMappingURL=onlyoffice.entity.js.map