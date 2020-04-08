import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card'
function App() {
  return (
    <main>
      <nav>
        <div class='nav_meta' id='meta_left'>
          <p>launch</p>
        </div>
        <img id='react' src={logo} alt="logo" />
        <div class='nav_meta' id='meta_right'>
          <p>launch</p>
        </div>
      </nav>
      <body>
        <p id='descrip'><strong>This is where some things will go, others will not.</strong></p>
        <div id='data'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </body>
    </main>
  );
}

export default App;
