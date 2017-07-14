/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import czyPage from './czyPage/weather';


export default class XiechengDemo extends Component {
  render() {
    return (
      <NavigatorIOS style={styles.container} initialRoute={{title:'首页', component:czyPage}}>这两种写法都可以</NavigatorIOS>
      // <NavigatorIOS style={styles.container} initialRoute={{title:'首页', component:czyPage}}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('XiechengDemo', () => XiechengDemo);
