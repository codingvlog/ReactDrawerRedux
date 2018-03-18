import { NavigationActions } from 'react-navigation';
import { AppNavigation } from '../Navigation/AppNavigation';

const firstAction = AppNavigation.router.getActionForPathAndParams('initialStack');
const tempNavState = AppNavigation.router.getStateForAction(firstAction);

const initialNavState = AppNavigation.router.getStateForAction(
  tempNavState
);

const nav = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    default:
    {
      nextState = AppNavigation.router.getStateForAction(action, state);
      break;
    }
  }
  return nextState || state;
}

export default nav;