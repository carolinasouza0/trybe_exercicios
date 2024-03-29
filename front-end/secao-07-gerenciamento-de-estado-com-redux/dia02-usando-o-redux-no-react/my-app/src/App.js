// ./src/App.js
import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { actionCreator, clickCounter } from './redux/actions';

class App extends React.Component {
  render() {
    const { dispatch, countState, clicksCount } = this.props;

    const dispatchIncrement = (add = 1) => {
      dispatch(actionCreator(add));
      dispatch(clickCounter());
    }
    return (
      <div>
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button 
          onClick={() => dispatchIncrement()}
        >
          Incrementa 1
        </button>
        <button
        onClick={() => dispatchIncrement(5)}
        >
          Incrementa 5
        </button>
        <h3>Número de clicks: {clicksCount}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
  clicksCount: state.counterReducer.clicks,
});

export default connect(mapStateToProps)(App);
