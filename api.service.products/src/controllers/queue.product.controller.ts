import { Job } from 'bullmq';
import ProductProvider from '../providers/product.provider';

module.exports = async (job:Job<any>) => {

    try {
        const productProvider = new ProductProvider();
        const jobId:number = parseInt(job.id);
        const name:string = job.data.name;
        await productProvider.createProduct({ jobId, name });
    } catch (error) {
        let err: Error = error as any
        console.log(err)
    }
}