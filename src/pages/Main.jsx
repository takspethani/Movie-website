import React from 'react';
import './main.css';
import Schedule from './Schedule';
import Trend from './Trend';
import Blog from './Blog';
import Footer from './Footer';

function Main() {
  return (
    <main>
      <Schedule />
      <Trend/>
      <Blog/>
      <Footer/>
    </main>
  );
}

export default Main;
