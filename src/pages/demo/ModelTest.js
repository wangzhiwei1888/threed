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
  TouchableHighlight,
  Modal,
  Button
} from 'react-native';

const {width, height, scale} = Dimensions.get("window");
import styles from './style';

export default class App extends Component<{}> {

  constructor(props) {
    super(props);

    this.state = {
      show:false,

      animationType: 'none',
      modalVisible: false,
      transparent: true,
      showDown:false


    };
  }

  _onPressButton = () => {
    // alert(this.state.show)
    var show = !this.state.show;
    this.setState({
      show:show
    })

  }

  _setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }

  _setModalVisibleDown = (visible) => {
    this.setState({
      modalVisible: visible,
      showDown:true
    });
  }




  render() {

    const { show } = this.state;

    var modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.6)',
    };
    var innerContainerTransparentStyle = this.state.transparent
      ? {backgroundColor: 'rgba(255, 255, 255, 0.1)'}
      : {backgroundColor: 'rgba(255, 255, 255, 1)'}

    var activeButtonStyle = {
      backgroundColor: '#ddd'
    };


    return (
      
      <View style={styles.container1}>
        <View style={styles.container2}>

            <TouchableHighlight style={styles.btn} onPress={this._setModalVisible.bind(this,true)}>
              <Text style={styles.btnColor} > 上弹框</Text>
            </TouchableHighlight>


            <TouchableHighlight style={styles.btn} onPress={this._setModalVisibleDown.bind(this,true)}>
              <Text style={styles.btnColor} > 下弹框</Text>
            </TouchableHighlight>

            <Modal
              animationType={this.state.animationType}
              transparent={this.state.transparent}
              visible={this.state.modalVisible}
              onRequestClose={() => {this._setModalVisible(false)}}
              >

              <View style={[styles.container, modalBackgroundStyle]}>
                <View style={[styles.innerContainer, this.state.showDown?styles.addBottom:'', innerContainerTransparentStyle]}>

                  <View style={[styles.timeBoxWrap]}>

                    <View style={[styles.timeBox]}>
                      <Text style={styles.btnColor} >{this.state.showDown?'下弹框':'上弹框'}</Text>
                    </View>
                    <View style={[styles.alignItems]}>
                      <View style={[styles.TextWrap]}>
                        <Text>This modal was presented {this.state.animationType === 'none' ? 'without' : 'with'} animation.</Text>
                      </View>
                      <TouchableHighlight style={styles.btn} onPress={this._setModalVisible.bind(this,false)}>
                        <Text style={styles.btnColor} >关闭</Text>
                      </TouchableHighlight>
                    </View>
                    
                  </View>

                </View>
              </View>
            </Modal>


            {
              show ?
              <View style={styles.panel}>
                <Text>hello world</Text>
                <View style={styles.box}>
                  <Text>hello world</Text>
                </View>
              </View>
              :
              null
            }


        </View>
      </View>
    );
  }

















}
