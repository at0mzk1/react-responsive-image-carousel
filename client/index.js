import React, { Component } from 'react';
import { render } from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImageCarousel from '../lib/image-carousel';

class App extends Component {
  render() {
    const imagePath = './static/images/';
    const images = [`${imagePath}jason.jpg`, `${imagePath}mcguirk.jpg`, `${imagePath}lynch.jpg`, `${imagePath}brendan.jpg`];
    // Note: onClickItem, onClickThumb, onChange functions are
    // required props of the react-responsive-carousel package
    return (
    <ImageCarousel
      onClickItem={() => {}}
      onClickThumb={() => {}}
      onChange={() => {}}
      images={images}
    />);
  }
}

render(<App />, document.getElementById('app'));
