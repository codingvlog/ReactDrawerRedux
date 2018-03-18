import React from 'react';
import { addNavigationHelpers,StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { addListener } from '../utils/redux';
import LoginScreen from '../Containers/LoginScreen';
import {AppNavigation} from './AppNavigation';


class ReduxNavigation extends React.Component {
  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigation
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(ReduxNavigation);