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
    DatePickerIOS,
Dimensions,
} from 'react-native';

export default class DatePickerIOSDemo extends Component {

    constructor(props) {

        super(props);

        this.state = {

            date: new Date(),
        }
    }

    render() {
        //使用DatePickerIOS来在iOS平台上渲染一个日期/时间选择器。
        // 这是一个受约束的(Controlled)组件
        // ，所以你必须监听onDateChange回调函数并且及时更新date属性来使得组件更新，
        // 否则用户的修改会立刻被撤销来确保当前显示值和props.date一致。
        return (
            <View style={styles.container}>

                <DatePickerIOS
                    style={styles.DataPickerIOSStyle}
                    mode="datetime"
                    onDateChange={(date) =>{

                        console.log('选择了新的时间:'+date);

                        this.setState({

                              date:date
                        })
                     }}
                    date={this.state.date}
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

    DataPickerIOSStyle: {

        width: Dimensions.get('window').width,
        height: 300,
        alignSelf: 'center',
    }
});

AppRegistry.registerComponent('DatePickerIOSDemo', () => DatePickerIOSDemo);
