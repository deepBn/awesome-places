import React, {Component} from 'react';
import {Button, StyleSheet, View, Dimensions} from "react-native";
import MapView from 'react-native-maps';

class PickLocation extends Component {
  state = {
    focusedLocation: {
      latitude: 22.6757521,
      longitude: 88.0495361,
      latitudeDelta: 0.0122,
      longitudeDelta: (Dimensions.get('window').width / Dimensions.get('window').height) * 0.0122
    }
  };

  pickLocationHandler = event => {
    const coords = event.nativeEvent.coordinate;
    this.setState(prevState => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coords.latitude,
          longitude: coords.longitude
        }
      }
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.focusedLocation}
          initialRegion={this.state.focusedLocation}
          onPress={this.pickLocationHandler}
        />
        <View style={styles.button}>
          <Button title="Locate Me" onPress={() => undefined}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  map: {
    width: '100%',
    height: 250
  },
  button: {
    margin: 8
  }
});

export default PickLocation;