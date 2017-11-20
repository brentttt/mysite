import React, { Component } from 'react';
import DevSection from './section-types/DevSection.js';

export default class Dev extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [{
        title: "Taxus Street Coffee",
        text: ["Website/ecommerce with for the Virginia based coffee Company"],
        link: "http://www.taxusstreetcoffee.com/",
        bg: "#231f20",
        color: "white",
      }, {
        title: "Desktop",
        text: ["A light-weight desktop style note taking app built with React and localStorage."],
        link: "fsdfsdf",
        bg: "#55a055",
        color: "white",
        image: "notes.png"
      }, {
        title: "Trump Twitter Watch",
        text: [
          "A project analyzing the tone of Donald Trump's tweets with IBM Watson's Tone Analyzer.",
          "The app consists a backend API built in node, as well as a front end dynamically updated with React."
        ],
        link: "https://trump-twitter-watch.herokuapp.com",
        bg: "#f0faf4",
        color: "black",
        image: "trump-twitter-watch.png"
      }, {
        title: "Font Compare",
        text: ["A simple UI for directly comparing two fonts. It throws an error if a user tries to use a font that is not on their computer."],
        link: "https://codepen.io/hil/full/yXPjvG/",
        bg: "gainsboro",
        color: "black",
        image: "font-compare.png"
      }, {
        title: "404",
        text: ["Animated text effect randomly generated with javascript."],
        link: "https://codepen.io/hil/full/rWqvYJ/",
        bg: "#23615f",
        color: "white",
        image: "texty2.png"
      }, {
        title: "Smiley Search Widget",
        text: ["A simple UI for directly comparing two fonts. It throws an error if a user tries to use a font that is not on their computer."],
        link: "https://codepen.io/hil/full/GNrYow/",
        bg: "#dadada",
        color: "black",
        image: "search-widget2.gif"
      }
    ]
    }
  }

  renderSections = () => {
    if(this.state.sections.length > 0) {
      let z=100;
      return this.state.sections.map((section) => {
        z--;
        return <DevSection key={section.title} content={section} z={z}/>;
      })
    } else {
      return null;
    }
  }

  render() {
    return(
    <div className="section-container">
      {this.renderSections()}
    </div>
  );
  }
};
