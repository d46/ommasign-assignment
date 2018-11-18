import React, { Component } from 'react';
import './App.css';
import Menuboard from '../menu-board-engine/Menuboard/Menuboard';
import examples from '../examples';

class App extends Component {
  render() {
    
    return (
      <Menuboard 
        pages={examples}
      />
    );
  }
}

export default App;
