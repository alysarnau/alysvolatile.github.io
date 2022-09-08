import logo from './logo.svg';
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/shared/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import TimeMachine from './components/TimeMachine'
import 'bulma/css/bulma.min.css';

function App() {

  // here's where we deal with changes in state - but we don't need tos

  return (
    // Welcome to my incredible portfolio! The app has been created and now I just need to whiteboard it.
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
						path='/about-me'
						element={<AboutMe />}
			  />
        <Route
						path='/projects'
						element={<Projects />}
			  />
        <Route
						path='/contact-me'
						element={<Contact />}
			  />
        <Route
						path='/time-machine'
						element={<TimeMachine />}
			  />
      </Routes>
    </div>
  );
}

export default App;
