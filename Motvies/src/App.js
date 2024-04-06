import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RoutesConfig from './config/Routes';

import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

function App() {
    return (
      <BrowserRouter>
        <Header />
        <RoutesConfig /> {/* Render RoutesConfig directly */}
        <Footer />
      </BrowserRouter>
    );
}

export default App;
