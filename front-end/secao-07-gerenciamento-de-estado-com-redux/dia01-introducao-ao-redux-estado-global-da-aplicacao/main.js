import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
};

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return { ...state, 
        theme: state.theme === 'dark' ? 'light' : 'dark'
       };
    case 'CHANGE_STATUS':
      return { ...state, 
        status: state.status === 'online' ? 'offline' : 'online'
      };
    default:
      return state;
  }
}

const store = createStore(reducer, composeWithDevTools());

const actionChangeTheme = {
  type: 'CHANGE_THEME',
}

const actionChangeStatus = {
  type: 'CHANGE_STATUS',
}


themeButton.addEventListener('click', () => {
  store.dispatch(actionChangeTheme);
});

statusButton.addEventListener('click', () => {
  store.dispatch(actionChangeStatus);
});

store.subscribe(() => {
  const state = store.getState();
  const statusSpan = document.getElementById('status');

  switch (state.theme) {
    case 'dark':
      themeButton.innerHTML = 'Light Mode';
      document.body.style.backgroundColor = `#333`;
      document.body.style.color = `#fff`;
      break;
    case 'light':
      themeButton.innerHTML = 'Dark Mode';
      document.body.style.backgroundColor = `#fff`;
      document.body.style.color = `#333`;
      break;
    default:
      break;
  }

  switch (state.status) {
    case 'online':
      statusButton.innerHTML = 'Ficar Offline';
      statusSpan.innerHTML = 'Online';
      break;
    case 'offline':
      statusButton.innerHTML = 'Ficar Online';
      statusSpan.innerHTML = 'Offline';
      break;
    default:
      break;
  }
});