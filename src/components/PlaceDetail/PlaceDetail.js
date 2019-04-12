import React from 'react';
import {Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const placeDetail = props => {
  const {selectedPlace, onItemDeleted, onModalClosed} = props;
  let modalContent = null;
  if (selectedPlace) {
    modalContent = (
      <View>
        <Image source={selectedPlace.image} style={styles.placeImage}/>
        <Text style={styles.placeName}>{selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal visible={selectedPlace !== null} animationType="slide" onRequestClose={onModalClosed}>
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <TouchableOpacity onPress={onItemDeleted}>
            <View style={styles.deleteButton}>
              <Icon name="delete" size={30} color="red"/>
            </View>
          </TouchableOpacity>
          <Button title="Close" onPress={onModalClosed}/>
        </View>
      </View>
    </Modal>
  );
};

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

export default placeDetail;
