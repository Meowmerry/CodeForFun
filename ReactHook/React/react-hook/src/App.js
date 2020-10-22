import React from 'react';
import './App.css';
// import Greeting from './components/Greeting'
import Container from './containers/Container1'
import AnimalFunFact from './components/AnimalFunFacts';



function App() {
  return (
    <div class="container">
    <h1> React Hooks</h1>
    <Container />
    <AnimalFunFact />

    </div>
  );
}

export default App;
