import React, { Component } from 'react';
import { render } from 'react-dom';
import ImageCarousel from '../lib/image-carousel';

class App extends Component {
	render() {
		return <ImageCarousel />;
	}
}

render(<App />, document.getElementById("app"));