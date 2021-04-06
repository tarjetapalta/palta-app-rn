import analytics from '@react-native-firebase/analytics';
import { NavigationState, Route, PartialState } from '@react-navigation/native';

const getActiveRoute = (
  state: NavigationState,
): Route<string> & {
  state?: NavigationState | PartialState<NavigationState>;
} => {
  if (state.index === undefined) {
    throw new Error('Invalid route');
  }

  const route = state.routes[state.index];

  if (route.state) {
    return getActiveRoute(route.state as NavigationState);
  }

  return route;
};

export const trackNavigationChange = async (
  prevState: NavigationState,
  nextState: NavigationState,
): Promise<void> => {
  const nextRoute = getActiveRoute(nextState);
  const previousRoute = getActiveRoute(prevState);

  if (
    nextRoute &&
    previousRoute &&
    nextRoute.name !== previousRoute.name &&
    nextRoute.name !== undefined
  ) {
    if (__DEV__) {
      // eslint-disable-next-line no-console
      console.log('NAVIGATE TO: ', nextRoute);
    }

    await analytics().logEvent(nextRoute.name);
  }
};
