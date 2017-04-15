import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

import App from './App';
import '../semantic/dist/semantic.min.css';
import data from './data'

function storeManager(state = [], action) {
  if (action.type === 'ADD_TO_PLAYLIST') {
    return [
      ...state,
      action.track
    ]
  }
  return (state)
}
const store = createStore(storeManager)
const initialFilter = {
  text: "Все",
  value: "all"
}

const makeFilterOption = (arr) => {
  const options = []
  arr.forEach(x => {
    options.push({text: x, value: x})
  })
  return options
}

const removeDublicates = (arr) => {
  const values = []
  arr.forEach(x => {
    if (!values.includes(x)) {
      values.push(x)
    }
  })
  return values.sort()
}

const prepareFilter = (arr) => {
  return [
    initialFilter, ...makeFilterOption(removeDublicates(arr))
  ]
}

data
  .playList
  .forEach(x => {
    store.dispatch({type: 'ADD_TO_PLAYLIST', track: x})
  })

ReactDOM.render(
  <App playList={store.getState()} prepareFilter={prepareFilter}/>, document.getElementById('root'));
