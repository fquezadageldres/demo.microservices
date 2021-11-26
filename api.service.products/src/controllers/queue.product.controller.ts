import { Job } from 'bullmq';
import ProductFacade from '../facade/product.facade';

module.exports = async (job:Job<any>) => {

    try {
        const productProvider = new ProductFacade();
        const jobId:number = parseInt(job.id);
        setTimeout( async () => {
            await productProvider.createProduct({ name:job.data.name, jobId:jobId });
        }, job.data.delay)
    } catch (error) {
        let err: Error = error as any
        console.log(err)
    }
}