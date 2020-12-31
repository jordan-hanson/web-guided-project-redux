import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import Title from './components/Title';
import DragonList from './components/DragonList';
import './styles.css';
import { rootReducer } from './reducers/';
import { dragonReducer } from '../src/reducers/dragonReducer';
import { titleReducer } from '../src/reducers/titleReducer'
import { Provider } from 'react-redux';



const store = createStore(dragonReducer)

function App() {
  return (
    <div className="App">
      <Title />
      <DragonList />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, rootElement);
