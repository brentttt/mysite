import React, { Component } from 'react';
import InfoSection from './section-types/InfoSection';

export default class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [{
        title: "Info",
        text: [
          "I am a web and graphic designer and front-end developer based in Brooklyn, New York.",
          "CV on request."
        ],
        email: 'brent.e.hildebrand@gmail.com',
        links: [
          {
            place: 'github',
            url: 'fsdfsdfs'
          },{
            place: 'paintings',
            url: 'sdflskdfs'
          }
        ]
      }]
    }
  }

  renderSections = () => {
    if(this.state.sections.length > 0) {
      return this.state.sections.map((section) => {
        return <InfoSection key={section.title} content={section}/>;
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
