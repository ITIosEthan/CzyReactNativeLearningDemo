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
    Dimensions,
    Alert,
    ListView,
    Image,
    TouchableHighlight,

} from 'react-native';

var czyFullWidth = Dimensions.get('window').width;
var czyFullHeight = Dimensions.get('window').height;
var czyTextUrl = 'http://guangdiu.com/api/getranklist.php';

export default class CzyGoods extends Component {

    componentWillMount() {

        console.log('componentWillMount');

        this.fetchDataFromNet();
    }


    componentDidMount() {

        console.log('componentDidMount');

    }

    fetchDataFromNet() {


        fetch(czyTextUrl)
            .then((response)=>response.json())
            .then((responseJson)=> {

                // console.log('结果:'+responseJson);

                let json = JSON.stringify(responseJson);

                // console.log('json类型'+typeof(json));

                if (json) {

                    // console.log('json存在:'+json+'isLoaded:'+this.state.isLoaded);

                    //setState会调用render()
                    this.setState({
                        data: responseJson.data,
                        isLoaded: 'true',
                    });

                    // console.log('data存在:'+this.state.data+'isLoaded:'+this.state.isLoaded);
                }

                // console.log('json:'+json);
            })
            .done();
    }

    constructor(props) {

        console.log('constuctor');

        super(props);

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {

            //数据是否加载完成
            isLoaded: 'false',

            //数据源
            dataSource: ds.cloneWithRows(['zhangsan', 'lisi', 'wangwu']),
        }
    }

    render() {

        //还未加载完
        if (this.state.isLoaded == 'false') {
            return (
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Text>正在努力加载中...</Text>
                </View>
            )
        }

        // console.log('render内部1:'+this.state.data);
        //
        // console.log('render内部3:'+JSON.stringify(this.state.data[0]));
        //
        // console.log('render内部title:'+this.state.data[0].title);

        return (

            <ListView style={styles.listStyle}

                      dataSource={this.state.dataSource.cloneWithRows(this.state.data)}

                      renderRow={(rowData, sectionId, rowId) => this._renderRow(rowData, sectionId, rowId)}

                      showsVerticalScrollIndicator='false'
            />
        );
    }

    _renderRow(rowData, sectionId, rowId) {

        // console.log('rowData:'+ rowData + 'sectionId:' + sectionId + 'rowId:' + rowId);
        //
        // console.log('title = '+rowData.title);

        // let num1 = Number(rowId);

        // console.log('1111rowId='+rowId+'rowidType:'+typeof(rowId)+'number:'+typeof(num1));

        return (

            <TouchableHighlight underlayColor="clear" onPress={()=>
                                {
                                    Alert.alert(
                                        '提示',
                                        '这是第'+rowId+'个商品',
                                        [
                                           {text:'取消', onPress:()=> console.log('取消')},
                                           {text:'确定', onPress:()=>console.log('确定')},
                                        ]
                                    )
                                }}>
                <View style={styles.cellContainer}>
                    <View style={styles.cellLeftContainer}>
                        <Image style={styles.imageStyle} source={{uri:rowData.image}}/>
                    </View>
                    <View style={styles.cellRightContainer}>
                        <Text style={styles.titleStyle}>{rowData.title}</Text>
                        <Text style={styles.fromStyle}>{rowData.mall}</Text>
                    </View>
                </View>

            </TouchableHighlight>
        );
    }
}


const styles = StyleSheet.create({

    listStyle: {

        flex: 1,
        paddingTop:20,
    },

    cellContainer: {

        flex: 1,
        flexDirection: 'row',
    },

    cellLeftContainer: {

        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },

    cellRightContainer: {

        flex: 5,
    },

    imageStyle: {

        width: 60,
        height: 60,
    },


    titleStyle: {

        fontSize: 20,
        color: 'black',
        alignSelf: 'center',
        paddingTop:5,
    },

    fromStyle: {

        flex: 1,
        padding: 5,
        fontSize: 16,
        color: 'red',
    },


})

AppRegistry.registerComponent('CzyGoods', () => CzyGoods);
