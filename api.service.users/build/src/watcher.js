"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const bullmq_1 = require("bullmq");
const ioredis_1 = __importDefault(require("ioredis"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const { REDIS_HOST, REDIS_PORT, QUEUE, CONCURRENCY } = process.env;
const connection = new ioredis_1.default(parseInt(REDIS_PORT), REDIS_HOST);
const concurrency = parseInt(CONCURRENCY);
const controllerFile = path_1.default.join(__dirname, 'controllers', 'user.controller.js');
new bullmq_1.Worker(QUEUE, controllerFile, { connection, concurrency });
//# sourceMappingURL=watcher.js.map