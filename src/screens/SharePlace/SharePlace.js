import React, {Component} from 'react';
import {View, Button, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import {addPlace} from '../../store/actions';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import PickLocation from '../../components/PickLocation/PickLocation';
import PickImage from '../../components/PickImage/PickImage';

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

  /*placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };*/

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Share a place with us!</HeadingText>
          </MainText>
          <PickImage/>
          <PickLocation/>
          <PlaceInput placeholder="Place name"/>
          <View style={styles.button}>
            <Button title="Share the Place!" onPress={() => undefined}/>
          </View>
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
  button: {
    margin: 8
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(addPlace(placeName))
  }
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
