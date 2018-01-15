/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions,
  NavigatorIOS,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

const {width, height, scale} = Dimensions.get("window");

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from '../../UIComponents/myTable';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class Home extends Component{
  render() {
      return (
          <View style={styles.container1}>
              <TouchableOpacity
                      onPress={() => {this.props.navigator.push({
                          component:Temp,     // 需要跳转的页面
                          title:'跳转的界面'       // 跳转页面导航栏标题
                      })}}
                  >
                  <Text>Home页面</Text>
              </TouchableOpacity>
          </View>
      );
  }
}

class Temp extends Component{
  render() {
      return (
          <View style={styles.container1}>
              <TouchableOpacity
                      onPress={() => {this.props.navigator.pop()}}
                  >
                  <Text>Temp页面</Text>
              </TouchableOpacity>
          </View>
      );
  }
}

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  render() {

    const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
    const tableData = [
      ['1', '2', '3', '4'],
      ['a', 'b', 'c', 'd'],
    ];

    return (
      <View style={styles.container}>

        <NavigatorIOS
          initialRoute={{
             component: Home,
             title:'首页',   // 跳转页面导航栏标题
             leftButtonTitle:'左边',   // 实例化左边按钮
             onLeftButtonPress:() => {alert('左边')},  // 左边按钮点击事件
             rightButtonTitle:'右边',  // 实例化右边按钮
             onRightButtonPress:() => {alert('右边')}, // 右边按钮点击事件
             backButtonTitle: 'Custom Back',

          }}
          style={{flex: 1}}
        />





        {/*

          <View style={styles.listBox}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <Text>{rowData}</Text>}
            />
          </View>
        <View>
          <Table>
            <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
          </Table>
        </View>
        */}

      </View>
    );
  }
}




const styles = StyleSheet.create({

   head: { height: 40, backgroundColor: '#f1f8ff' },
   text: { marginLeft: 5 },
   row: { height: 30 },
   container:{

     flex:1,
   },
   container1: {
        // 背景颜色
        backgroundColor:'yellow',
        flex:1,
        // 对齐方式
        justifyContent:'center',
        alignItems:'center'
    },
   listBox:{
     height:height,
     width:width,
      marginTop:80,
   }
});
