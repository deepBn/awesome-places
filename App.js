import {Navigation} from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';

//Register Screens
Navigation.registerComponent('awesome-places.Authscreen', () => AuthScreen);
Navigation.registerComponent('awesome-places.FindPlaceScreen', () => FindPlaceScreen);
Navigation.registerComponent('awesome-places.SharePlaceScreen', () => SharePlaceScreen);

//Start an App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-places.Authscreen', // unique ID registered with Navigation.registerScreen
    title: 'Login', // title of the screen as appears in the nav bar (optional)
  },
});