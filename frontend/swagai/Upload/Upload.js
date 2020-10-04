import React, { Component } from 'react';
import './Upload.css';
import { Link, Router } from 'react-router-dom';
class Upload extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(`Selected file - ${this.fileInput.current.files[0].name}`);
  }

  render() {
    return (
      <form class='file-input-form' onSubmit={this.handleSubmit}>
        <label className='upload-label'>
          <p>Upload</p>
          <br />
          <input type='file' ref={this.fileInput} />{' '}
        </label>
        <br />
        <button className='submit-button' type='submit'>
          Submit
        </button>
      </form>
    );
  }
}

export default Upload;
