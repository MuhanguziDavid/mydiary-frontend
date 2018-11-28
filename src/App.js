import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Routes from './components/routes';
import store from './store';
import './assets/App.css';
import Footer from './components/footer/Footer';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <ToastContainer />
        <Routes />
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
