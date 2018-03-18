import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {connect} from 'react-redux';

class Screen1 extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Screen One',
    drawerIcon: () => (
      <Image
        source={{uri: `https://dummyimage.com/60x60/000/fff.jpg&text=1`}}
        style={{width: 30, height: 30, borderRadius: 15}}
      />
    )
  }

  render() {
    const {auth} = this.props;
    return (
      <View style={styles.container}>
        <Text>{auth.data.userEmail}</Text>
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
})


const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Screen1);