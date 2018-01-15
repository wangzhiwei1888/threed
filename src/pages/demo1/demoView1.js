/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  Modal,
  Button,
  LayoutAnimation,
  ScrollView
} from 'react-native';

const Platform = require('Platform');

const {width, height, scale} = Dimensions.get("window");
import styles from './style';

export default class App extends Component<{}> {

  constructor(props) {
    super(props);

    this.state = {

    }
  }



  render() {

    return (
      <ScrollView >
        <View style={{"justifyContent": "center","alignItems": "center"}}>
          <View style={{height:100,backgroundColor:'blue'}}>

          </View>
        </View>

        <View>
          <View style={{height:100,backgroundColor:'blue'}}>

          </View>
        </View>

        <View>
          <View style={{backgroundColor:'red',marginTop:10,paddingTop:10,paddingBottom:10,flexDirection:'row'}}>
            <View style={[styles.box]}><Text>1</Text></View>
            <View style={[styles.box]}><Text>2</Text></View>
            <View style={[styles.box]}><Text>3</Text></View>
            <View style={[styles.box]}><Text>4</Text></View>
            <View style={[styles.box]}><Text>5</Text></View>
            <View style={[styles.box]}><Text>6</Text></View>
            <View style={[styles.box]}><Text>7</Text></View>
            <View style={[styles.box]}><Text>8</Text></View>
            <View style={[styles.box]}><Text>9</Text></View>
            <View style={[styles.box]}><Text>10</Text></View>

          </View>
        </View>


        <View>
          <View style={{backgroundColor:'red',marginTop:10, paddingTop:10,paddingBottom:10,flexDirection:'row',flexWrap:'wrap'}}>
            <View style={[styles.box]}><Text>1</Text></View>
            <View style={[styles.box]}><Text>2</Text></View>
            <View style={[styles.box]}><Text>3</Text></View>
            <View style={[styles.box]}><Text>4</Text></View>
            <View style={[styles.box]}><Text>5</Text></View>
            <View style={[styles.box]}><Text>6</Text></View>
            <View style={[styles.box]}><Text>7</Text></View>
            <View style={[styles.box]}><Text>8</Text></View>
            <View style={[styles.box]}><Text>9</Text></View>
            <View style={[styles.box]}><Text>10</Text></View>

          </View>
        </View>

      </ScrollView>
    );
  }

















}
