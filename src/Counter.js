import React from 'react';
import { connect } from 'react-redux';
import './App.css';

class Counter extends React.Component {

  increment = () => {

  }

 alterarTitulo = ()=> {
 
  }
 
  render(){
    return(
      <div className='App'>
        <button onClick={this.increment}>mas</button>
        <button onClick={this.alterarTitulo}>alterarTitulo</button>
        <h2>{this.props.count}</h2>
        <h3>{this.props.title}</h3>
      </div>
    )
  }
}

const mapStateToProps= state=>({
  count: state.count, title:state.title
})
export default connect(mapStateToProps)(Counter);
