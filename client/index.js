import React, { Component } from 'react';
import { render } from 'react-dom';
import ImageCarousel from '../lib/image-carousel';
import stylesheet from 'react-responsive-carousel/lib/styles/carousel.min.css';

class App extends Component {
  render() {
    const imagePath = './static/images/';
    const images = [`${imagePath}jason.jpg`, `${imagePath}mcguirk.jpg`, `${imagePath}lynch.jpg`, `${imagePath}brendan.jpg`];
    return <ImageCarousel images={images} />;
  }
}

render(<App />, document.getElementById('app'));
