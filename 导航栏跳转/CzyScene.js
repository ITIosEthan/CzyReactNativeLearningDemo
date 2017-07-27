/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,

} from 'react-native';

class CzyScene extends Component {

  static type = {

    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    back: PropTypes.func.isRequired,
  }

  render() {
    return (
      // justifyContent 垂直居中 并且需要设置flex：1
      <View style={[{alignItems:'center', justifyContent:'center', flex:1}, ]}>

        <Text style={{alignSelf:'center', color:'#f00'}}>
          current CzyScene:{this.props.title}
        </Text>

        <TouchableHighlight onPress={this.props.onForward} underlayColor={'#f00'}>
        <Text>压栈</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.props.back} underlayColor={'#f00'}>
        <Text>出栈</Text>
        </TouchableHighlight>
      </View>

    )
  }
}

var styles = StyleSheet.create({

  container:{

    backgroundColor:'#fff'
  }
})

//使用这个也可以向外部导出组件 作用类似于export default
module.exports = CzyScene;
