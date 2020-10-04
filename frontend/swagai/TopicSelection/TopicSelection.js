import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TopicSelection.css';
import Tilt from 'react-tilt';

class TopicSelection extends Component {
  render() {
    const settings = {
      reverse: false, // reverse the tilt direction
      max: 7, // max tilt rotation (degrees)
      perspective: 750, // Transform perspective, the lower the more extreme the tilt gets.
      scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
      speed: 1000, // Speed of the enter/exit transition
      transition: true, // Set a transition on enter/exit.
      axis: null, // What axis should be disabled. Can be X or Y.
      reset: true, // If the tilt effect has to be reset on exit.
      easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
    };

    return (
      <div>
        {/* mission statement div and get started button */}
        <div className='mission-statement-box'>
          <h1>Topic Selection</h1>
          <br />
          <h2>Here are our available topics</h2>
        </div>
        <div className='topics'>
          <Link className='math-button' to='/math'>
            <Tilt className='Math' options={settings}>
              <div className='Math-inner'> Math </div>
            </Tilt>
          </Link>
          <Tilt className='Chemistry' options={settings}>
            <div className='Chemistry-inner'> Chemistry </div>
          </Tilt>

          <Tilt className='History' options={settings}>
            <div className='History-inner'> History </div>
          </Tilt>
          <Tilt className='ComputerScience' options={settings}>
            <div className='ComputerScience-inner'> Computer Science </div>
          </Tilt>
        </div>
      </div>
    );
  }
}

export default TopicSelection;
