import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Text, Image, View, AsyncStorage } from 'react-native'
import Orientation from 'react-native-orientation'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  componentDidMount() {
    // this locks the view to Portrait Mode
    Orientation.lockToPortrait();
  }

  handleClickedStarted = async () => {
    let value = await AsyncStorage.getItem('loggedIn')
    if ( value === 'loggedIn' ) {
      this.props.navigation.navigate('NotificationAllowScreen')
    } else {
      this.props.navigation.navigate('LoginScreen')
    }
  }

  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.backgroundImage}>
          <View style={styles.centered}>
            <Text style={styles.titleText}>
              PINATA
            </Text>
            <TouchableOpacity style={styles.getStartedBtn} onPress={this.handleClickedStarted}>
              <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
