import React, { Component } from 'react';

import View from './view';

class Container extends Component {
  render() {
    return <View children={this.props.children}/>
  }
}

export default Container;
