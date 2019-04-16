import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import configureStore from './src/store/configureStore';
import AuthScreen from './src/screens/Auth/Auth';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';

//Register Screens
Navigation.registerComponent('awesome-places.Authscreen', () => AuthScreen, configureStore, Provider);
Navigation.registerComponent('awesome-places.FindPlaceScreen', () => FindPlaceScreen, configureStore, Provider);
Navigation.registerComponent('awesome-places.SharePlaceScreen', () => SharePlaceScreen, configureStore, Provider);
Navigation.registerComponent('awesome-places.PlaceDetailScreen', () => PlaceDetailScreen, configureStore, Provider);

//Start an App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-places.Authscreen', // unique ID registered with Navigation.registerScreen
    title: 'Login', // title of the screen as appears in the nav bar (optional)
  },
});