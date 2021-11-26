import { Fragment, useState } from "react";
import createElement from '../provider/apiGateway.provider';
import { IState as Props } from './Layaut';

interface IProps {
  queue: Props['queue']
  setQueue: React.Dispatch<React.SetStateAction<Props['queue']>>
}

const FormProduct = ({ queue, setQueue }:IProps) => {

  const [product, setProduct] = useState({ name:'' });

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [event.target.name] : event.target.value
    })
  }

  const onSubmit = async (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    setTimeout( async function() {
      const newProduct = await createElement('PRODUCT', product)
      console.log(newProduct)
      setQueue([ ...queue, {jobId:newProduct.jobId, queue:newProduct.data.queue, name:newProduct.data.data.name}])
    }, 1000)
  }

  return (
    <Fragment>
      <div className="border w-50 p-3 rounded">
      <h3>Productos</h3>
      <form onSubmit={onSubmit}>
        <input 
          className="form-control my-2" 
          type="text" 
          placeholder="Nombre del producto"
          name="name"
          onChange={handleInputChange}
        />
        <button 
          className="btn btn-block btn-secondary my-2" 
          type="submit"
        >
          Agregar productos
        </button>
      </form>
      </div>
    </Fragment>
  )
}

export default FormProduct;