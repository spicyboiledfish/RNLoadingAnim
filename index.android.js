/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Main from './Components/Main'

export default class RNLoadingAnim extends Component {
  render() {
    return (
        <Main />
    );
  }
}

AppRegistry.registerComponent('RNLoadingAnim', () => RNLoadingAnim);
