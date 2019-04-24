import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Image} from 'react-native';
import {connect} from 'react-redux';

//import PlaceInput from '../../components/PlaceInput/PlaceInput';
import {addPlace} from '../../store/actions';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import imagePrview from '../../assets/beautiful-image.jpg';

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({
          side: 'left'
        });
      }
    }
  };

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Share a place with us!</HeadingText>
          </MainText>
          <View style={styles.placeholder}>
            <Image source={imagePrview} style={styles.imagePreview}/>
          </View>
          <View style={styles.button}>
            <Button title="Pick Image" onPress={() => {
            }}/>
          </View>
          <View style={styles.placeholder}>
            <Text>Map</Text>
          </View>
          <View style={styles.button}>
            <Button title="Locate Me" onPress={() => {
            }}/>
          </View>
          <DefaultInput placeholder="Place name"/>
          <View style={styles.button}>
            <Button title="Share the Place!" onPress={() => {
            }}/>
          </View>
          <DefaultInput onPlaceAdded={this.placeAddedHandler}/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(addPlace(placeName))
  }
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
