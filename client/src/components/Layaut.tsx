import { useState } from "react";
import FormUser from './FormUser';
import FormProduct from './FormProduct';
import UserService from './UserService';
import Queue from './Queue';

export interface IState {
    queue: {
        jobId:number
        queue:string
        name:string
    }[]
}

const Layaut = () => {

  const [queue, setQueue] = useState<IState['queue']>([]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col col-6 d-flex justify-content-center">
          <FormUser queue={ queue } setQueue={ setQueue }/>
        </div>
        <div className="col col-6 d-flex justify-content-center">
          <FormProduct queue={ queue } setQueue={ setQueue }/>
        </div>
      </div>
      <div className="row">
        <div className="col col-1"></div>
        <div className="col col-10 d-flex justify-content-center">
          <Queue queue={ queue }/>
        </div>
      </div>
      <div className="row">
          <div className="col col-6 d-flex justify-content-center">
              <UserService queue={ queue } setQueue={ setQueue } />
          </div>
      </div>
    </div>
  )
}

export default Layaut;