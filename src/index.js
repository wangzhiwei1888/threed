import { AppRegistry } from 'react-native';
// import App from './App';
import App from './1-components/ActivityIndicator/ActivityIndicatorScreen';
AppRegistry.registerComponent('threed', () => App);

AppRegistry.runApplication('threed',{
	rootTag:document.getElementById('root')
})
