import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card'
function App() {
  return (
    <main>
      <nav>
        <img id='react' src={logo} className="App-logo" alt="logo" />
      </nav>
      <body>
        <p>This is where some things will go, others will not.</p>
        <div id='data'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div id='cara'>
          Cara
        </div>
      </body>
    </main>
  );
}

export default App;
