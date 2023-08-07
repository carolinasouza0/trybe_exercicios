import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import gotReducer from './reducers/gotReducer';

const store = createStore(gotReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;