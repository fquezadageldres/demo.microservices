import { Job } from 'bullmq';
import UserFacade from '../facade/user.facade';

module.exports = async (job:Job<any>) => {

    try {
        const userFacade = new UserFacade();
        const jobId:number = parseInt(job.id);
        setTimeout( async () => {
            await userFacade.createUser({ name:job.data.name, jobId:jobId });
        }, job.data.delay)
    } catch (error) {
        let err: Error = error as any
        console.log(err)
    }
}