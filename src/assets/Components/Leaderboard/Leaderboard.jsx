import React, { useState } from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  const [myinput, setinput] = useState(0);

  const handleUpdate = () => {
    setinput(myinput + 1);
  };

  const handleChange = (e) => {
    setinput(Number(e.target.value));
  };

  return (
    <div className='Leaderboardinput'>
      <input 
        type="number" 
        value={myinput} 
        onChange={handleChange}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default Leaderboard;
