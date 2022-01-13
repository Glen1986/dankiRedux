import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import Counter from './Counter';

const initialState = {count : 40, title:"Glen/Code"};
function reducer(state = initialState, action){
  return state
}
const store = createStore(reducer);

const App = ()=> (
  <Provider store={store}>
    <Counter  />
  </Provider>
);
ReactDOM.render(<App />,
  document.getElementById('root')
);

