import React,{useState,useEffect} from 'react'
import {getScheduled} from "../api/Api";
import ScheduledList from './ScheduledList'

const News = () => {
  const [Schedul, setSchedul] = useState([]);
    useEffect(() => {
       getScheduled()
       .then((data)=>setSchedul(data.data))
       .catch((error)=>console.log("ERROR:",error)); 
      }, []);
    return (
        <div className="Scheduled">
             <h4>Scheduled Matches</h4>
             {Schedul.map((sch) => (
              <ScheduledList sch={sch}/>
            ))}
        </div>
    )
}

export default News
