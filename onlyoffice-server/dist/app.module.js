"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const config_2 = require("./shared/config");
const shared_module_1 = require("./shared/shared.module");
const app_controller_1 = require("./app.controller");
const onlyoffice_module_1 = require("./onlyoffice/onlyoffice.module");
const document_module_1 = require("./document/document.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                expandVariables: true,
                load: [config_2.default],
            }),
            serve_static_1.ServeStaticModule.forRoot({
                serveRoot: '/static',
                rootPath: (0, path_1.join)(__dirname, '..', 'static'),
            }),
            shared_module_1.SharedModule,
            onlyoffice_module_1.OnlyofficeModule,
            document_module_1.DocumentModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map