import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import {Button,Icon} from 'native-base'
import InitialScreen from '../Containers/InitialScreen'
import LoginScreen from '../Containers/LoginScreen'
import SignupScreen from '../Containers/SignupScreen'
import ForgottenPasswordScreen from '../Containers/ForgottenPasswordScreen'
import Screen1 from '../Containers/Screen1'
import Screen2 from '../Containers/Screen2'
import Screen3 from '../Containers/Screen3'
import SideBar from "../Containers/sidebar"

// drawer stack
const DrawerStack = DrawerNavigator({
  screen1: { screen: Screen1 },
  screen2: { screen: Screen2 },
  screen3: { screen: Screen3 },
},
{
    contentComponent: props => <SideBar {...props} />
})

const drawerButton = (navigation) =>
  <Button transparent onPress={() => navigation.navigate("DrawerToggle")}>
      <Icon name="menu" />
  </Button>


const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    title: 'ReactDrawerRedux',
    headerLeft: drawerButton(navigation)
  })
})

// login stack
const LoginStack = StackNavigator({
  loginScreen: { screen: LoginScreen },
  signupScreen: { screen: SignupScreen, navigationOptions: { title: 'Sign Up' }  },
  forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
  navigationOptions: {
    headerStyle: {backgroundColor: '#E73536'},
    title: 'You are not logged in',
    headerTintColor: 'white'
  }
})

const initialStack = StackNavigator({
  initialScreen : {screen : InitialScreen}
})

// Manifest of possible screens
export const AppNavigation = StackNavigator({
  drawerStack: { screen: DrawerNavigation },
  loginStack: { screen: LoginStack },
  initialStack : {screen: initialStack}
}, {
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'initialStack',
})
