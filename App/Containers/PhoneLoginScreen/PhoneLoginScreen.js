import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Alert,
  Image,
  AsyncStorage
} from 'react-native';

import firebase from 'react-native-firebase';

//SignOut farebase.auth().signOut();
  
import Spinner from 'react-native-loading-spinner-overlay';
import Form from 'react-native-form';
import CountryPicker from 'react-native-country-picker-modal';

import { Images, Colors } from '../../Themes'

// Styles
import styles from './PhoneLoginScreenStyles'

const MAX_LENGTH_CODE = 6;
const MAX_LENGTH_NUMBER = 20;

// if you want to customize the country picker
const countryPickerCustomStyles = {};

export default class PhoneLoginScreen extends Component {
  
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      enterCode: false,
      spinner: false,
      country: {
        cca2: 'US',
        callingCode: '1'
      },
      user: null,
      codeInput: '',
      confirmResult: null,
    };
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user.toJSON() });
      } else {
        // User has been signed out, reset the state
        this.setState({
          user: null,
          message: '',
          codeInput: '',
          confirmResult: null,
        });
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  _getCode = () => {

    this.setState({ spinner: true });
    
    setTimeout(async () => {

      try {
        
        // firebase.auth().signOut();
        const phoneNumber  = '+' + this.state.country.callingCode + this.state.codeInput;
        
        firebase.auth().signInWithPhoneNumber(phoneNumber)
          .then(confirmResult => {
            this.setState({ confirmResult})
            this.setState({
              spinner: false,
              enterCode: true,
            });
            this.refs.form.refs.textInput.setNativeProps({ text: '' })
            setTimeout(() => {
              Alert.alert('Sent!', "We've sent you a verification code", [{
                text: 'OK',
                onPress: () => this.refs.form.refs.textInput.focus()
              }]);
            }, 100)
          })
          .catch(error => {
            setTimeout(() => {
              Alert.alert('Sign In With Phone Number Error:', error.message);
            }, 100);
            throw error;
          });
      } catch (err) {
        // <https://github.com/niftylettuce/react-native-loading-spinner-overlay/issues/30#issuecomment-276845098>
        this.setState({ spinner: false });
        setTimeout(() => {
          Alert.alert('Oops!', err.message);
        }, 100);
      }

    }, 100);

  }

  _verifyCode = () => {

    this.setState({ spinner: true });

    let that = this

    setTimeout( async () => {

      try {

        const { codeInput, confirmResult } = this.state;

        if (confirmResult && codeInput.length) {
          confirmResult.confirm(codeInput)
            .then( async (user) => {
              await AsyncStorage.setItem('loggedIn', 'loggedIn')
              that.props.navigation.navigate('NotificationAllowScreen')
            })
            .catch(error => {
              throw error
            });
        }

        this.refs.form.refs.textInput.blur();
        // <https://github.com/niftylettuce/react-native-loading-spinner-overlay/issues/30#issuecomment-276845098>
        this.setState({ spinner: false });
        // setTimeout(() => {
        //   Alert.alert('Success!', 'You have successfully verified your phone number');
        // }, 100);

      } catch (err) {
        // <https://github.com/niftylettuce/react-native-loading-spinner-overlay/issues/30#issuecomment-276845098>
        this.setState({ spinner: false });
        setTimeout(() => {
          Alert.alert('Oops!', err.message);
        }, 100);
      }

    }, 100);
  }

  _onChangeText = (val) => {
    this.setState({codeInput: val})
    if (!this.state.enterCode) return;
    if (val.length === MAX_LENGTH_CODE)
    this._verifyCode();
  }

  _tryAgain = () => {
    this.refs.form.refs.textInput.setNativeProps({ text: '' })
    this.setState({ enterCode: false });
  }

  _getSubmitAction = () => {
    this.state.enterCode ? this._verifyCode() : this._getCode();
  }

  _changeCountry = (country) => {
    this.setState({ country });
    this.refs.form.refs.textInput.focus();
  }

  _renderFooter = () => {

    if (this.state.enterCode)
      return (
        <View>
          <Text style={styles.wrongNumberText} onPress={this._tryAgain}>
            Enter the wrong number or need a new code?
          </Text>
        </View>
      );

    return (
      <View>
        <Text style={styles.disclaimerText}>By tapping "Send confirmation code" above, we will send you an SMS to confirm your phone number. Message &amp; data rates may apply.</Text>
      </View>
    );

  }

  _renderCountryPicker = () => {

    if (this.state.enterCode)
      return (
        <View />
      );

    return (
      <CountryPicker
        ref={'countryPicker'}
        closeable
        style={styles.countryPicker}
        onChange={this._changeCountry}
        cca2={this.state.country.cca2}
        styles={countryPickerCustomStyles}
        translation='eng'/>
    );

  }

  _renderCallingCode = () => {

    if (this.state.enterCode)
      return (
        <View />
      );

    return (
      <View style={styles.callingCodeView}>
        <Text style={styles.callingCodeText}>+{this.state.country.callingCode}</Text>
      </View>
    );

  }

  render () {

    let headerText = `What's your ${this.state.enterCode ? 'verification code' : 'phone number'}?`
    let buttonText = this.state.enterCode ? 'Verify confirmation code' : 'Send confirmation code';
    let textStyle = this.state.enterCode ? {
      height: 50,
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'Courier'
    } : {};
    // const { navigation } = this.props;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.backgroundImage}>
          {/* <TouchableOpacity style={styles.backButton}  onPress={() => navigation.goBack()}>
            <Image source={Images.backButton}/>
          </TouchableOpacity> */}
          <Text style={styles.header}>{headerText}</Text>

          <Form ref={'form'} style={styles.form}>

            <View style={{ flexDirection: 'row' }}>

              {this._renderCountryPicker()}
              {this._renderCallingCode()}

              <TextInput
                ref={'textInput'}
                name={this.state.enterCode ? 'code' : 'phoneNumber' }
                type={'TextInput'}
                underlineColorAndroid={'transparent'}
                autoCapitalize={'none'}
                autoCorrect={false}
                onChangeText={this._onChangeText}
                placeholder={this.state.enterCode ? '_ _ _ _ _ _' : 'Phone Number'}
                keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
                style={[ styles.textInput, textStyle ]}
                returnKeyType='go'
                autoFocus
                placeholderTextColor={Colors.windowTint}
                selectionColor={Colors.windowTint}
                maxLength={this.state.enterCode ? 6 : 20}
                onSubmitEditing={this._getSubmitAction}
                value={this.state.codeInput} />
              
            </View>

            <TouchableOpacity style={styles.button} onPress={this._getSubmitAction}>
              <Text style={styles.buttonText}>{ buttonText }</Text>
            </TouchableOpacity>

            {this._renderFooter()}

          </Form>

          <Spinner
            visible={this.state.spinner}
            textContent={'One moment...'}
            textStyle={{ color: '#fff' }} />
        </View>

      </View>
    )
  }
}