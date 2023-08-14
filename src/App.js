import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';

function App() {
  return (
    <>
     <Header/>
     <Navbar/>
     <Body/>
     <Section/>
     <Footer/>
    </>
  );
}

export default App;
