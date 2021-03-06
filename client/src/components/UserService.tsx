import { Fragment, useEffect, useState } from "react";
import getUsers from "../provider/user.provider";
import { IState as Props } from './Layaut';

interface IProps {
  queue: Props['queue']
  setQueue: React.Dispatch<React.SetStateAction<Props['queue']>>
}

const UserService = ({ queue, setQueue }:IProps) => {

  const [user, setUser] = useState([]);

  useEffect(() => {
    const interval = setInterval( async () => {
      const users = await getUsers();
      setUser(users.users)
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <div className="w-100 border m-5 p-3 rounded">
        <h3>User Service DB</h3>
        <div className="d-flex flex-wrap">
        { 
          user.map((x:any) => 
          <div key={x.jobId}>
            <span 
              className='badge badge-info p-2 m-1' 
            >
              {x.name}
            </span>
          </div>
          )
        }
        </div>
      </div>
    </Fragment>
  )
}

export default UserService;