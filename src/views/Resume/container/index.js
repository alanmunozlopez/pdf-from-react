import React, { Component } from 'react';
import QRCode from 'qrcode';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import Resume from '../components';

export default class ResumeContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      QRCode: '',
    };
  }

  createPdf = () => {
    const input = document.getElementById('Resume');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');

        const pdfDoc = new jsPDF();
        pdfDoc.addImage(imgData, 'PNG', 0, 0);
        pdfDoc.save("resume.pdf"); 
      });
  }

  componentDidMount = () => {
    this.createQRSign('12.333.567-8');
  }

  createQRSign = async text => {
    try {
      const qr = await QRCode.toDataURL(text);
      this.setState({
        qr,
      });
      console.log(qr);
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div>
        <Resume
          createPdf={this.createPdf}
          qr={this.state.qr}
        />
      </div>
    );
  }
}
