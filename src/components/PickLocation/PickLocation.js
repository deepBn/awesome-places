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
    },
    locationChosen: false
  };

  pickLocationHandler = event => {
    const coords = event.nativeEvent.coordinate;
    this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coords.latitude,
      longitude: coords.longitude
    });
    this.setState(prevState => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coords.latitude,
          longitude: coords.longitude
        },
        locationChosen: true
      }
    });
    this.props.onLocationPicked({
      latitude: coords.latitude,
      longitude: coords.longitude
    })
  };

  getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      const coordsEvent = {
        nativeEvent: {
          coordinate: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          }
        }
      };
      this.pickLocationHandler(coordsEvent);
    }, err => {
      console.log(err);
      alert('Fetching the position failed, Please pick one manually!');
    })
  };

  render() {
    let marker = null;

    if (this.state.locationChosen) {
      marker = <MapView.Marker coordinate={this.state.focusedLocation}/>
    }

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={this.state.focusedLocation}
          onPress={this.pickLocationHandler}
          ref={ref => this.map = ref}
        >
          {marker}
        </MapView>
        <View style={styles.button}>
          <Button title="Locate Me" onPress={this.getLocationHandler}/>
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