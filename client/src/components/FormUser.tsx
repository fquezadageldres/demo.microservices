import React, { useState, Fragment } from "react";
import createElement from "../provider/apiGateway.provider";
import { IState as Props } from './Layaut'

interface IProps {
  queue: Props['queue']
  setQueue: React.Dispatch<React.SetStateAction<Props['queue']>>
}

const FormUser = ({ setQueue, queue }:IProps ) => {

  const [user, setUser] = useState({});

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name] : event.target.value,
      delay: Math.floor(Math.random() * (15000 - 5000) ) + 5000
    })
  }

  const onSubmit = async (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    setTimeout( async function() {
      const newUser = await createElement('USER', user)
      setQueue([ ...queue, {jobId:newUser.jobId, queue:newUser.data.queue, name:newUser.data.data.name}])
    }, 1000)
  }

  return (
    <Fragment>
      <div className="border w-50 p-3 rounded">
      <h3>Usuarios</h3>
      <form onSubmit={onSubmit}>
        <input 
          className="form-control my-2" 
          type="text" 
          name="name"
          placeholder="Nombre de usuario"
          onChange={handleInputChange}
        />
        <button 
          className="btn btn-info btn-block" 
          type="submit"
        >
          Crear usuario
        </button>
      </form>
      </div>
    </Fragment>
  )
}

export default FormUser;