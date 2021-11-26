import { Fragment } from "react";
import { IState as IProps } from './Layaut';

const Queue = ({ queue }:IProps) => {

  return (
    <Fragment>
      <div className="w-100 border m-5 p-3 rounded">
      <h3>Colas</h3>
      <div className="d-flex">
      { 
        queue.map(x => 
          <span 
            className={x.queue == 'USER' ? 'badge badge-info p-2 m-1' : 'badge badge-secondary p-2 m-1'} 
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

export default Queue;