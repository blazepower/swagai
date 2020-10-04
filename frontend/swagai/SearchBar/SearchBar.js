import React, { Component } from 'react';
import './SearchBar.css';
import { Link, Router } from 'react-router-dom';
class Navbar extends Component {
  render() {
    const searchBar = document.querySelector(".search");
    return (
        <div class="search_wrapper">
            <input class="search" placeholder="Search" type="text" ></input>
        </div>
    );
  }
}
