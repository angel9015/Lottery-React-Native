import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Text, Image, View, AsyncStorage } from 'react-native'
import { AccessToken, LoginManager } from 'react-native-fbsdk'
import firebase from 'react-native-firebase'
import { Images } from '../../Themes'

// Styles
import styles from './ProfileScreenStyles'

export default class LoginScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
    }
  }

  componentDidMount() {
    this.updateUser()
  }

  async updateUser () {
    let value = await AsyncStorage.getItem('currentUser')
    if ( value !== null ) {
      let user = JSON.parse(value)
      console.log(user)
      this.setState({ currentUser: user })
    }
  }

  render () {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton}  onPress={() => navigation.goBack()}>
            <Image source={Images.backButton}/>
          </TouchableOpacity>
          <View style={styles.container}>
            <Image source={Images.lotteryImg} style={styles.bgImg}/>
            <Image source={ this.state.currentUser !== null ? { uri: this.state.currentUser.additionalUserInfo.profile.picture.data.url} : Images.profileIcon } style={styles.profileImg}/>
          </View>
        </View>
        <ScrollView style={styles.emptyBackground}>
          
        </ScrollView>
      </View>
    )
  }
}