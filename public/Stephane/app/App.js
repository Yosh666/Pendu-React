import React, { Component } from 'react';


import Word from './components/Word';

import './App.css';







class App extends Component {
 state = {
   currentPlay : 1
 }
 handleReset = () => {
   
 }
 
 
  render(){
    <div>
      <Word />
      <p>Tapez une lettre pour jouer...</p>
      <p><button onClick={  }>REJOUER</button></p>
      
    </div>
  };
}

export default App;
