
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  Dimensions
} from 'react-native';

const {width, height, scale} = Dimensions.get("window");

import PageConfig from './PageConfig';

export default class HomeScreen extends Component<{}> {

  constructor(props) {
    super(props);

    var arr = PageConfig.pages;

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(arr),
    };
    
  }

  render() {

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <View style={styles.listBox}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={
              (rowData) => 
                <View>
                  <Button
                    onPress={() => this.props.navigation.navigate(rowData)}
                    title={rowData}
                  />
                </View>
            }
          />
        </View>
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({

   listBox:{
     height:height,
    width:width,
    marginTop:80,
   }
});

