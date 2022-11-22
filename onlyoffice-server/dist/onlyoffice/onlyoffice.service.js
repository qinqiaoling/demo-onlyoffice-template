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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var OnlyofficeService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlyofficeService = void 0;
const axios_1 = require("@nestjs/axios");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const fs_1 = require("fs");
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const onlyoffice_entity_1 = require("./onlyoffice.entity");
let OnlyofficeService = OnlyofficeService_1 = class OnlyofficeService {
    constructor(request, config, jwt) {
        this.request = request;
        this.config = config;
        this.jwt = jwt;
        this.logger = new common_1.Logger(OnlyofficeService_1.name);
    }
    async callback(body) {
        const { url, status } = body;
        if (status === 6) {
            try {
                const file = await this.request.axiosRef.get(url, {
                    responseType: 'stream',
                });
                const stream = (0, fs_1.createWriteStream)((0, path_1.join)(this.config.get('staticPath'), body.key));
                file.data.pipe(stream);
            }
            catch (error) {
                this.logger.error(error);
                throw new common_1.HttpException({ error: 7 }, common_1.HttpStatus.OK);
            }
        }
        else if (status === 7) {
            throw new common_1.HttpException({ error: status }, common_1.HttpStatus.OK);
        }
        throw new common_1.HttpException({ error: 0 }, common_1.HttpStatus.OK);
    }
    async forceSave(body) {
        const { key, userdata, useJwtEncrypt } = body;
        let newBody = {
            c: 'forcesave',
            key,
            userdata,
        };
        if (useJwtEncrypt === 'y') {
            newBody = {
                token: this.jwt.sign(newBody, {
                    secret: this.config.get('onlyoffice.secret'),
                }),
            };
        }
        const saveState = await this.request.axiosRef
            .post(this.config.get('onlyoffice.commandUrl'), newBody)
            .then((res) => res.data);
        const data = {
            error: saveState.error,
            code: 602,
        };
        if (saveState.error === 0) {
            data.code = 0;
        }
        else if (saveState.error === 4) {
            data.message = '文档未改变无需保存';
        }
        else {
            data.message = '文档保存失败';
        }
        return data;
    }
    editorDefaultConfig() {
        const defaultConfig = __rest(new onlyoffice_entity_1.OnlyofficeEditorConfig(), []);
        return defaultConfig;
    }
    signJwt(editorConfig) {
        editorConfig.token = this.jwt.sign(editorConfig, {
            secret: this.config.get('onlyoffice.secret'),
        });
        return editorConfig;
    }
};
OnlyofficeService = OnlyofficeService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService,
        jwt_1.JwtService])
], OnlyofficeService);
exports.OnlyofficeService = OnlyofficeService;
//# sourceMappingURL=onlyoffice.service.js.map