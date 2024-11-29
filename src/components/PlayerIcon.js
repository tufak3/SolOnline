import React from 'react';
import './PlayerIcon.css';

const PlayerIcon = ({ x, y, image }) => {
  const styles = {
    position: 'absolute',
    left: `${x}px`,
    top: `${y}px`,
  };

  return (
    <div style={styles}>
      <img
        src={`${process.env.PUBLIC_URL}/players/${image}`}
        alt="Player"
        style={{ width: '85px', height: '85px' }}
      />
    </div>
  );
};

export default PlayerIcon;
