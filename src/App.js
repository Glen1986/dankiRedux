import React from 'react';
import { createStore } from 'redux'
import axios from 'axios'
import './App.css';

class Counter extends React.Component {
  increment = () => {

  }

  decrement = ()=> {

  }

  alterarTitulo =()=>{

  }
  render(){
    return(
      <div className='App'>
        <button onClick={this.alterarTitulo}>Titulo</button>
        <button onClick={this.increment}>mas</button>
        <button onClick={this.decrement}>menos</button>
        <h2>Tilulo</h2>
        <h2>10</h2>
      </div>
    )
  }
}

export default Counter;
