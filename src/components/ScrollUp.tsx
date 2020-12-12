import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './Title.css';

const scrollUp = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return(
    <div className="scroll scroll-up">
      <div className="arrow bounce">
        <i onClick={() => scrollToTop()} className="fa fa-chevron-circle-up" />
      </div>
    </div>
  );
}


export default scrollUp;