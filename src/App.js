import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/routes';
import './assets/App.css';
import Footer from './components/footer/Footer';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Routes />
      <Footer />
    </React.Fragment>
  </BrowserRouter>
);

export default App;
