import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource('map-search-outline', 30),
    Icon.getImageSource('map-search', 30),
    Icon.getImageSource('share-outline', 30),
    Icon.getImageSource('share', 30),
    Icon.getImageSource('menu', 30),
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Find Place', // tab label as appears under the icon in iOS (optional)
          screen: 'awesome-places.FindPlaceScreen', // unique ID registered with Navigation.registerScreen
          icon: Platform.OS === 'android' ? sources[1] : sources[0], // local image asset for the tab icon unselected state (optional on iOS)
          selectedIcon: sources[1], // local image asset for the tab icon selected state (optional, iOS only. On Android, Use `tabBarSelectedButtonColor` instead)
          title: 'Find Place', // title of the screen as appears in the nav bar (optional)
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[4],
                id: 'sideDrawerToggle',
                title: 'Menu'
              }
            ]
          },
        },
        {
          label: 'Share Place',
          screen: 'awesome-places.SharePlaceScreen',
          icon: Platform.OS === 'android' ? sources[3] : sources[2],
          selectedIcon: sources[3],
          title: 'Share Place',
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[4],
                id: 'sideDrawerToggle',
                title: 'Menu'
              }
            ]
          },
        }
      ],
      drawer: { // optional, add this if you want a side menu drawer in your app
        left: { // optional, define if you want a drawer from the left
          screen: 'awesome-places.SideDrawer'
        }
      },
    });
  })
};

export default startTabs;
