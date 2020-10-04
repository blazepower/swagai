//list subtopics for math
import React, { Component } from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import './MathSubtopics.css';
import Tilt from 'react-tilt';
import Algebra from '../../Algebra/Algebra';

class MathSubtopics extends Component {
  render() {
    const settings = {
      reverse: true, // reverse the tilt direction
      max: 25, // max tilt rotation (degrees)
      perspective: 750, // Transform perspective, the lower the more extreme the tilt gets.
      scale: 1.15, // 2 = 200%, 1.5 = 150%, etc..
      speed: 900, // Speed of the enter/exit transition
      transition: true, // Set a transition on enter/exit.
      axis: null, // What axis should be disabled. Can be X or Y.
      reset: true, // If the tilt effect has to be reset on exit.
      easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
    };

    return (
      <div>
        <h1 className='topic-title'>Math</h1>
        <div className='subtopics'>
          <Link className='algebra-button' to='/math/algebra'>
            <Tilt className='Algebra' options={settings}>
              <div className='Algebra-inner'> Algebra </div>
            </Tilt>
          </Link>
          <Tilt className='Calculus' options={settings}>
            <div className='Calculus-inner'> Calculus </div>
          </Tilt>
          <Tilt className='Statistics' options={settings}>
            <div className='Statistics-inner'> Statistics </div>
          </Tilt>
        </div>
      </div>
    );
  }
}

export default MathSubtopics;
