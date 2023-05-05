import { Component } from 'react';
import './App.css';


class App extends Component {
state = {
  numeroDeCliques: 0,
  numeroDeCliquesTwo: 0,
  numeroDeCliquesThree: 0,
}

btnColor = (num) => {
  return num % 2 === 0 ? 'green' : 'white';
}

  handleClick = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }))
  }
  
  handleClickTwo = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesTwo: estadoAnterior.numeroDeCliquesTwo + 1,
    }))
  }
  
  handleClickThree = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesThree: estadoAnterior.numeroDeCliquesThree + 1,
    }))
  }
  render() {
    const { numeroDeCliques, numeroDeCliquesTwo, numeroDeCliquesThree } = this.state;
    return (
      <div>
        <button 
          onClick={this.handleClick} 
          style={ {backgroundColor: this.btnColor(numeroDeCliques)} }
        > { numeroDeCliques }</button>
        <button 
          onClick={this.handleClickTwo}
          style={ {backgroundColor: this.btnColor(numeroDeCliquesTwo)} }
        > { numeroDeCliquesTwo }</button>
        <button 
          onClick={this.handleClickThree}
          style={ {backgroundColor: this.btnColor(numeroDeCliquesThree)} }
        >{ numeroDeCliquesThree }</button>
      </div>
    );
  }
}

export default App;
