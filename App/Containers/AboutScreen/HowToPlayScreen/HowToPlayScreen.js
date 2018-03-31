import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Text, Image, View } from 'react-native'
import { Images } from '../../../Themes'

// Styles
import styles from './HowToPlayScreenStyles'

export default class HowToPlayScreen extends Component {
  render () {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.backgroundImage}>
          <ScrollView style={styles.emptyBackground}>
            <TouchableOpacity style={styles.backButton}  onPress={() => navigation.goBack()}>
              <Image source={Images.backButton}/>
            </TouchableOpacity>
            <View style={styles.centered}>
              <Text style={styles.titleText}>
                How To Play
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}
