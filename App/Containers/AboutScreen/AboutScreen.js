import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Text, Image, View } from 'react-native'
import { Images } from '../../Themes'

// Styles
import styles from './AboutScreenStyles'

import HowToPlayScreen from './HowToPlayScreen/HowToPlayScreen'
import SubmitScreen from './SubmitScreen/SubmitScreen'
import FAQScreen from './FAQScreen/FAQScreen'


export default class AboutScreen extends Component {
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
                About
              </Text>
            </View>
            <TouchableOpacity style={styles.aboutItem} onPress={() => navigate('HowToPlayScreen')}>
              <Image source={Images.howtoButton} style={styles.imgItem}/>
              <Text style={styles.itemText}>
                How to play
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.aboutItem} onPress={() => navigate('FAQScreen')}>
              <Image source={Images.faqButton} style={styles.imgItem}/>
              <Text style={styles.itemText}>
                FAQs
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.aboutItem} onPress={() => navigate('SubmitScreen')}>
              <Image source={Images.submitButton} style={styles.imgItem}/>
              <Text style={styles.itemText}>
                Submit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.aboutItem}>
              <Image source={Images.gethelpButton} style={styles.imgItem}/>
              <Text style={styles.itemText}>
                Get help
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.aboutItem}>
              <Image source={Images.rateusButton} style={styles.imgItem}/>
              <Text style={styles.itemText}>
                Rate us
              </Text>
            </TouchableOpacity>
            <View style={styles.centered}>
              <View style={styles.icons}>
                <TouchableOpacity style={styles.socialBtn}>
                  <Image source={Images.twitterButton} style={styles.socialIcon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialBtn}>
                  <Image source={Images.instagramButton} style={styles.socialIcon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialBtn}>
                  <Image source={Images.facebookButton} style={styles.socialIcon}/>
                </TouchableOpacity>
              </View>
              <View style={styles.texts}>
                <TouchableOpacity style={styles.textItem}>
                  <Text style={styles.termsText}>Terms</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textItem}>
                  <Text style={styles.termsText}>Privacy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textItem}>
                  <Text style={styles.termsText}>Rules</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}
