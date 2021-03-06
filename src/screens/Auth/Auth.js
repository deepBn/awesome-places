import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import {connect} from 'react-redux';

import startMainTabs from '../../screens/MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import backgroundImage from '../../assets/background.jpg';
import validate from '../../utility/validation';
import {tryAuth} from '../../store/actions';

class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authMode: 'login',
      mode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape',
      controls: {
        email: {
          value: "",
          valid: false,
          validationRules: {
            isEmail: true
          },
          touched: false
        },
        password: {
          value: "",
          valid: false,
          validationRules: {
            minLength: 6
          },
          touched: false
        },
        confirmPassword: {
          value: "",
          valid: false,
          validationRules: {
            equalTo: "password"
          },
          touched: false
        }
      }
    };
    Dimensions.addEventListener('change', this.dimensionChange)
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.dimensionChange)
  }

  dimensionChange = dims => {
    const height = dims.window.height;
    this.setState({mode: height > 500 ? 'portrait' : 'landscape'})
  };

  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return {
        authMode: prevState.authMode === 'login' ? 'signup' : 'login'
      }
    })
  };

  loginHandler = () => {
    const {controls} = this.state;
    const authData = {
      email: controls.email.value,
      password: controls.password.value
    };
    this.props.onTryAuth(authData);
    startMainTabs();
  };

  updateInputState = (key, value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === 'password') {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid:
              key === 'password'
                ? validate(
                prevState.controls.confirmPassword.value,
                prevState.controls.confirmPassword.validationRules,
                connectedValue
                )
                : prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(
              value,
              prevState.controls[key].validationRules,
              connectedValue
            ),
            touched: true
          }
        }
      };
    });
  };

  render() {
    let headingText = null;
    let confirmPassword = null;
    const {mode, authMode} = this.state;

    if (mode === 'portrait') {
      headingText = (
        <MainText>
          <HeadingText>Please {authMode === 'login' ? 'Login' : 'Sign Up'}</HeadingText>
        </MainText>
      );
    }

    if (this.state.authMode === 'signup') {
      confirmPassword = (
        <View
          style={
            mode === 'landscape' && authMode === 'signup'
              ? styles.landscapePasswordWrapper
              : styles.portraitPasswordWrapper
          }
        >
          <DefaultInput
            placeholder="Confirm Password"
            style={styles.input}
            value={this.state.controls.confirmPassword.value}
            onChangeText={val => this.updateInputState("confirmPassword", val)}
            valid={this.state.controls.confirmPassword.valid}
            touched={this.state.controls.confirmPassword.touched}
            secureTextEntry={true}
          />
        </View>
      );
    }

    return (
      <ImageBackground style={styles.imageBackground} source={backgroundImage}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          {headingText}
          <ButtonWithBackground color="#29aaf4" onPress={this.switchAuthModeHandler}>
            Switch to {authMode === 'login' ? 'Sign Up' : 'Login'}
          </ButtonWithBackground>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inputContainer}>
              <DefaultInput
                placeholder="Your E-Mail Address"
                style={styles.input}
                value={this.state.controls.email.value}
                onChangeText={val => this.updateInputState("email", val)}
                valid={this.state.controls.email.valid}
                touched={this.state.controls.email.touched}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
              />
              <View
                style={
                  mode === 'portrait'
                    ? styles.portraitPasswordContainer
                    : styles.landscapePasswordContainer
                }
              >
                <View
                  style={
                    mode === 'landscape' && authMode === 'signup'
                      ? styles.landscapePasswordWrapper
                      : styles.portraitPasswordWrapper
                  }
                >
                  <DefaultInput
                    placeholder="Password"
                    style={styles.input}
                    value={this.state.controls.password.value}
                    onChangeText={val => this.updateInputState("password", val)}
                    valid={this.state.controls.password.valid}
                    touched={this.state.controls.password.touched}
                    secureTextEntry={true}
                  />
                </View>
                {confirmPassword}
              </View>
            </View>
          </TouchableWithoutFeedback>
          <ButtonWithBackground
            color="#29aaf4"
            onPress={this.loginHandler}
            disabled={
              !this.state.controls.email.valid ||
              !this.state.controls.password.valid ||
              (!this.state.controls.confirmPassword.valid && this.state.authMode === 'signup')
            }
          >
            Submit
          </ButtonWithBackground>
        </KeyboardAvoidingView>
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
  landscapePasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  portraitPasswordContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  landscapePasswordWrapper: {
    width: '45%'
  },
  portraitPasswordWrapper: {
    width: '100%'
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onTryAuth: authData => dispatch(tryAuth(authData))
  }
};

export default connect(null, mapDispatchToProps)(AuthScreen);
