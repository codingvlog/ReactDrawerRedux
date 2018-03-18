import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';

const email = "tahubulat@tesst.com";
const password = "tahubulat";


class LoginScreen extends React.Component {
  login = () => {
    firebase.auth().signInWithEmailAndPassword(email,password)
    .catch((error)=>{
      this.props.dispatch({type:"AUTH_ERROR",payload:error});
    });
	}
  render() {
    return (
      <View style={styles.container}>
        <Text>
          {
            (this.props.auth.error.code==null)?
            "I am Login Screen"
            :
            this.props.auth.error.message
          }
        </Text>
        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate('signupScreen')} >
          Go to Signup
        </Text>

        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate('forgottenPasswordScreen')} >
          Go to Forgot Password
        </Text>

        <Text
          style={styles.linky}
          onPress={()=>this.login()}>
          Log In
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linky: {
    fontWeight: 'bold',
    color: '#4C3E54',
    paddingTop: 10
  }
});

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(LoginScreen);