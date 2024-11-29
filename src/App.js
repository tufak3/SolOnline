import React from 'react';
import { TeamsProvider } from './context/TeamsContext';
import Map from './components/Map';

function App() {
  return (
    <TeamsProvider>
      <div>
        <Map />
      </div>
    </TeamsProvider>
  );
}

export default App;
