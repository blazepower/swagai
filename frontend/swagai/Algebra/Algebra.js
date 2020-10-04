//list subtopics for math
import React, { Component, useState } from 'react';
// import { BrowserRouter as Router, Link, Route, useRouteMatch } from 'react-router-dom';
import './Algebra.css';
import { Tabs, Tab } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import PracticeProblem from '../practice-problems/PracticeProblem';

//TODO
/*
api calls to fetch links of webpage and youtube videos

*/

function Algebra() {
  return (
    <div>
      <h1 className='individual-topic-title'>Algebra</h1>
      <Tabs
        defaultActiveKey='summary'
        id='uncontrolled-tab-example'
        className='tabs'
      >
        <Tab eventKey='summary' title='Summary'>
          <div className='summary-div'>
            <p>
              {' '}
              {/*fetch summary from database*/}
              <h2>The axiom of equals</h2>
              <br />
              a = a Identity
              <br />
              If a = b, then b = a Symmetry
              <br />
              If a = b and b = c, then a = c Transitivity
              <br />
              <h2>Rules</h2>
              <br />
              m(a + b) = ma + mb Distributive Rule
              <br />
              (x -a)(x - b) = x<sup>2</sup> - (a + b)x + ab Quadratic Trinomial
              <br />
              (a +/- b)<sup>2</sup> = a<sup>2</sup> +/- 2ab + b<sup>2</sup>{' '}
              Perfect Square Trinomial
              <br />
              (a + b)(a - b) = a<sup>2</sup> - b<sup>2</sup> Difference of
              Squares
              <br />
              (a +/- b)(a<sup>2</sup> -/+ ab + b<sup>2</sup>) = a<sup>3</sup>{' '}
              +/- b<sup>3</sup> Sum or Difference of Two Cubes
              <br />
              <h2>Forms of Equations Corresponding To Different Operations</h2>
              <br />x + a = b &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x - a = b
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ax = b
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x/a = b
              <br />
              x = b - a &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x - a = b
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x = b/a
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x = ab
              <br />
              <h2>Rules of Exponents</h2>
              <br />a<sup>m</sup>a<sup>n</sup> = a<sup>m + n</sup> Multiplying
              <br />a<sup>m</sup> / a<sup>n</sup> = a<sup>m - n</sup> Dividing
              <br />
              ab<sup>n</sup> = a<sup>n</sup>b<sup>n</sup> Power of a Product Of
              Factors
              <br />
              (a/b)<sup>n</sup> = a<sup>n</sup> / b<sup>n</sup>
              <br />
              (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup> Power of A Power
            </p>
          </div>
        </Tab>
        <Tab eventKey='videos' title='Videos'>
          <div id='content-div' className='videos'>
            <div className='video-list'>
              <iframe
                width='949'
                height='534'
                src='https://www.youtube.com/embed/grnP3mduZkM' //grab this from database
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
              <iframe
                width='949'
                height='534'
                src='https://www.youtube.com/embed/NybHckSEQBI' //grab this from database
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
              <iframe
                width='760'
                height='570'
                src='https://www.youtube.com/embed/LwCRRUa8yTU' //grab this from database
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Tab>
        <Tab eventKey='practice' title='Practice Problems'>
          <div className='problems'>
            <PracticeProblem
              url={
                'https://www.kyote.org/WebPages/tutorials/placement/pdf/collAlg1.pdf' //grab from databse
              }
              className='practice-problem'
            />
            <PracticeProblem
              url={
                'https://govalor.com/wp-content/uploads/Algebra-Practice-Test.pdf' //grab database
              }
              className='practice-problem'
            />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Algebra;
