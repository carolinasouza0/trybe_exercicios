import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
};

function criarCor() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let cor = '#';
    const aleatorio = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        cor += oneChar[aleatorio()];
    }
    return cor;
}

  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'NEXT_COLOR':
        return {
          ...state,
          index: (state.index + 1) % state.colors.length,
        };
      case 'PREVIOUS_COLOR':
        return {
          ...state,
          index: (state.index - 1 + state.colors.length) % state.colors.length,
        };
        case 'RANDOM_COLOR':
        return { 
            ...state, 
            colors: [...state.colors, criarCor()],
            index: state.colors.length,
        };
      default:
        return state;
    }
  };
const store = createStore(reducer, composeWithDevTools());
const action = (type) => store.dispatch({ type });

const buttonPrevious = document.getElementById('previous');
const buttonNext = document.getElementById('next');

const randomColor = document.createElement('button');
const container = document.getElementById('container');
randomColor.innerText = 'Random Color';
container.appendChild(randomColor);

buttonPrevious.addEventListener('click', () => action('PREVIOUS_COLOR'));
buttonNext.addEventListener('click', () => action('NEXT_COLOR'));
randomColor.addEventListener('click', () => action('RANDOM_COLOR'));

store.subscribe(() => {
    const { colors, index } = store.getState();
    const span = document.getElementById('value');
    span.innerText = colors[index];
    const container = document.getElementById('container');
    container.style.backgroundColor = colors[index];
});