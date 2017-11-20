import React, { Component } from 'react';
import axios from 'axios';

import RemoveSvg from './RemoveSvg';

const server = require('./../server-config');

export default class Design extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      imageZoom: null
    }
  }
  componentWillMount = () => {
    axios.get('http://localhost:3000/design-images')
      .then((images) => {
        this.setState(() => ({
          images: images.data
        }))
      }).catch((err) => {
        console.log(err);
      });
  }
  zoomImage = (e) => {
    const src = e.target.src;
    const pos = e.target.getBoundingClientRect();
    let horizontal = null;
    if(pos.width > pos.height) {
      horizontal = true;
    } else {
      horizontal = false;
    }
    // this.setState(() => ({
    //   imageZoom: src
    // }));
    const container = document.createElement('div');
    container.classList.add('image-zoom-container');

    const removeButton = document.createElement('div');
    removeButton.classList.add('remove-button');
    removeButton.innerHTML = RemoveSvg;
    removeButton.addEventListener('click', () => {
      container.remove();
    })
    container.append(removeButton);

    const image = document.createElement('img');
    image.src = src;

    image.style.left = pos.x + 'px';
    image.style.top = pos.y + 'px';
    image.style.width = pos.width + 'px';

    container.append(image);

    document.getElementsByClassName('container')[0].append(container);

    setTimeout(() => {
      container.style.backgroundColor = 'rgba(255, 255, 255, .5)';
      image.style.left = 'calc(50% - 300px)';
      image.style.top = '80px';
      image.style.width = '600px';

      if(horizontal) {
        image.style.width = '800px';
        image.style.left = 'calc(50% - 400px)';
      }
    }, 100)
  }

  render() {
    return(
      <div className="design-section">
        {this.state.images.map((image, index) => <img onClick={this.zoomImage} className="design-img" key={index} src={'/images/design/' + image} />)}
      </div>
    );
  }
};

// {this.state.imageZoom &&
//   <div className="image-zoom-container">
//     <img src={this.state.imageZoom} />
//   </div>
// }
