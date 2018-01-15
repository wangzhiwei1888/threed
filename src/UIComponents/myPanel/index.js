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

class Panel extends Component<{}> {


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
      onCancelFn,
      onSureFn,
      show,
      ...attributes
    } = this.props;

    alert(show)
    return (
      <View>
        {
          show ?
          <View style={styles.container}>
            <View>
              <Text> hello world </Text>
              <Button
                onPress={onCancelFn}
                title="onCancelFn"
              />
              <Button
                onPress={onSureFn}
                title="onSureFn"
              />
            </View>
          </View>
          :
          null
        }
      </View>
      
    );
    
  }
}

// module.exports = {
//   "Panel":Panel
// }

export {
  Panel
}



const styles = StyleSheet.create({

   
  
});
