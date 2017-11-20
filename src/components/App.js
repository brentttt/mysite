import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import _ from 'lodash';

import Header from './Header';
import ContentContainer from './ContentContainer';
import Dev from './Dev';
import Design from './Design';
import Info from './Info';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scroll: null,
      headerActive: true
    }
    this.manageHeaderPosition = _.debounce(this.manageHeaderPosition, 20)
  }
  manageHeaderPosition = (e) => {
    const elem = document.querySelector('.scroll-container');

    if(elem.scrollTop < 50) {
      this.setState(() => ({
        headerActive: true
      }));
    } else {

      if(elem.scrollTop < this.state.scroll) {
        this.setState(() => ({
          headerActive: false
        }));
      } else {
        this.setState(() => ({
          headerActive: true
        }));
      }

    }

    const scroll = elem.scrollTop;
    this.setState(() => ({
      scroll: scroll
    }));
  }
  render() {
    return (
      <BrowserRouter>
        <div className="scroll-container" onScroll={this.manageHeaderPosition}>
          <Header
            headerActive={this.state.headerActive}
          />
          <Switch>
            <Route path="/" component={Dev} name="dev" exact={true}/>
            <Route path="/design" component={Design}/>
            <Route path="/info" component={Info}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
  }
};
