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
    //导入组件
    ActivityIndicator, 
} from 'react-native';

export default class ActivityIndicatorDemo extends Component {

  constructor(props){

    super(props);

    this.state = {

        animate:true
    }
  }

  componentDidMount(){

      // 2s后隐藏组件
      setTimeout(() =>{

          this.setState({

              animate:false
          })
      }, 2000)
  }

  render() {
    return (
      <View style={styles.container}>

        <ActivityIndicator
            animating={this.state.animate}
            color='#f00'
            size="large"
            hidesWhenStopped={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('ActivityIndicatorDemo', () => ActivityIndicatorDemo);
