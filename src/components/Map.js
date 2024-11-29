import React from 'react';
import PlayerIcon from './PlayerIcon';
import { useTeams } from '../context/TeamsContext';
import './Map.css';

const Map = () => {
  const { teams } = useTeams();

  return (
    <div className="map-container">
      {Object.keys(teams).map((team) =>
        teams[team].map((player) => (
          <PlayerIcon
            key={player.id}
            x={player.x}
            y={player.y}
            image={player.image}
          />
        ))
      )}
    </div>
  );
};

export default Map;
