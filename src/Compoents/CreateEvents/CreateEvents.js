import React, { useState } from 'react';
import './CreateEvents.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

function CreateEvents() {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const createEvent = async () => {
    try {
      const response = await axios.post("https://event-management-backend-nm9s.onrender.com/events", {
        id: id,
        title: title,
        location: location,
        description: description,
        date: date,
        time: time,
      });

      setId("");
      setTitle("");
      setLocation("");
      setDate("");
      setTime("");
      setDescription("");
      toast.success(response?.data?.message);
    } catch (error1) {
      const errorMessage = (error1?.response?.data?.message );
         toast.error(errorMessage)
    }
  };

  return (
    <div className='background'>
      <div className="row">
        <Link to="/">
          <button className="back-to-home-btn">
            <b>Back To Home</b> <i className="fa-solid fa-house"></i>
          </button>
        </Link>
        <h1 className="header-create">Create Events</h1>
      </div>

      <div className='form'>
      
        <input 
          type="text" 
          placeholder="Event Id" 
          value={id} 
          className='input'
          onChange={(e) => setId(e.target.value)} 
        />

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

        <button className="button" onClick={() => {
          createEvent();
        }}>
          Add Event
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default CreateEvents;
