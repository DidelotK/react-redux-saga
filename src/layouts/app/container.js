import React, { Component } from 'react';
import {connect} from 'react-redux';

import View from './view';

@connect(undefined, undefined)
class Container extends Component {
  componentWillMount() {
    const {dispatch} = this.props;

    dispatch({type: 'APP_INIT'});
  }
  render() {
    return <View children={this.props.children}/>
  }
}

export default Container;
