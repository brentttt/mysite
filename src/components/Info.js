import React, { Component } from 'react';
import InfoSection from './section-types/InfoSection';

export default class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [{
        title: "Info",
        text: [
          "I am a web/graphic designer, front-end developer, and painter based in Philly."
        ],
        email: 'brent.e.hildebrand@gmail.com',
        links: [
          {
            place: 'github',
            url: 'https://github.com/brentttt'
          },{
            place: 'paintings',
            url: 'http://www.brenthildebrand.com/'
          }, {
            place: 'codepen',
            url: 'https://codepen.io/hil/'
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
