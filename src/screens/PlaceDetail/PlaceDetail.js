import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';

import {deletePlace} from '../../store/actions';

class PlaceDetailScreen extends Component {
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.id);
    this.props.navigator.pop();
  };

  render() {
    const {selectedPlace} = this.props;

    return (
      <View style={styles.modalContainer}>
        <View>
          <Image source={selectedPlace.image} style={styles.placeImage}/>
          <Text style={styles.placeName}>{selectedPlace.name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <View style={styles.deleteButton}>
              <Icon name="delete" size={30} color="red"/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  },
  deleteButton: {
    alignItems: "center"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: id => dispatch(deletePlace(id))
  }
};

export default connect(null, mapDispatchToProps)(PlaceDetailScreen);
