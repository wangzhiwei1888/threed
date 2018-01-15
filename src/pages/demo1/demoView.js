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
  ScrollView,
  Platform,

} from 'react-native';

alert(Platform.OS)
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
  web:'web'
});

const {width, height, scale} = Dimensions.get("window");
// import styles from './style';

export default class App extends Component<{}> {

  constructor(props) {
    super(props);

    this.state = {

    }
  }



  render() {

    return (
      <ScrollView >

        <View style={[styles.cont1]}>
          <View><Text>{instructions}</Text></View>
          <View>
            <View style={{opacity: 0}}><Text>Opacity 0</Text></View>
            <View style={{opacity: 0.1}}><Text>Opacity 0.1</Text></View>
            <View style={{opacity: 0.3}}><Text>Opacity 0.3</Text></View>
            <View style={{opacity: 0.5}}><Text>Opacity 0.5</Text></View>
            <View style={{opacity: 0.7}}><Text>Opacity 0.7</Text></View>
            <View style={{opacity: 0.9}}><Text>Opacity 0.9</Text></View>
            <View style={{opacity: 1}}><Text>Opacity 1</Text></View>
          </View>

          <View style={{flexDirection: 'column'}}>

            <View style={{
              width:95,
              height:10,
              borderWidth:0.5,
              marginBottom: 5,
              backgroundColor:'red',
              overflow:'hidden'
            }}>
              <View style={{width: 200, height: 20, backgroundColor:'blue'}}>
                <Text style={{color:'#fff'}}>Overflow hidden</Text>
              </View>
            </View>


            <View style={{
              width: 95,
              height: 10,
              marginBottom: 5,
              borderWidth: 0.5,
              backgroundColor:'yellow'
            }}>
              <View style={{width: 200, height: 20}}>
                <Text>Overflow visible</Text>
              </View>
            </View>


            <View style={{
              borderRadius: 100,
              borderWidth: 0.5,
              borderColor:'red',
              width: 200,
              height: 200,
              backgroundColor:'#ddd'}}
            />



          </View>

          <View style={[
            {position:'relative',backgroundColor:'blue',flex:1, width:300,height:100,}
          ]}>
            <View style={[
              styles.zIndex,
              {backgroundColor: '#E57373', zIndex: 10}
            ]}>
              <Text>ZIndex 1</Text>
            </View>

            <View style={[
              styles.zIndex,
              { left:50, backgroundColor: '#000', zIndex: 2,alignSelf:'flex-end'}
            ]}>
              <Text style={{color:'#fff'}}>ZIndex 1</Text>
            </View>
          </View>

          <View style={[
            {position:'relative',backgroundColor:'#000',marginTop:10,flex:1, width:300,height:100,justifyContent:'center'}
          ]}>
            <View style={[
              {alignSelf:'center',}
            ]}>
              <Text style={{color:'#fff'}}>ZIndex 1</Text>
            </View>
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