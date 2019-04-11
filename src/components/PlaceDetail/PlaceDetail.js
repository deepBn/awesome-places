import React from 'react';
import {Modal, View, Image, Text, Button, StyleSheet} from 'react-native';

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
          <Button title="Delete" onPress={onItemDeleted} color="red"/>
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
  }
});

export default placeDetail;
