import React, { useState } from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const navigate=useNavigate();
  const [roomCode, setRoomCode] = useState("");
  const haandleFormSubmit =(e)=>{
    e.preventDefault();
   navigate(`/room/${roomCode}`);
  }

  return (
    <div className="home-page">
      <div className="form-container">
        <h1 className="form-title">Enter Room Code</h1>
        <form onSubmit={haandleFormSubmit}>
          <input
            type="text"
            required
            placeholder="Enter Room Code"
            className="input-field"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
          />
          <button type="submit" className="submit-btn" >Enter Room</button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
