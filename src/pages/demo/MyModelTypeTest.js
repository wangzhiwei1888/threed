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

import { Panel } from '../../UIComponents/myPanel';
import styles from './style';


import UITypeModal from './../../UIComponents/UITypeModal';


export default class myPanel extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      myRandom:1,
      dataList:[
        {
          "cellTitle": "整体",
          "isHilight": true,
          "key": "ALL"
        },
        {
          "cellTitle": "其他",
          "isHilight": false,
          "key": "123123"
        }
      ],
      showChoiceBtn:false,

      defaultType:'整体',
      oldDefaultType:'整体',
      defaultTypeIndex:0,
      oldDefaultTypeIndex:0,
    }
  }

  getDateFn = () =>{

    alert('获取数据')
  }

  

  cancelClick = () =>{
    
    this.setState({
      showChoiceBtn:false,
      defaultType:this.state.oldDefaultType,
      defaultTypeIndex:this.state.oldDefaultTypeIndex
    })
  }

  sureBtnClick = () =>{

    this.setState({
      showChoiceBtn:false,
      oldDefaultTypeIndex:this.state.defaultTypeIndex,
      
    })

    var _this = this;

    setTimeout(function(){

      _this.getDateFn();

    },100)

    
  }

  choiceBtnClick = (index,key) =>{

    
    var dataList = this.state.dataList;
    for(var i=0;i<dataList.length;i++){

      dataList[i].isHilight = false;

    }

    dataList[index].isHilight = true;
    
    this.setState({
      dataList:dataList,
      defaultType:dataList[index].cellTitle,
      defaultTypeIndex:index,
      myRandom:Math.random()
    })

  }

  _setModalVisible=()=>{

    this.setState({
      showChoiceBtn:true,
      myRandom:Math.random(),
      oldDefaultType:this.state.defaultType,
      oldDefaultTypeIndex:this.state.defaultTypeIndex,
    })

    var dataList = this.state.dataList;
    for(var i=0;i<dataList.length;i++){

      dataList[i].isHilight = false;

    }
    dataList[this.state.oldDefaultTypeIndex].isHilight = true;


  }

  render() {

    return (
      <View style={styles.container}>
        
        <View style={{justifyContent: 'center',alignItems:'center'}}>

          <TouchableHighlight style={styles.btn} onPress={this._setModalVisible}>
            <Text style={styles.btnColor} > 选择业务线</Text>
          </TouchableHighlight>

          <View style={{marginTop:10}}>
            <Text >{this.state.defaultType}</Text>
          </View>

        </View>

        <UITypeModal mykey={this.state.myRandom} dataList={this.state.dataList} isOpen={this.state.showChoiceBtn} onClose={this.cancelClick} sureBtnClick={this.sureBtnClick} choiceBtnClick={this.choiceBtnClick} />
        

        
          
      </View>
    );

  }
}



