import logo from './logo.svg';
import React, { useState, Fragment } from 'react'
import './App.css';
import Header from './components/shared/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TimeMachine from './components/TimeMachine'

function App() {

  // here's where we deal with changes in state - but we don't need tos

  return (
    // Welcome to my incredible portfolio! The app has been created and now I just need to whiteboard it.
    <Fragment>
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
