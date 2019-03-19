/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native';

import ListItem from './src/components/ListItem/ListItem';

type Props = {};
export default class App extends Component<Props> {
  state = {
    placeName: '',
    places: []
  };

  placeNameChangedHandler = placeName => {
    this.setState({placeName});
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })
  };

  render() {
    const placesOutput = this.state.places.map(
      (place, index) => <ListItem key={index} placeName={place}/>
    );
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.placeInput}>
            <TextInput
              value={this.state.placeName}
              onChangeText={this.placeNameChangedHandler}
              placeholder="An awesome place"
            />
          </View>
          <View style={styles.placeButton}>
            <Button title="Add" onPress={this.placeSubmitHandler}/>
          </View>
        </View>
        <View style={styles.listContainer}>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 26
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});
