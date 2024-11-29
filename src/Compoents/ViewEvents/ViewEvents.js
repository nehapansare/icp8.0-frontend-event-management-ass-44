import React, { useState, useEffect } from 'react';
import './ViewEvents.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

function ViewEvents() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  // Fetch events on component mount
  useEffect(() => {
    const loadEvents = async () => {
      const response = await axios.get("http://localhost:5001/events");
      setEvents(response.data.data); // Assuming response.data.data holds the events
    };

    loadEvents();
  }, []);

  // Handle delete event
  const deleteEvent = async (id) => {
    await axios.delete(`http://localhost:5001/events/${id}`);
    window.location.reload();
  };

  return (
    <div className="background">
      <div className="row">
        <Link to="/Home">
          <button className="back-to-home-btn">
            <b>Back To Home</b> <i className="fa-solid fa-house"></i>
          </button>
        </Link>
        <h1 className="header-view">View Events</h1>
      </div>

      {events.length > 0 ? (
        events.map((event) => (
          <div key={event.id} className="event-card" onClick={() => navigate(`/detail_events/${event.id}`)}>
            <h3>{event.title}</h3>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Date:</strong> {event.date}</p>

            <button onClick={(e) => {
              e.stopPropagation(); // Prevents the event from propagating and navigating
              deleteEvent(event.id);
            }} className="btn-delete">
              Delete Event
            </button>

            <button onClick={(e) => {
              e.stopPropagation(); // Prevents the event from propagating
              navigate(`/update_events/${event.id}`);
            }} className="btn-edit">
              Edit Event
            </button>
          </div>
        ))
      ) : (
        <p>No events found.</p>
      )}
      <Toaster />
    </div>
  );
}

export default ViewEvents;
