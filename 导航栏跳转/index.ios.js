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
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';


import CzyScene from './CzyScene';

class simpleNavigatorDemo extends Component {
  render() {
    return (

          <Navigator initialRoute={{title:'Czy initail route', index:0}}
        renderScene={(route, navigator) =>

          <CzyScene

          //标题
            title={route.title}

          //入栈
            onForward={() =>{
                const nextIndex=route.index+1;
                navigator.push({
                    title:'CzyScene'+nextIndex,
                    index:nextIndex,
                })
            }}

          //出栈
          back={()=>{

            if (route.index > 0) {
              navigator.pop();
            }
          }}

            />
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('simpleNavigatorDemo', () => simpleNavigatorDemo);
