// App.js
import React from 'react';
import '../css/core.css';
import CoreContainer from './CoreContainer';
import CoreCard from './CoreCard';

function App() {
  // Dummy data for core cards
  const coreCardsData = [
    {
      title: 'Strategies',
      icon: '/static/media/home_pencil.fd33fe42.svg',
      bgColor: 'rgb(245, 243, 253)',
      bgImage: '/static/media/card_strategies.c160b308.png',
      steps: [
        { index: '1', text: 'Create or copy a strategy' },
        { index: '2', text: 'Backtest in seconds' },
        { index: '3', text: 'Deploy live or paper trade' },
      ],
    },
    {
      title: 'Technicals',
      icon: '/static/media/home_send.b38cdf24.svg',
      bgColor: 'rgb(252, 236, 235)',
      bgImage: '/static/media/card_technicals.2dade063.png',
      steps: [
        { index: '1', text: 'Create custom watchlists' },
        { index: '2', text: 'Get quick technical snapshots' },
        { index: '3', text: 'Make unbiased trading decisions' },
      ],
    },
    {
      title: 'Scanner',
      icon: '/static/media/home_lighting.05b05c40.svg',
      bgColor: 'rgb(253, 241, 221)',
      bgImage: '/static/media/card_scanner.9dc23a5d.png',
      steps: [
        { index: '1', text: 'Scan any sector in seconds' },
        { index: '2', text: 'Scan with pre-market data' },
        { index: '3', text: 'Take live to get notified' },
      ],
    },
  ];

  return (
    <>
    <div className="App">
      {/* <h1>React Core Features</h1> */}
      <div style={{"margin" : "100px","justifyContent" : "center"}}>
      <CoreContainer />
      <div className="coreCardsContainer">
        {coreCardsData.map((card, index) => (
          <CoreCard key={index} {...card} />
        ))}
      </div>
        </div>
    </div>
    </>
  );
}

export default App;
