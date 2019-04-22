import React, {Component} from 'react';
import {View, Button, StyleSheet, ImageBackground} from 'react-native';

import startMainTabs from '../../screens/MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import backgroundImage from '../../assets/background.jpg';

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <ImageBackground style={styles.imageBackground} source={backgroundImage}>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Please Log In</HeadingText>
          </MainText>
          <Button title="Switch to Login" onPress={() => {
          }}/>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Your E-Mail Address" style={styles.input}/>
            <DefaultInput placeholder="Password" style={styles.input}/>
            <DefaultInput placeholder="Confirm Password" style={styles.input}/>
          </View>
          <Button title="Login" onPress={this.loginHandler}/>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%',
  },
  imageBackground: {
    flex: 1
  },
  input: {
    backgroundColor: '#eee',
    borderColor: '#bbb'
  }
});

export default AuthScreen;
