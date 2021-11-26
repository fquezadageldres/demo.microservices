import { Queue } from 'bullmq';
import dotenv from 'dotenv';
import IORedis from 'ioredis';
dotenv.config();

export default class ApiServiceProvider {
    
    public async create(req:any) {

        const { queue, data } = req;
        const connection = new IORedis(parseInt(process.env.REDIS_PORT), process.env.REDIS_HOST);
        const myQueue = new Queue(queue, { connection });
        const job = await myQueue.add('job', data);
        return {data:req, jobId:job.id, delay:data.delay}
    }
}