

var Swiper = require('react-native-swiper');
// var React = require('react-native');

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  } from 'react-native';


//const url = 'http://localhost:4000/toilet/toilet/html/weather.html';
//const url = 'http://123.57.39.116:3000/html/weather.html';

// 滚动大图
var sliderImgs = [
  'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
  'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
  'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];

// 功能分类图片
var BUIcon = [
  'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png',
  'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png',
  'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png',
  'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/gonglue.png'
];

// 底部图片
var bottomImages = [
  'http://webresource.c-ctrip.com/ResCRMOnline/R5/html5/images/zzz_pic_salead01.png',
  'http://images3.c-ctrip.com/rk/apph5/B1/201505/app_home_ad06_310_120.jpg'
];

var Slider = React.createClass({

    render:function(){

        return(

              //showsButtons：显示左右切换按钮 showsPagination：显示页码
              <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} height={80} showsPagination={false}>
                <Image style={[styles.slide, ]} source={{uri:sliderImgs[0]}}></Image>
                <Image style={[styles.slide]} source={{uri:sliderImgs[1]}}></Image>
                <Image style={[styles.slide]} source={{uri:sliderImgs[2]}}></Image>
              </Swiper>
          );
    }

});


//好像这样不行啊
// Var Weather = React.createClass({
//     render:function(){
//               return(
//             <ScrollView>
//               <View style={styles.container}>
//                 <Slider/>
//               </View>
//             </ScrollView>
//           );

//     }

// });

class Weather extends Component{
  render(){
        return(

        //justifyContent:该组件下的子组件垂直居中 alignItems：该组件下的子组件水平居中
        //onPress={()=>{console.log('onpress');}} 点击事件
        //底层是ScrollView+View
        <ScrollView>
          <View style={styles.container}>
            <Slider/>

            <View style={[styles.sbu_view, styles.sbu_red, {flexDirection:'row', marginTop:5}]}>

                <TouchableHighlight underlayColor={'#FA6778'} style={{flex:1,}}>
                  <View style={[styles.sbu_flex, styles.sbu_borderRight, ]}>
                    <Text style={[styles.font16, {alignSelf:'center', marginTop:10}]}>酒店</Text>
                    <Image style={[styles.sbu_icon_img, {alignSelf:'center', alignItems:'center', marginTop:5}]} source={{uri:BUIcon[0]}}></Image>
                  </View>

                </TouchableHighlight>

                <View style={{flex:1, flexDirection:'column'}}>
                  <View style={{flex:1, borderColor:'white', justifyContent:'center', alignItems:'center', borderRightWidth:0.5, borderBottomWidth:0.5, }}>
                      <Text style={{fontSize:16, color:'white',}}>海外</Text>
                    </View>
                    <View style={{flex:1, justifyContent:'center', alignItems:'center',  borderColor:'white', borderRightWidth:0.5, borderBottomWidth:0.5,}}>
                      <Text style={{fontSize:16, color:'white'}}>周边</Text>
                    </View>
                </View>

               <View style={{flex:1, flexDirection:'column'}}>
                    <View style={{flex:1, justifyContent:'center', alignItems:'center', borderColor:'white', borderRightWidth:0.5, borderBottomWidth:0.5, }}>
                      <Text style={{fontSize:16, color:'white'}}>团购·特惠</Text>
                    </View>
                    <View style={{flex:1, justifyContent:'center', alignItems:'center',  borderColor:'white', borderRightWidth:0.5, borderBottomWidth:0.5,}}>
                      <Text style={{fontSize:16, color:'white'}}>客栈·公寓</Text>
                    </View>
                </View>

            </View>

            <View style={[styles.sbu_view, styles.sbu_green, {flex:1, flexDirection:'row'}]}>
                
                <TouchableHighlight style={[styles.sbu_borderRight, {flex:1}]} underlayColor={'#5EBE00'} onPress={()=>{
                    console.log('onpress');
                }}>
                  <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize:16, color:'white', marginTop:10}}>机票</Text>
                    <Image style={{width:40, height:40, alignItems:'center', marginTop:5}} source={{uri:BUIcon[1]}}></Image>
                  </View>
                </TouchableHighlight>

                <View style={[{flex:1}, styles.sbu_borderRight]}>
                  <View style={{flex:1, flexDirection:'column',justifyContent:'center', alignItems:'center', borderBottomColor:'#fff', borderBottomWidth:0.5}}>
                    <Text style={{color:'white', fontSize:16}}>火车票</Text>
                  </View>
                  <View style={{flex:1, flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'white', fontSize:16, }}>接收机</Text>
                  </View>
                </View>

                <View style={[{flex:1}, styles.sbu_borderRight]}>
                  <View style={{flex:1, flexDirection:'column',justifyContent:'center', alignItems:'center', borderBottomColor:'#fff', borderBottomWidth:0.5}}>
                    <Text style={{color:'white', fontSize:16}}>汽车票</Text>
                  </View>
                  <View style={{flex:1, flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'white', fontSize:16, }}>自驾游</Text>
                  </View>
                </View>

          </View>

          <View style={[styles.sbu_blue, {flex:1, flexDirection:'row',}, styles.sbu_view,]}>
            
            <TouchableHighlight style={[{flex:1,}, styles.sbu_borderRight]} underlayColor={'#3D98FF'} onPress={()=>{console.log('点击了旅游按钮');}}>
              <View style={{flex:1}}>
                <Text style={{color:'white', fontSize:16, marginTop:10, alignSelf:'center'}}>旅游</Text>
                <Image style={{width:40, height:40, alignSelf:'center', marginTop:5}} source={{uri:BUIcon[2]}}></Image>
              </View>
            </TouchableHighlight>

            <View style={{flex:1, flexDirection:'column'}}>
              <View style={[styles.sbu_borderRight, styles.sbu_borderBottom, {flex:1, alignItems:'center', justifyContent:'center'}]}>
                <Text style={{color:'white', fontSize:16}}>门票·玩乐</Text>
              </View>
              <View style={[styles.sbu_borderRight, styles.sbu_borderBottom, {flex:1, alignItems:'center', justifyContent:'center'}]}>
                <Text style={{color:'white', fontSize:16}}>出境WIFI</Text>
              </View>
            </View>


          <View style={{flex:1, flexDirection:'column'}}>
              <View style={[styles.sbu_borderRight, styles.sbu_borderBottom, {flex:1, alignItems:'center', justifyContent:'center'}]}>
                <Text style={{color:'white', fontSize:16}}>邮轮</Text>
              </View>
              <View style={[styles.sbu_borderRight, styles.sbu_borderBottom, {flex:1, alignItems:'center', justifyContent:'center'}]}>
                <Text style={{color:'white', fontSize:16}}>签证</Text>
              </View>
          </View>
        </View>
      
        <View style={[styles.sbu_yellow, styles.sbu_view, {flexDirection:'row', }]}>
          
          <TouchableHighlight style={[{flex:1, flexDirection:'column', }, styles.sbu_borderRight]} underlayColor={'#FC9720'}
           onPress={()=>{console.log('点击了攻略');}}>
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
              <Text style={{color:'white', fontSize:16, marginTop:10}}>攻略</Text>
              <Image style={{width:40, height:40, marginTop:5}} source={{uri:BUIcon[3]}}></Image>
            </View>
          </TouchableHighlight>


          <View style={[{flex:1, flexDirection:'column'}, styles.sbu_borderRight,]}>
              <View style={[{flex:1, alignItems:'center', justifyContent:'center'}, styles.sbu_borderBottom]}>
                <Text style={{color:'white', alignItems:'center', justifyContent:'center'}}>周末游</Text>
              </View>
              <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'white', alignItems:'center', justifyContent:'center'}}>礼品卡</Text>
              </View>
          </View>

          <View style={[{flex:1, flexDirection:'column', }]}>
              <View style={[{flex:1,alignItems:'center', justifyContent:'center'}, styles.sbu_borderBottom]}>
                <Text style={{color:'white', alignItems:'center', justifyContent:'center'}}>美食·购物</Text>
              </View>
              <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'white', alignItems:'center', justifyContent:'center'}}>更多</Text>
              </View>
          </View>
        </View>

        <View style={{height:100, marginTop:20, marginLeft:5, marginRight:5, borderWidth:1, borderColor:'gray', flexDirection:'row'}}>
          <View style={{flex:1, flexDirection:'row', borderRightWidth:0.5, borderColor:'gray'}}>
            <View style={{justifyContent:'center', alignItems:'center', flex:3}}>
              <Text style={{fontSize:16, color:'black'}}>攻略</Text>
              <Text style={{fontSize:12, color:'gray', marginTop:10}}>即使请购，超值预售</Text>
            </View>
            <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
              <Image style={{width:40, height:40,}} source={{uri:BUIcon[0]}}></Image>
            </View>
          </View>

          <View style={{flex:1, flexDirection:'row'}}>
            <View style={{justifyContent:'center', alignItems:'center', flex:3}}>
              <Text style={{fontSize:16, color:'black'}}>热门活动</Text>
              <Text style={{fontSize:12, color:'gray', marginTop:10}}>天天有礼，惊喜不停</Text>
            </View>
            <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
              <Image style={{width:40, height:40,}} source={{uri:BUIcon[1]}}></Image>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
          );
  }
}

var styles = StyleSheet.create({
  //container
    container:{
      backgroundColor:'#F2F2F2',
      flex:1,
    },
    //slider
    wrapper: {
      height:80,
    },
    slide: {
      height:80,
      resizeMode: Image.resizeMode.contain,
    },
    //sbu
    sbu_view:{
      height:84,
      marginLeft: 5,
      marginRight:5,
      borderWidth:1,
      borderRadius:5,
      marginBottom:10,
      flexDirection:'row',
    },
    sbu_red:{
      backgroundColor: '#FA6778',
      borderColor:'#FA6778',
    },

    sbu_blue:{
      backgroundColor: '#3D98FF',
      borderColor:'#3D98FF',
    },

    sbu_green:{
      backgroundColor: '#5EBE00',
      borderColor:'#5EBE00',
    },

    sbu_yellow:{
      backgroundColor: '#FC9720',
      borderColor:'#FC9720',
    },
    sbu_flex:{
      flex:1,
    },
    sbu_borderRight:{
      borderColor:'#fff',
      borderRightWidth: 0.5,
    },
    sbu_icon_img:{
      height:40,
      width:40,
      resizeMode:Image.resizeMode.contain,
    },
    sub_con_flex:{
      flex:1,
      //水平居中
      justifyContent: 'center',
      //垂直居中
      alignItems: 'center',
    },
    sub_text:{
      justifyContent:'center',
    },
    font16:{
      fontSize:17,
      color:'#FFF',
      fontWeight:'900',
    },
    sbu_borderBottom:{
      borderBottomWidth:0.5,
      borderBottomColor:'#fff',
    },
    img_view:{
      height:62,
      marginLeft:5,
      marginRight:5,
      flexDirection: 'row',
      marginBottom:20,
      backgroundColor:'#fff',
    },
    img_flex:{
      flex:1,
      borderWidth:1,
      borderColor:'#ccc',
    },
    img_wh: {
      height:59,
      borderRightWidth:0,
      resizeMode:Image.resizeMode.contain,
    }
});

module.exports = Weather;