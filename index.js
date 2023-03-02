/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import AppIOS from './App.ios';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () =>
  Platform.OS === 'ios' ? AppIOS : App,
);
