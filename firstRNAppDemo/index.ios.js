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
  Image,
} from 'react-native';

export default class firstRNAppDemo extends Component {
  render() {
    return (

      <View style={{}}>

      <View style={[styles.rowFirst, styles.height160, styles.top20]}>
          <View style={[styles.height160, styles.part_1_left,{flex:1}]}>
            <Text style={[styles.greenCol, styles.left20, styles.font14, {marginLeft:5, marginTop:5}]}>我们约吧</Text>
            <Text style={[styles.redCol, styles.left20, styles.font14, {marginLeft:5, marginTop:5}]}>恋爱家人好朋友</Text>
            <Image style={{width:100,height:100, marginLeft:20}} source={{uri: 'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}}>
            </Image>
          </View>

          <View style={[styles.height160,  styles.part_1_right, {flex:2}]}>

            <View style={{flex:3, flexDirection:'row', borderColor:'#DCD7CD', borderBottomWidth:0.5}}>
              <View style={{flex:1}}>
              <Text style={[{marginLeft:30, marginTop:10}, styles.redCol]}>超低价值</Text>
              <Text style={[{marginLeft:30,marginTop:20}, {color:'black'}]}>十元惠生活</Text>
              </View>
              <View style={{width:100, height:100, flex:1}}>
              <Image style={{width:80,height:80, alignSelf:'center'}} source={{uri:'http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg'}}></Image>
              </View>
           </View>

           <View style={{flex:2, flexDirection:'row'}}>
            <View style={{flex:1, borderColor:'#DCD7CD', borderRightWidth:0.5}}>
              <Text style={[styles.font14, styles.greenCol, {marginLeft:5, marginTop:5}]}>聚餐宴请</Text>
              <Text style={[styles.font14, styles.redCol, {marginTop:5, marginLeft:5}]}>朋友家人常聚聚</Text>
              <Image style={{width:25, height:25, marginLeft:5, marginTop:2}} source={{uri:'http://p1.meituan.net/mmc/08615b8ae15d03c44cc5eb9bda381cb212714.png'}}>
              </Image>
            </View>
            <View style={{flex:1}}>
              <Text style={[styles.font14, styles.greenCol, {marginLeft:5, marginTop:5}]}>名店购抢</Text>
              <Text style={{fontSize:10}, styles.greenCol, {marginLeft:5, marginTop:5}}>还有</Text>
              <Text style={{fontSize:10}, styles.redCol, {marginLeft:5, marginTop:5}}>12:06:12分</Text>
            </View>
           </View>


          </View>

      </View>


      <View style={{height:20, borderBottomWidth:1, borderColor:'#DCD7CD', flexDirection:'row'}}></View>

      <View style={{borderBottomWidth:1, borderColor:'#DCD7CD', height:90, flexDirection:'row'}}>
        <View style={{flex:1, flexDirection:'column'}}>
          <Text style={[{fontSize:18, marginLeft:15, marginTop:10}, styles.greenCol]}>一元吃大餐</Text>
          <Text style={[{fontSize:14, marginLeft:15, marginTop:10}, styles.redCol]}>新用户专享</Text>
        </View>
        <View style={{flex:1, flexDirection:'column'}}>
          <Image style={{width:120, height:50, alignSelf:'center', justifyContent:'center'}} source={{uri:'http://p1.meituan.net/280.0/groupop/7f8208b653aa51d2175848168c28aa0b23269.jpg'}}></Image>
        </View>
      </View>


      <View style={{height:200}}>

        <View style={{flexDirection:'row', flex:1}}>
          
          <View style={{flex:1, flexDirection:'row'}}>
              <View style={{flex:3}}>
                  <Text style={[styles.font14, styles.greenCol, {marginTop:15, marginLeft:15}]}>撸串节狂欢</Text>
                  <Text style={[styles.font14, styles.redCol, {marginLeft:15, marginTop:15}]}>烧烤6.6元起</Text>
              </View>
              <View style={{flex:2}}>
                  <Image style={{width:80, height:80, alignSelf:'center', justifyContent:'center'}} source={{uri:'http://p1.meituan.net/280.0/groupop/fd8484743cbeb9c751a00e07573c3df319183.png'}}></Image>
              </View>
          </View>

          <View style={{flex:1, flexDirection:'row'}}>
              <View style={{flex:3}}>
                  <Text style={[styles.font14, styles.greenCol, {marginTop:15, marginLeft:15}]}>毕业旅行</Text>
                  <Text style={[styles.font14, styles.redCol, {marginLeft:15, marginTop:15}]}>选好酒店才安心</Text>
              </View>
              <View style={{flex:2}}>
                  <Image style={{width:80, height:80, alignSelf:'center', justifyContent:'center'}} source={{uri:'http://p0.meituan.net/280.0/groupop/ba4422451254f23e117dedb4c6c865fc10596.jpg'}}></Image>
              </View>
          </View>

        </View>

          <View style={{flexDirection:'row', flex:1}}>
          
          <View style={{flex:1, flexDirection:'row'}}>
              <View style={{flex:3}}>
                  <Text style={[styles.font14, styles.greenCol, {marginTop:15, marginLeft:15}]}>0元餐来袭</Text>
                  <Text style={[styles.font14, styles.redCol, {marginLeft:15, marginTop:15}]}>免费吃喝玩乐购</Text>
              </View>
              <View style={{flex:2}}>
                  <Image style={{width:80, height:80, alignSelf:'center', justifyContent:'center'}} source={{uri:'http://p0.meituan.net/280.0/groupop/6bf3e31d75559df76d50b2d18630a7c726908.png'}}></Image>
              </View>
          </View>

          <View style={{flex:1, flexDirection:'row'}}>
              <View style={{flex:3}}>
                  <Text style={[styles.font14, styles.greenCol, {marginTop:15, marginLeft:15}]}>热门团购</Text>
                  <Text style={[styles.font14, styles.redCol, {marginLeft:15, marginTop:15}]}>大家都在买什么</Text>
              </View>
              <View style={{flex:2}}>
                  <Image style={{width:80, height:80, alignSelf:'center', justifyContent:'center'}} source={{uri:'http://p1.meituan.net/mmc/a616a48152a895ddb34ca45bd97bbc9d13050.png'}}></Image>
              </View>
          </View>
          
        </View>
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  rowFirst:{
    flexDirection:'row',
  },

  font30:{
    fontSize:30,
  },

  font14:{
    fontSize:14,
  },

  top20:{
    marginTop:20,
  },

  left20:{
    marginLeft:20,
  },

  right20:{
    marginRight:20,
  },

  bottom20:{
    marginBottom:20,
  },

  greenCol:{
    color:'#55A44B',
    fontWeight:'900',
  },

  redCol:{
    color:'#FF3F0D',
    fontWeight:'900',
  },

  height160:{
    height:180,
  },

  part_1_left:{
    flex:1,
    borderRightWidth:0.5,
    borderBottomWidth:1,
    borderColor:'#DCD7CD',
  },

  part_1_right:{
    flex:2,
    borderBottomWidth:1,
    borderColor:'#DCD7CD',
  },


});

AppRegistry.registerComponent('firstRNAppDemo', () => firstRNAppDemo);
