import { AppRegistry } from 'react-native';
// import App from './App';
// import App from './1-components/ActivityIndicator/ActivityIndicatorScreen';

// import App from './1-components/Button/ButtonScreen';

import App from './pages/home';

AppRegistry.registerComponent('threed', () => App);

AppRegistry.runApplication('threed',{
	rootTag:document.getElementById('root')
})
