import React from 'react';
import Quiz from './components/Quiz';
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Quiz/>
    </Provider>
  )
}

export default App