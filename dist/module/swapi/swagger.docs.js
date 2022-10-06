"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocs = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerOtps = {
    swaggerDefinition: {
        info: {
            title: 'Swapi APIs',
            description: 'Front end API Swapi',
            version: '1.0.0',
            contact: {
                name: 'Mina Hany',
                email: 'mina.hany460@gmail.com'
            },
            servers: [`http://localhost:${process.env.PORT}`]
        }
    },
    apis: ['./routes/swapi.routes.ts']
};
exports.swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOtps);
