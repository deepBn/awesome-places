import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class SideDrawer extends Component {
  render() {
    return (
      <View style={[styles.container, {width: Dimensions.get('window').width * 0.8}]}>
        <TouchableOpacity>
          <View style={styles.drawerItem}>
            <Icon name="logout-variant" size={30} style={styles.drawerItemIcon}/>
            <Text>Sidedrawer</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 30,
    flex: 1
  },
  drawerItem: {
    flexDirection:'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#eee'
  },
  drawerItemIcon: {
    color: '#aaa',
    marginRight: 10
  }
});

export default SideDrawer;
