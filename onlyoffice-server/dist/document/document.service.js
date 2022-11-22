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
exports.DocumentService = void 0;
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const onlyoffice_service_1 = require("../onlyoffice/onlyoffice.service");
let DocumentService = class DocumentService {
    constructor(config, onlyofficeService) {
        this.config = config;
        this.onlyofficeService = onlyofficeService;
    }
    async forceSave(body) {
        const { id: userdata, key, useJwtEncrypt } = body;
        const data = await this.onlyofficeService.forceSave({
            key,
            userdata,
            useJwtEncrypt,
        });
        if (data.error === 0) {
            return null;
        }
        throw new common_1.HttpException(data, common_1.HttpStatus.OK);
    }
    async documentInfo(query) {
        const editorConfig = this.onlyofficeService.editorDefaultConfig();
        editorConfig.document = Object.assign(Object.assign({}, editorConfig.document), { fileType: 'docx', key: query.key, url: `${this.config.get('domain')}/static/${query.key}`, title: '测试文档.docx' });
        editorConfig.editorConfig.user = {
            group: '技术部',
            id: 'wytxer',
            name: '程序员未央',
        };
        if (query.usePlugin === 'y') {
            editorConfig.editorConfig.plugins = {
                autostart: [],
                pluginsData: [
                    `${this.config.get('domain')}/static/plugins/plugin-hello/config.json`,
                ],
            };
        }
        if (query.useJwtEncrypt === 'y') {
            this.onlyofficeService.signJwt(editorConfig);
        }
        return {
            id: 1,
            remarks: '业务字段',
            editorConfig,
        };
    }
    async excelInfo(query) {
        const editorConfig = this.onlyofficeService.editorDefaultConfig();
        editorConfig.document = Object.assign(Object.assign({}, editorConfig.document), { fileType: 'xlsx', key: query.key, url: `${this.config.get('domain')}/static/${query.key}`, title: '测试表格.xlsx' });
        editorConfig.width = '100%';
        editorConfig.documentType = 'cell';
        editorConfig.editorConfig.user = {
            group: '技术部',
            id: 'wytxer',
            name: '程序员未央',
        };
        if (query.useJwtEncrypt === 'y') {
            this.onlyofficeService.signJwt(editorConfig);
        }
        return {
            id: 1,
            remarks: '业务字段',
            editorConfig,
        };
    }
};
DocumentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        onlyoffice_service_1.OnlyofficeService])
], DocumentService);
exports.DocumentService = DocumentService;
//# sourceMappingURL=document.service.js.map