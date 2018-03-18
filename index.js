import { AppRegistry } from 'react-native';
import App from './App';
import firebase from 'firebase';
import {firebaseConf} from './firebaseconf';
firebase.initializeApp(firebaseConf);
AppRegistry.registerComponent('ReactDrawerRedux', () => App);
