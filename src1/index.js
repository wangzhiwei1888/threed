import { AppRegistry } from 'react-native';
// import App from './App';
// import App from './1-components/ActivityIndicator/ActivityIndicatorScreen';

import App from './1-components/Button/ButtonScreen';

AppRegistry.registerComponent('threed', () => App);

AppRegistry.runApplication('threed',{
	rootTag:document.getElementById('root')
})
