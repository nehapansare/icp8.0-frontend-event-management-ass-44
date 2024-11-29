import React from 'react';
import './Home.css';
import cards from '../../Config/HomeCard';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="background">
      <h1 className="header-home">Event Management</h1>

      <div className="card-row">
        {cards.map((card, index) => (
          <div className="card-container" key={index}>
            <div className="card-icon">{card.icon}</div>
            <h2 className="card-container-h2">{card.title}</h2>
            <p className="card-container-p">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="button-row">
          <Link to="/view_events">
              <button className="home-btn">
                <b>View Events</b>
              </button>
          </Link>
          <Link to="/create_events">
              <button className="home-btn">
                <b>Create Events</b>
              </button>
          </Link>
        </div>

    </div>
  );
}

export default App;
