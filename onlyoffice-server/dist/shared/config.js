"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
exports.default = () => ({
    isTest: process.env.NODE_ENV === 'test',
    isOnline: process.env.NODE_ENV === 'online',
    port: process.env.PORT,
    apiPrefix: process.env.API_PREFIX,
    domain: process.env.DOMAIN,
    staticPath: (0, path_1.join)(process.cwd(), '/static'),
    onlyoffice: {
        secret: process.env.ONLYOFFICE_SECRET,
        domain: process.env.ONLYOFFICE_DOMAIN,
        commandUrl: process.env.ONLYOFFICE_COMMAND_URL,
        callback: process.env.ONLYOFFICE_CALLBACK,
    },
});
//# sourceMappingURL=config.js.map