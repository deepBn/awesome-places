import React, {Component} from 'react';
import {Button, TextInput, View, StyleSheet} from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ''
  };

  placeNameChangedHandler = placeName => {
    this.setState({placeName});
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
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
});

export default PlaceInput;