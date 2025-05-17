import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Alteração aqui
import App from './App';
import HomePage from './components/Home';
import GlobalStyle from "./styles/global";
import User from './User';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <Router>
    <Routes> 
      <Route exact path="/" element={<HomePage />} />
      <Route path="/usuario" element={<User />} />
      <Route path="/administrador" element={<App />} />
    </Routes> 
    <GlobalStyle />
  </Router>
  </>
);
