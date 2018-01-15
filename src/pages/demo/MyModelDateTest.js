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
  Button,
  Dimensions,
  TouchableHighlight
} from 'react-native';

const { width, height, scale } = Dimensions.get("window");

import styles from './style';


import moment from 'moment';

const minDate = moment("2000-06");
const maxDate = moment("2100-06");
const nowDate = moment().format('YYYY-MM');
function mdate(YM){

    var y = Number(YM.split('-')[0]);
    var m = Number(YM.split('-')[1]);

    var d = new Date(y,m,1);
    d.setMonth(d.getMonth() - 7);
    var m = d.getMonth() + 1;
    m = (m <= 10 )? '0' + m : m.toString();
    var s = d.getFullYear() +'-'+ m;
    return s;

}

import UIDateModal from './../../UIComponents/UIDateModal';


export default class myPanel extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      myRandom:1,
      mydate:nowDate,
      oldDate:"",
      showChoiceTime:false,
    }
  }

  getDateFn = () =>{
    console.warn('获取数据')
  }

  showTimeChoiceFn = () =>{

    let oldDate = this.state.mydate;

    this.setState({
      showChoiceTime:true,
      oldDate:oldDate
    })

  }
  cancelTimeClick = () =>{

    this.setState({
      showChoiceTime:false,
      mydate:this.state.oldDate
    })
  }

  sureTimeClick = () =>{
    this.setState({
      showChoiceTime:false
    })

    this.getDateFn();
    
  }

  onDateChange = (date) => {
    
    let mydate = moment(date).format('YYYY-MM');
    this.setState({
        mydate: mydate,
        myRandom:Math.random()
    });

  }

  render() {

    return (
      <View style={styles.container}>
        
        <View style={{justifyContent: 'center',alignItems:'center'}}>

          <TouchableHighlight style={styles.btn} onPress={this.showTimeChoiceFn}>
            <Text style={styles.btnColor} > 选择日期</Text>
          </TouchableHighlight>

          <View style={{marginTop:10}}>
            <Text >{this.state.mydate}</Text>
          </View>

        </View>


        <UIDateModal 
          mykey={this.state.myRandom} 
          isOpen={this.state.showChoiceTime} 
          minDate={minDate}
          maxDate={maxDate}
          defaultDate={moment(this.state.mydate)}
          mode={'month'}
          onDateChange={this.onDateChange}
          sureTimeClick = {this.sureTimeClick}
          cancelTimeClick = {this.cancelTimeClick}

        />
          
      </View>
    );

  }
}



