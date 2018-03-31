import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import Video from 'react-native-video'
import Orientation from 'react-native-orientation';
// Styles
import styles from './NotificationAllowScreenStyles'

import MainScreen from '../MainScreen/MainScreen'

import { Images } from '../../Themes'

export default class NotificationAllowScreen extends Component {
  componentDidMount() {
    // this locks the view to Portrait Mode
    Orientation.lockToPortrait();
  }
  render () {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.backgroundVideo}>
          <Video
            source={require('../../Images/bgVideo.mp4')}
            rate={1.0}
            volume={1.0}
            muted={false}
            resizeMode={'cover'}
            repeat
            style={styles.backgroundVideo}
            />
        </View>
        {/* <TouchableOpacity style={styles.backButton}  onPress={() => navigation.goBack()}>
          <Image source={Images.backButton}/>
        </TouchableOpacity> */}
        <View style={styles.centered}>
          <TouchableOpacity style={styles.NoBtn} onPress={() => navigate('MainScreen')}>
            <Text style={styles.NoText}>Nah</Text>
          </TouchableOpacity>
          <Text style={styles.questionText}>Get notified when is live?</Text>
          <TouchableOpacity style={styles.YepBtn} onPress={() => navigate('MainScreen')}>
              <Text style={styles.btnText}>Yep!</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
