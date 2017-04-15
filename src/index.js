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
    const years = [initialFilter],
      genres = [initialFilter],
      authors = [initialFilter]

    // store.subscribe( () => console.log('Subscribe', store.getState()) )

    data
      .playList
      .forEach(x => {
        store.dispatch({type: 'ADD_TO_PLAYLIST', track: x})
        years.push({text: x.year, value: x.year})
        genres.push({text: x.genre, value: x.genre})
        authors.push({text: x.author, value: x.author})
      })

    ReactDOM.render(
      <App
      playList={store.getState()}
      filterData={{
      years,
      genres,
      authors
    }}/>, document.getElementById('root'));
