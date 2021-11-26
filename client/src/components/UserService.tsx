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
    async function getData() {
      try {
        const users = await getUsers()
        setUser(users)
      }
      catch(e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  setTimeout(async () => {
    try {
      const users = await getUsers()
      setUser(users)
    }
    catch(e) {
      console.log(e)
    }
  }, 2000)

  return (
    <Fragment>
      <div className="w-100 border m-5 p-3 rounded">
      <h3>User Service DB</h3>
      <div className="d-flex">
      { 
        user.map((x:any) => 
          <span 
            className='badge badge-info p-2 m-1' 
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

export default UserService;