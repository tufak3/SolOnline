import React, { createContext, useContext, useState } from 'react';

// Создание контекста
const TeamsContext = createContext();

// Провайдер для хранения состояния команд и игроков
export const TeamsProvider = ({ children }) => {
  const [teams, setTeams] = useState({
    red: [
      { id: 'r1', x: 217, y: 330, image: 'rfirst.svg' },
      { id: 'r2', x: 217, y: 330, image: 'rsecond.svg' },
      { id: 'r3', x: 217, y: 330, image: 'rthird.svg' },
    ],
    blue: [
      { id: 'b1', x: 890, y: 710, image: 'bfirst.svg' },
      { id: 'b2', x: 890, y: 710, image: 'bsecond.svg' },
      { id: 'b3', x: 890, y: 710, image: 'bthird.svg' },
    ],
    green: [
      { id: 'g1', x: 1105, y: 327, image: 'gfirst.svg' },
      { id: 'g2', x: 1105, y: 327, image: 'gsecond.svg' },
      { id: 'g3', x: 1105, y: 327, image: 'gthird.svg' },
    ],
    white: [
      { id: 'y1', x: 445, y: 709, image: 'wfirst.svg' },
      { id: 'y2', x: 445, y: 709, image: 'wsecond.svg' },
      { id: 'y3', x: 445, y: 709, image: 'wthird.svg' },
    ],
    yellow: [
      { id: 'o1', x: 664, y: 64, image: 'yfirst.svg' },
      { id: 'o2', x: 664, y: 64, image: 'ysecond.svg' },
      { id: 'o3', x: 664, y: 64, image: 'ythird.svg' },
    ],
  });

  return (
    <TeamsContext.Provider value={{ teams, setTeams }}>
      {children}
    </TeamsContext.Provider>
  );
};

// huy для доступа к контексту
export const useTeams = () => {
  return useContext(TeamsContext);
};
