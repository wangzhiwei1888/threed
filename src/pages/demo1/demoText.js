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

// const Platform = require('Platform');

const Platform = {
  isTVOS:1
}
const {width, height, scale} = Dimensions.get("window");
// import styles from './style';

export default class App extends Component<{}> {

  constructor(props) {
    super(props);

    this.state = {
      dynamicText:'',
      platformStr:1
    }
  }

  reset = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      shouldRender: true,
    });
    setTimeout(()=>{
      LayoutAnimation.easeInEaseOut();
      this.setState({
        dynamicText: '',
        shouldRender: false,
      });
    }, 300);
  }

  addText = () => {
    this.setState({
      dynamicText: this.state.dynamicText + (Math.floor((Math.random() * 10) % 2) ? ' foo' : ' bar'),
    });
  }

  removeText = () => {
    this.setState({
      dynamicText: this.state.dynamicText.slice(0, this.state.dynamicText.length - 4),
    });
  }


  render() {

    return (
      <ScrollView >

        <View style={[styles.cont1]}>

          <View style={[styles.bg1]}>
            <Text lineBreakMode="tail" numberOfLines={1} style={{fontSize: 16, marginVertical:6}}>
              Truncated text is baaaaad.Truncated text is baaaaad.Truncated text is baaaaad.Truncated text is baaaaad.
            </Text>
          </View>

          <View style={[styles.bg1]}>
            <Text numberOfLines={1} adjustsFontSizeToFit={true} style={{fontSize: 40, marginVertical:6}}>
              Shrinking to fit available space is much better!Shrinking to fit available space is much better!
            </Text>
          </View>

          <View style={[styles.bg1]}>
            <Text numberOfLines={1} adjustsFontSizeToFit={true} style={{fontSize: 40, marginVertical:6}}>
              {'Add text to me to watch me shrink!' + ' ' + this.state.dynamicText}
            </Text>
          </View>

          <View style={{flexDirection:'row', justifyContent:'space-around', marginTop: 5, marginVertical:6}}>
            <Text
              style={{backgroundColor: '#ffaaaa'}}
              onPress={this.reset}>
              Reset
            </Text>
            <Text
              style={{backgroundColor: '#aaaaff'}}
              onPress={this.removeText}>
              Remove Text
            </Text>
            <Text
              style={{backgroundColor: '#aaffaa'}}
              onPress={this.addText}>
              Add Text
            </Text>
          </View>


          <View style={[styles.bg1]}>
            <Text numberOfLines={10} style={{fontFamily: (Platform.isTVOS ? 'Times' : 'Cochin')}}>
              {this.state.platformStr}
            </Text>
          </View>

          <View style={[styles.bg1]}>
            <Text style={{fontVariant: ['small-caps']}}>
              Small Caps{'\n'}
            </Text>
          </View>
          <View style={[styles.bg1]}>
            <Text style={{lineHeight: 35}}>
              A lot of space between the lines of this long passage that should
              wrap once.
            </Text>
          </View>

          <View style={[styles.bg1]}>
            <Text>Lorem ipsum dolor sit amet, <Text suppressHighlighting={false} style={{backgroundColor: 'white', textDecorationLine: 'underline', color: 'blue'}} onPress={() => null}>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</Text> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          </View>

          <View style={[styles.bg1]}>
            <Text>
              This text contains an inline blue view <View style={{width: 25, height: 25, backgroundColor: 'steelblue'}} /> and
              an inline image . Neat, huh?
            </Text>
          </View>

          <View style={[styles.bg1]}>
            <Text style={{fontSize: 20, textShadowOffset: {width: 2, height: 2}, textShadowRadius: 1, textShadowColor: '#00cccc'}}>
              Demo text shadow
            </Text>
          </View>


          <Text style={{backgroundColor: 'yellow'}}>
            Yellow container background,
            <Text style={{backgroundColor: '#ffaaaa'}}>
              {' '}red background,
              <Text style={{backgroundColor: '#aaaaff'}}>
                {' '}blue background,
                <Text>
                  {' '}inherited blue background,
                  <Text style={{backgroundColor: '#aaffaa'}}>
                    {' '}nested green background.
                  </Text>
                </Text>
              </Text>
            </Text>
          </Text>

          <View>
            <Text style={{letterSpacing: 0}}>
              letterSpacing = 0
            </Text>
            <Text style={{letterSpacing: 2, marginTop: 5}}>
              letterSpacing = 2
            </Text>
            <Text style={{letterSpacing: 9, marginTop: 5}}>
              letterSpacing = 9
            </Text>
            <Text style={{letterSpacing: -1, marginTop: 5}}>
              letterSpacing = -1
            </Text>
          </View>

          <View>
            <Text style={{textDecorationLine: 'underline', textDecorationStyle: 'solid'}}>
              Solid underline
            </Text>
            <Text style={{textDecorationLine: 'underline', textDecorationStyle: 'double', textDecorationColor: '#ff0000'}}>
              Double underline with custom color
            </Text>
            <Text style={{textDecorationLine: 'underline', textDecorationStyle: 'dashed', textDecorationColor: '#9CDC40'}}>
              Dashed underline with custom color
            </Text>
            <Text style={{textDecorationLine: 'underline', textDecorationStyle: 'dotted', textDecorationColor: 'blue'}}>
              Dotted underline with custom color
            </Text>
            <Text style={{textDecorationLine: 'none'}}>
              None textDecoration
            </Text>
            <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
              Solid line-through
            </Text>
            <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'double', textDecorationColor: '#ff0000'}}>
              Double line-through with custom color
            </Text>
            <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'dashed', textDecorationColor: '#9CDC40'}}>
              Dashed line-through with custom color
            </Text>
            <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'dotted', textDecorationColor: 'blue'}}>
              Dotted line-through with custom color
            </Text>
            <Text style={{textDecorationLine: 'underline line-through'}}>
              Both underline and line-through
            </Text>
          </View>

          <Text selectable={true}>
            This text is <Text style={{fontWeight: 'bold'}}>selectable</Text> if you click-and-hold.
          </Text>

          <View>
            <Text style={{fontStyle: 'normal'}}>
              Normal text
            </Text>
            <Text style={{fontStyle: 'italic'}}>
              Italic text
            </Text>
          </View>

          <View>
            <Text style={{color: 'red'}}>
              Red color
            </Text>
            <Text style={{color: 'blue'}}>
              Blue color
            </Text>
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