import dotenv from 'dotenv';
import { Worker } from 'bullmq';
import IORedis from 'ioredis';
import path from "path";
dotenv.config();

const { REDIS_HOST, REDIS_PORT, QUEUE, CONCURRENCY } = process.env;

const connection = new IORedis(parseInt(REDIS_PORT), REDIS_HOST);
const concurrency = parseInt(CONCURRENCY);
const controllerFile = path.join(__dirname, 'controllers', 'user.controller.js');

new Worker<any>(QUEUE, controllerFile, { connection, concurrency });

