import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from './redux/actions';
import './App.css';
import ShowCharacter from './components/ShowCharacter';

class App extends Component {

  state = {
    name: '',
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ name: value }); 
  }

  render() {
    const { name } = this.state;
    const { isFetching, dispatch } = this.props;

    if (isFetching) return <p>Loading...</p>;

    return (
      <div>
        <form>
          <label>
            <input 
              type="text" 
              placeholder='Digite o nome do personagem' 
              value={ name }
              onChange={ this.handleChange }
              />
          
          </label>
          <button 
            type='button'
            onClick={ () => dispatch(fetchCharacters(name))}
          >
            Pesquisar
          </button>
        </form>
        <hr />

        <ShowCharacter />
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  data: state.data,
});

export default connect(mapStateToProps)(App);
