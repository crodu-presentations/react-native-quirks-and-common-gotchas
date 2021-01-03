import 'react-native-gesture-handler';
import { AppRegistry, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import App from './src/App';
import { name as appName } from './app.json';

const { width } = Dimensions.get('window');
EStyleSheet.build({
  $rem: width > 340 ? 18 : 12,
});

AppRegistry.registerComponent(appName, () => App);
