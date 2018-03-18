import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import ReduxNavigation from './src/Navigation/ReduxNavigation';
import AppReducer from './src/reducers';
import { middleware } from './src/utils/redux';
import { createStore, applyMiddleware } from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';

// create our store
const store = createStore(AppReducer,applyMiddleware(promise(),thunk,logger))

export default class App extends React.Component {
  componentWillMount()
  {
    store.dispatch({type:"AUTHENTICATING"});
    firebase.auth().onAuthStateChanged((user) => {
      if (user) 
      {
        const authData = {
          userName : user.displayName,
          userEmail : user.email
        }
        store.dispatch(loggedInAction);
        store.dispatch({type:"AUTHENTICATED",payload:authData});
        
        const loggedInAction = NavigationActions.navigate({
          routeName: 'drawerStack',
        });
      } 
      else 
      {
        const loggedOutAction = NavigationActions.reset({
          index: 0,
          key:null,
          actions: [NavigationActions.navigate({ routeName: 'loginStack' })],
        });
        store.dispatch(loggedOutAction);
      }
    });
  }
  render() {
    return (
      <Provider store={store}>
        <ReduxNavigation />
      </Provider>
    );
  }
}