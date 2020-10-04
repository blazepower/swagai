import React, { Component } from 'react';
import './LandingPage.css';
import { Link, Router } from 'react-router-dom';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../node_modules/slick-carousel/slick/slick.css';
import Slider from 'react-slick';

const photos = [
  //array of photos for carousel
  {
    name: 'Math',
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Tangency_Example_3.svg/1280px-Tangency_Example_3.svg.png',
  },
  {
    name: 'History',
    url: 'https://storage.needpix.com/rsynced_images/wolf-1033686_1280.jpg',
  },
  {
    name: 'Chemistry',
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/El%C3%A9ment_simple_mat%C3%A9riau_%C3%A9lectroformable.jpg/1280px-El%C3%A9ment_simple_mat%C3%A9riau_%C3%A9lectroformable.jpg',
  },
  {
    name: 'Computer Science',
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/HTML5_de_Erick_Dimas.jpg/1280px-HTML5_de_Erick_Dimas.jpg',
  },
];

class LandingPage extends Component {
  render() {
    const settings = {
      //settings for carousel
      dots: true, //dots under photo
      infinite: true, //you can keep scrolling through photos
      speed: 1000, //speed that slides move, larger = slower
      slidesToShow: 3, //how many slides to display
      slidesToScroll: 3,
      autoplay: true, //scrolls by itself if unattended
      centerMode: true,
      arrows: true, //display arrows
      autoplaySpeed: 5000, //speed of autoplay
      className: 'slides',
    };

    return (
      <div>
        {/* mission statement div and get started button */}
        <div className='mission-statement-box'>
          <h1>Education Made Easy</h1>
          <br />
          <h2>All in one studying with notes, videos, and practice problems</h2>
          <div className='get-started-box'>
            <Link className='get-started' to='sign-in'>
              Get Started
            </Link>
          </div>
        </div>
        {/* image carousel */}
        <div className='topic-display'>
          <Slider {...settings}>
            {/* for each photo in photos array, create a div with its image and name */}
            {photos.map((photo) => {
              return (
                <div className='slide'>
                  <Link className='unit' to='/topic-selection'>
                    <img src={photo.url} width='70%' alt='' />
                    <p className='caption'>{photo.name}</p>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default LandingPage;
