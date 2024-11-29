import React, { useState, useEffect } from 'react'; 
import './UpdateEvents.css'; 
import { Link, useParams } from 'react-router-dom'; 
import axios from 'axios'; 
import { Toaster, toast } from 'react-hot-toast';

function UpdateEvents() {
  const { id } = useParams(); 
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  
  useEffect(() => {
    const loadEventDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/events/${id}`);
        const eventData = response.data.data;
        setTitle(eventData.title);
        setLocation(eventData.location);
        setDescription(eventData.description);
        setDate(eventData.date);
        setTime(eventData.time);
      } catch (error) {
        toast.error('Failed to load event data');
      }
    };

    loadEventDetail(); 
  }, [id]);

  const updateEvent = async () => {
    try {
      const response = await axios.put(`http://localhost:5001/events/${id}`, { 
        title,
        location,
        description,
        date,
        time
      });

      toast.success(response?.data?.message); 
    } catch (error) {
      const errorMessage = error?.response?.data?.message || 'Error updating event'; 
      toast.error(errorMessage);
    }
  };

  return (
    <div className='background'>
      <div className="row">
        <Link to="/Home">
          <button className="back-to-home-btn">
            <b>Back To Home</b> <i className="fa-solid fa-house"></i>
          </button>
        </Link>
        <h1 className="header-create">Update Event</h1>
      </div>

      <div className='form'>
        {}
        <input 
          type="text" 
          placeholder="Event Title" 
          value={title} 
          className='input'
          onChange={(e) => setTitle(e.target.value)} 
        />

        <input 
          type="text" 
          placeholder="Event Location" 
          value={location} 
          className='input'
          onChange={(e) => setLocation(e.target.value)} 
        />

        <input 
          type="text" 
          placeholder="Event Description" 
          value={description} 
          className='input'
          onChange={(e) => setDescription(e.target.value)} 
        />

        <input 
          type="date" 
          placeholder="Event Date" 
          value={date} 
          className='input'
          onChange={(e) => setDate(e.target.value)} 
        />

        <input 
          type="time" 
          placeholder="Event Time" 
          value={time} 
          className='input'
          onChange={(e) => setTime(e.target.value)} 
        />

        <button className="button" onClick={updateEvent}>
          Update Event
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default UpdateEvents;
