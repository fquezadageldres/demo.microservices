import { Queue } from 'bullmq';
import dotenv from 'dotenv';
import IORedis from 'ioredis';
dotenv.config();

export default class ApiServiceProvider {
    
    public async create(req:any) {

        const { queue, data } = req;
        const delay = Math.floor(Math.random() * (15000 - 3000)) + 3000;
        const connection = new IORedis(parseInt(process.env.REDIS_PORT), process.env.REDIS_HOST);
        const myQueue = new Queue(queue, { connection });
        const job = await myQueue.add('job', data, { delay:delay });
        return {data:req, jobId:job.id, delay:delay}
    }
}