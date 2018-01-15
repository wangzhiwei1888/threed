/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component,PropTypes } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions
} from 'react-native';

const { width, height, scale } = Dimensions.get("window");

class UIButton extends Component<{}> {


  static defaultProps = {
      show: true,
      onSureFn: function(){ alert('sure') },
      onCancelFn: function(){ alert('cancel') }
  };

  constructor(props) {
    
    super(props);
    
  }

  render() {

    const {
      ...
    } = this.props;

    return (
      <View>
        <Button
          onPress={onSureFn}
          title="onSureFn"
        />
      </View>
    );
    
  }
}

export {
  UIButton
}



const styles = StyleSheet.create({

   
  
});
