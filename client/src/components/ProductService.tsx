import { Fragment, useEffect, useState } from "react";
import getProducts from "../provider/product.provider";
import { IState as Props } from './Layaut';

interface IProps {
  queue: Props['queue']
  setQueue: React.Dispatch<React.SetStateAction<Props['queue']>>
}

const ProductService = ({ queue, setQueue }:IProps) => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const interval = setInterval( async () => {
      const { products } = await getProducts();
      setProduct(products)
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <div className="w-100 border m-5 p-3 rounded">
        <h3>Product Service DB</h3>
        <div className="d-flex flex-wrap">
        { 
          product.map((x:any) => 
            <span 
              className='badge badge-secondary p-2 m-1' 
              key={x.jobId}
            >
              {x.name}
            </span>
          )
        }
        </div>
      </div>
    </Fragment>
  )
}

export default ProductService;