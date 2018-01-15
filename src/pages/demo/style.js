import React, {StyleSheet, Dimensions, PixelRatio} from 'react-native';
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "container2": {
        "paddingTop": 10,
        "alignItems": "center"
    },
    "btn": {
        "paddingTop": 12,
        "paddingRight": 10,
        "paddingBottom": 12,
        "paddingLeft": 10,
        "width": 300,
        "backgroundColor": "red",
        "justifyContent": "center",
        "alignItems": "center",
        "borderRadius": 18,
        "position": "relative",
        "zIndex": 101,
        "marginTop":10,
    },
    "btnColor": {
        "color": "#fff"
    },
    "panel": {
        "position": "absolute",
        "backgroundColor": "blue",
        "height":height,
        "left": 0,
        "top": 0,
        "bottom": 0,
        "right": 0,
        "zIndex": 100,
        "justifyContent": "center",
        "alignItems": "center"
    },
    "box":{
      "justifyContent": "center",
      "alignItems": "center",
      "width":300,
      "height":300,
      "backgroundColor":"#fff"
    },
    "navTop":{
      "marginTop":60,
    },
    "container": {
      "flex": 1,

    },
    "innerContainer": {
      
      "alignItems": 'center',
      
    },
    "addBottom":{
      "position":"absolute",
      
      "left":0,
      "right":0,
      "bottom":0
    },
    "timeBoxWrap":{
      "width":width,
      "paddingLeft":20,
      "paddingRight":20,
      "paddingBottom":20,
      "backgroundColor":"#fff",
    },
    "timeBox":{
      "height": 120,
      "marginTop":40,

      "backgroundColor":"blue",
      "alignItems":"center",
      "justifyContent":"center"
    },
    "TextWrap":{
      "marginTop":10,
      "marginBottom":10
    },
    "alignItems":{
      "alignItems":"center"
    }














});
