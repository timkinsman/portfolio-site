import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import App from "./components/App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);