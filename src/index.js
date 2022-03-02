import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ErrorBoundary } from 'react-error-boundary';
import {
  HashRouter
} from "react-router-dom";

// @desc using Hash router for fix deployment issuse

ReactDOM.render(
  <ErrorBoundary fallbackRender={(e) => (
    <div role="alert">
      <div>Can't load</div>
    </div>
  )}

    fallback={() => {
      return (
        <div>
          Something went wrong
        </div>
      )
    }}>
    <HashRouter>
      <App />
    </HashRouter>
  </ErrorBoundary>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
