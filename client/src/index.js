import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TextInput from './components/TextInput';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <h1> Notes List: </h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path=":id" element={<App />} />
      </Routes>
    </BrowserRouter>
    <TextInput />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
