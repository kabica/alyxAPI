import React , {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card'
const axios = require ('axios');


function App() {
  const [state , setState] = useState('');
  const API = function() {
   return  Promise.resolve(
      axios.get('http://localhost:8000/test')
      .then(res => setState(res.data.status))
    );
  }

  useEffect(() => {
    API();
  },[])
  return (
    <main>
      <nav>
        <div class='nav_meta' id='meta_left'>
          <p>launch</p>
        </div>
        <img id='react' src={logo} alt="logo" />
        <div class='nav_meta' id='meta_right'>
          <p>{state}</p>
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
