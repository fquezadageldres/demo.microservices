import { Job } from 'bullmq';
import UserProvider from '../providers/user.provider';

module.exports = async (job:Job<any>) => {

    try {
        console.log(job.data)
        const userProvider = new UserProvider();
        const jobId:number = parseInt(job.id);
        await userProvider.createUser({ ...job.data, jobId:jobId });
    } catch (error) {
        let err: Error = error as any
        console.log(err)
    }
}