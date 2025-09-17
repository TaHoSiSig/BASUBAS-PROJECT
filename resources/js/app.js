require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

if (document.getElementById('home-root')) {
    ReactDOM.render(<Home />, document.getElementById('home-root'));
}

if (document.getElementById('about-root')) {
    ReactDOM.render(<About />, document.getElementById('about-root'));
}

if (document.getElementById('contact-root')) {
    ReactDOM.render(<Contact />, document.getElementById('contact-root'));
}
