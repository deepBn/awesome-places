import {Navigation} from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';

//Register Screens
Navigation.registerComponent('awesome-places.Authscreen', () => AuthScreen);

//Start an App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-places.Authscreen', // unique ID registered with Navigation.registerScreen
    title: 'Login', // title of the screen as appears in the nav bar (optional)
  },
});