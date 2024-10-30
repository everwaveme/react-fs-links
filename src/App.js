import React from 'react';
import './App.scss';
import CardInfo from './components/CardInfo';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="container">
      <div className="card-wrap">
        <CardInfo />
        <Tabs />
      </div>
    </div>
  );
}

export default App;
