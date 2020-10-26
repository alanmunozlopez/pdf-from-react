import React from 'react';
import './index.css';

const Resume = (props) => (
  <div
    className='Resume'
    id='Resume'
  >
    <div className='Resume--title'>
      <h1> Work Certificate </h1>
    </div>
    <div className="Resume--details">
      <div className='Resume--details--key-value'>
        <p>
          Nombre:
        </p>
        <p>
          Alan Godoy
        </p>
      </div>
      <div className='Resume--details--key-value'>
        <p>
          RUT:
        </p>
        <p>
          12.333.567-8
        </p>
      </div>
      <div className='Resume--details--key-value'>
        <p>
          Position:
        </p>
        <p>
          Master of puppets
        </p>
      </div>
    </div>
    <div className='Resume--qr'>
      <div>
        <img src={props.qr} alt='QR Sign' />
      </div>
    </div>
    <div className='Resume--btn'>
      <button onClick={() => props.createPdf()}> Download PDF </button>
    </div>
  </div>
);

export default Resume;