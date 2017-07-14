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
  View
} from 'react-native';

export default class alignDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>justifyContent用于内容垂直居中 alignItems用于内容水平居中</Text>
        <View style={[styles.viewStyle, styles.centerALi, {justifyContent:'center'}]}><Text style={{alignSelf:'center'}}>center</Text></View>
        <View style={[styles.viewStyle, styles.leftAligin, {justifyContent:'center'}]}><Text>left</Text></View>
        <View style={[styles.viewStyle, styles.rightAligin, {justifyContent:'center'}]}><Text>right</Text></View>
        <View style={[styles.viewStyle, {justifyContent:'center', alignItems:'center'}]}><Text>free</Text></View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    borderColor:'red',
    borderWidth:1,
  },

  viewStyle:{
    borderWidth:5,
    borderColor:'blue',
    width:100,
    height:50,
  },

  centerALi:{
    alignSelf:'center',
  },

  leftAligin:{
    alignSelf:'flex-start',
  },

  rightAligin:{
    alignSelf:'flex-end',
  },
});

AppRegistry.registerComponent('alignDemo', () => alignDemo);
