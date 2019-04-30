import React, {Component} from 'react';
import {Button, Image, StyleSheet, View} from "react-native";
import imagePrview from "../../assets/beautiful-image.jpg";

class PickImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image source={imagePrview} style={styles.imagePreview}/>
        </View>
        <View style={styles.button}>
          <Button title="Pick Image" onPress={() => undefined}/>
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
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150
  },
  button: {
    margin: 8
  },
  imagePreview: {
    width: '100%',
    height: '100%'
  }
});

export default PickImage;