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


const {width, height, scale} = Dimensions.get("window");


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


const styles = StyleSheet.create({
    "cont1": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 50,
        "paddingLeft": 0,
        "justifyContent": "center",
        "alignItems": "center"
    },
    "bg1": {
        "backgroundColor": "#ddd",
        "width": 300,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "marginTop": 10
    },
    "zIndex": {
        "width": 100,
        "height": 100,
        "left": 0,
        "top": 0,
        "backgroundColor": "blue",
        "justifyContent": "center",
        "alignItems": "center",
        "position": "absolute"
    },
    "box": {
        "width": 100,
        "height": 100,
        "marginLeft": 10,
        "backgroundColor": "blue",
        "justifyContent": "center",
        "alignItems": "center",
        "marginTop": 10
    }
});
