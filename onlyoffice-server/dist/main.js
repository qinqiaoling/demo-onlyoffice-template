"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const response_interceptor_1 = require("./shared/interceptors/response.interceptor");
const logger_interceptor_1 = require("./shared/interceptors/logger.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.setGlobalPrefix(process.env.API_PREFIX);
    app.useGlobalPipes(new common_1.ValidationPipe({
        skipNullProperties: true,
        stopAtFirstError: true,
        transform: true,
    }));
    app.useGlobalInterceptors(new response_interceptor_1.ResponseInterceptor(), new logger_interceptor_1.LoggingInterceptor());
    app.enableVersioning({
        type: common_1.VersioningType.URI,
        defaultVersion: '1',
    });
    const isTest = process.env.NODE_ENV === 'test';
    if (isTest) {
        const options = new swagger_1.DocumentBuilder()
            .setTitle('Demo Onlyoffice 接口文档')
            .setVersion('1.0.0')
            .addTag('Onlyoffice')
            .addTag('Document')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, options);
        swagger_1.SwaggerModule.setup('docs', app, document);
    }
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map