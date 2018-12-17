/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Two as RootComp} from './src';

AppRegistry.registerComponent(appName, () => RootComp);
