/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
} from 'react-native';


var FullWidth = Dimensions.get('window').width;
var FullHeight = Dimensions.get('window').height;

export default class TextInputDemo extends Component {

    constructor(props){

        super(props);

        this.state = {

            text:''
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View>
                    <Text>{this.state.text}</Text>
                </View>

                <TextInput style={styles.textInputStyle}

                           //默认value
                           placeholder="请输入内容"
                           placeholderTextColor="red"
                           //安全输入
                           secureTextEntry={true}
                           //删除按钮模式
                           clearButtonMode="while-editing"
                           clear={() => {
                                console.log('清除完成');
                           }}
                           //是否允许编辑
                           editable={true}
                           //选择时的颜色
                           selectionColor="#f00"
                           //键盘类型
                           keyboardAppearance="dark"
                           //返回键类型
                           returnKeyType="go"
                           //最大输入长度
                           maxLength={12}
                           //允许输入的行数
                           numberOfLines={2}
                           //输入改变
                           onChangeText={(text) =>{
                                console.log('输入内容改变');
                                this.setState({text})
                           }}
                           //动态值
                           value={this.state.text}
                           //结束输入(输入完成点击return)
                           onEndEditing={()=>{
                                console.log('结束输入');
                           }}
                           //点击确定按钮
                           onSubmitEditing={() =>{
                                console.log('点击了确定按钮');
                           }}
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

    textInputStyle: {

        width: 200,
        height: 30,
        alignSelf:'center',
        backgroundColor:'gray',
        color:'#fff',
    }
});

AppRegistry.registerComponent('TextInputDemo', () => TextInputDemo);
