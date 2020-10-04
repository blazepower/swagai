import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopicSelection from '../TopicSelection/TopicSelection';
import Navbar from '../main-navbar/MainNavbar';
import Upload from '../Upload/Upload';
import LandingPage from '../LandingPage/LandingPage';
import SignIn from '../SignIn/SignIn';
import MathSubtopics from '../Subtopics/MathSubtopics/MathSubtopics';
import Algebra from '../Algebra/Algebra';

function App() {
  return (
    <div className='final-container'>
      <Router>
        <Navbar />{' '}
        {/* navbar should be on every page so it goes under app.js */}
        {/* Routes that lead to different pages, update this when we add a new page */}
        <Route path='/topic-selection' component={TopicSelection} />
        <Route path='/upload' component={Upload} />
        <Route path='/home' component={LandingPage} />
        <Route path='/sign-in' component={SignIn} />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/math' component={MathSubtopics} />
        <Route path='/math/algebra' component={Algebra} />
      </Router>
    </div>
  );
}

export default App;
