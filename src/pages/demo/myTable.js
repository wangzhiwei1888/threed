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
  Dimensions,
} from 'react-native';

const {width, height, scale} = Dimensions.get("window");

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from '../../UIComponents/myTable';

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    
  }

  render() {

    const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
    const tableData = [
      ['1', '2', '3', '4'],
      ['a', 'b', 'c', 'd'],
    ];

    return (
      <View style={styles.container1}>
        <View>
          <Table>
            <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
          </Table>
        </View>
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
        
    },
   listBox:{
     height:height,
     width:width,
      marginTop:80,
   }
});
