//This functional component displays our practice problems
//https://github.com/wojtekmaj/react-pdf/wiki/Recipes Go to Single Page with Navigation

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './PracticeProblem.css';

const proxy = 'https://cors-anywhere.herokuapp.com/'; //bypass CORS Policy
export default function PracticeProblem(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }
  return (
    <div>
      <a href={props.url} target='_blank'>
        {/* pdf-wrap used for gradient border */}
        <div className='pdf-wrap'>
          <Document
            className='pdf'
            file={`${proxy}${props.url}`}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      </a>
      <div className='nav-info'>
        <p className='pdf-location'>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <div className='nav-button-div'>
          <button
            type='button'
            className='pdf-nav-buttons'
            id='prev-button'
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Previous
          </button>
          <button
            type='button'
            id='next-button'
            className='pdf-nav-buttons'
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
