import React, { Component } from 'react';
import axios from 'axios';

import RemoveSvg from './RemoveSvg';

const server = require('./../server-config').default;

export default class Design extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      imageZoom: null,
      mobile: false
    }
  }
  componentWillMount = () => {
    axios.get(`${server}design-images`)
      .then((images) => {
        this.setState(() => ({
          images: images.data
        }))
      }).catch((err) => {
        console.log(err);
      });

      if(window.innerWidth < 700) {
        this.setState({
          mobile: true
        });
      }
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

    const image = document.createElement('img');
    image.src = src;

    image.style.left = pos.x + 'px';
    image.style.top = pos.y + 'px';
    image.style.width = pos.width + 'px';

    container.append(image);

    const removeButton = document.createElement('div');
    removeButton.classList.add('remove-button');
    removeButton.innerHTML = RemoveSvg;
    removeButton.addEventListener('click', () => {

       container.style.height = 0;
       container.style.top = '50vh';
       container.style.width = 0;
       container.style.left = '50vw';
       container.style.opacity = '0';

      setTimeout(function() {
        container.remove();
      }, 2000);
    })
    container.append(removeButton);

    document.getElementsByClassName('container')[0].append(container);

    setTimeout(() => {
      container.style.backgroundColor = 'rgba(255, 255, 255, .5)';
      image.style.left = 'calc(50% - 300px)';
      image.style.top = '80px';
      image.style.width = '600px';

      if(this.state.mobile) {
        container.style.backgroundColor = 'rgba(255, 255, 255, .9)';
        image.style.width = '100%';
        image.style.left = '0';
        return;
      }

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
