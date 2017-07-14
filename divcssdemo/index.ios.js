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

export default class divcssdemo extends Component {
  render() {
    return (
      <View style={styles.style1}>
        
        <View style={[styles.style2, {flexDirection:'row', marginTop:20}]}>
        <View style={{flex:10, flexDirection:'column', borderWidth:1, borderColor:'red'}}>
          <Text style={{color:'red', fontSize:30}}>1111</Text>
          <Text style={{color:'blue',fontSize:30}}>2222</Text>
        </View>

          <View style={{flex:5, flexDirection:'column', borderWidth:1, borderColor:'red'}}>
          <Text style={{color:'red', fontSize:30}}>3333</Text>
          <Text style={{color:'blue',fontSize:30}}>4444</Text>
          <Text style={{color:'blue',fontSize:30}}>5555</Text>
          </View>

          <View style={{flex:5, flexDirection:'column', borderWidth:1, borderColor:'red'}}>
          <Text style={{color:'red', fontSize:30}}>1111</Text>
          <Text style={{color:'blue',fontSize:30}}>2222</Text>
        </View>

        </View>
        <View style={{flex:20,borderWidth:1,borderColor:'blue'}}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style1:{

    flex:1,
  },
  style2:{

    flex:5,
    borderWidth:1,
    borderColor:'red',
  }
});

AppRegistry.registerComponent('divcssdemo', () => divcssdemo);
