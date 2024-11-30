import React, { useState, useEffect } from 'react';
import { useParams, Link} from 'react-router-dom';
import './DetailEvents.css';
import axios from 'axios';


function DetailEvents() {

  const { id } = useParams(); 
  const [event, setEvent] = useState({}); 
  const loadStudentDetail =async(roll)=>{
    const response =await axios.get(`https://event-management-backend-nm9s.onrender.com/events/${id}`)
    setEvent(response.data.data)
}


useEffect(()=>{
    loadStudentDetail(id)
},[id])

  return (
    <div className="background1">
     <div className="row">
        <Link to="/view_events">
          <button className="back-to-home-btn">
            <b>Back To View Events</b> <i className="fa-solid fa-house"></i>
          </button>
        </Link>
        <h1 className="header-view">View Events</h1>
      </div>
      {event ? (
        <div >
          <h2>Event: {event.id}</h2>
          <p className='events-p'><strong>Title:</strong> {event.title}</p>
          <p className='events-p'><strong>Location:</strong> {event.location}</p>
          <p className='events-p'><strong>Description:</strong> {event.description}</p>
          <p className='events-p'><strong>Date:</strong> {event.date}</p>
          <p className='events-p'><strong>Time:</strong> {event.time}</p>
        </div>
      ) :(
       < p>Loading event details...</p>
      )}
      
      
    </div>
  );
}

export default DetailEvents;
