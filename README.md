# React Responsive Image Carousel
[![npm version](https://badge.fury.io/js/react-responsive-image-carousel.svg)](https://badge.fury.io/js/react-responsive-image-carousel)

React Responsive Image Carousel is a wrapper for leandrowd's react-responsive-carousel package (https://github.com/leandrowd/react-responsive-carousel).

# Overview
This package allows the developer to pass in an array of images as a prop, along with any props associated with the react-responsive-carousel package in order to render an image carousel.

Many thanks to https://github.com/leandrowd/ for doing such a great job writing and maintaining the underlying component that this package wraps!

### Installation
The package can be installed through npm
https://www.npmjs.com/package/react-responsive-image-carousel
```
$ npm install -S react-responsive-image-carousel
```

### Quick Example
**Note**: All props allowed by the react-responsive-carousel package can be ingested by the ImageCarousel component. Furthermore, any props required by the react-responsive-carousel package are required by this package.

Please refer to the documentation of the react-responsive-carousel package for additional information (linked at the top of this readme).

```js
import ImageCarousel from 'react-responsive-image-carousel';
class myApp extends React.Component {
    render() {
        const images = ['./pathToImage_1.png', './pathToImage_2.png', './pathToImage_3.png'];
        return (
        <ImageCarousel
            images={images}
            onClickItem={myFunc1}
            onChange={myFunc2}
            onClickThumb={myFunc3}
        />);
    }
}
```

### Run it Yourself
To run the example given in this repository, please follow these steps:
- Clone this repository to your local environment
- Install all dependencies by executing ```$ npm install``` in your local directory
- Start your local server by executing ```$ npm start```. This server will run on port 8000
- Bundle the files in the repository by executing ```$ npm build```
- Visit http://localhost:8000/client/ to see the example!


### TODO:
 - Additional Examples
 - Write unit tests using jest