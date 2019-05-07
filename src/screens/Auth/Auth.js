import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground, Dimensions} from 'react-native';

import startMainTabs from '../../screens/MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import backgroundImage from '../../assets/background.jpg';

class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      respStyles: {
        pwContainerDirection: 'column',
        pwContainerSpacing: 'space-between',
        pwWrapperWidth: '100%',
      }
    };
    Dimensions.addEventListener('change', dims => {
      const height = dims.window.height;
      this.setState({
        respStyles: {
          pwContainerDirection: height > 500 ? 'column' : 'row',
          pwContainerSpacing: 'space-between',
          pwWrapperWidth: height > 500 ? '100%' : '45%',
        }
      })
    })
  }

  loginHandler = () => {
    startMainTabs();
  };

  render() {
    let headingText = null;

    if (Dimensions.get('window').height > 500) {
      headingText = (
        <MainText>
          <HeadingText>Please Log In</HeadingText>
        </MainText>
      );
    }

    return (
      <ImageBackground style={styles.imageBackground} source={backgroundImage}>
        <View style={styles.container}>
          {headingText}
          <ButtonWithBackground
            color="#29aaf4"
            onPress={() => {
            }}
          >
            Switch to Login
          </ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Your E-Mail Address" style={styles.input}/>
            <View
              style={{
                flexDirection: this.state.respStyles.pwContainerDirection,
                justifyContent: this.state.respStyles.pwContainerSpacing
              }}
            >
              <View
                style={{width: this.state.respStyles.pwWrapperWidth}}
              >
                <DefaultInput placeholder="Password" style={styles.input}/>
              </View>
              <View
                style={{width: this.state.respStyles.pwWrapperWidth}}
              >
                <DefaultInput placeholder="Confirm Password" style={styles.input}/>
              </View>
            </View>
          </View>
          <ButtonWithBackground
            color="#29aaf4"
            onPress={this.loginHandler}
          >
            Login
          </ButtonWithBackground>
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
  },
  /*passwordContainer: {
    flexDirection: Dimensions.get('window').height > 500 ? 'column' : 'row',
    justifyContent: 'space-between'
  },
  passwordWrapper: {
    width: Dimensions.get('window').height > 500 ? '100%' : '45%'
  }*/
});

export default AuthScreen;
