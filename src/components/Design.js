import React, { Component } from 'react';

export default class Design extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: []
    }
  }

  renderSections = () => {
    if(this.state.sections.length > 0) {
      return 'true';
    } else {
      return null;
    }
  }

  render() {
    return(
    <div>
      <h1>Design</h1>
      {this.renderSections()}
    </div>
  );
  }
};
