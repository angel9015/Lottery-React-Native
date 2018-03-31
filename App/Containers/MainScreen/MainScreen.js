import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Text, Image, View, Modal, AsyncStorage, Dimensions } from 'react-native'
import ActivityView from 'react-native-activity-view'

import { InterstitialAdManager } from 'react-native-fbads'
import { AdSettings } from 'react-native-fbads'

import { Images } from '../../Themes'

// Styles
import styles from './MainScreenStyles'

const placementId = '456678044735087_456678201401738'

export default class MainScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isModal: false,
      currentUser: null,
      isBigScreen: false,
    }    
  }

  componentWillMount() {
    this.setHeight()
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

  closeModal = () => {
    this.setState({isModal: false})
  }

  openModal = () => {
    this.setState({isModal: true})
  }

  setHeight = () => {
    var {height, width} = Dimensions.get('window')
    height < 736 ? this.setState({ isBigScreen: false}) : this.setState({ isBigScreen: true})
  }

  handleInvite = () => {
    ActivityView.show({
      text: "Pinata - Lottery App",
      url: 'matthewkastner@gmail.com',
      imageBase64: 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEDWlDQ1BJQ0MgUHJvZmlsZQAAOI2NVV1oHFUUPrtzZyMkzlNsNIV0qD8NJQ2TVjShtLp/3d02bpZJNtoi6GT27s6Yyc44M7v9oU9FUHwx6psUxL+3gCAo9Q/bPrQvlQol2tQgKD60+INQ6Ium65k7M5lpurHeZe58853vnnvuuWfvBei5qliWkRQBFpquLRcy4nOHj4g9K5CEh6AXBqFXUR0rXalMAjZPC3e1W99Dwntf2dXd/p+tt0YdFSBxH2Kz5qgLiI8B8KdVy3YBevqRHz/qWh72Yui3MUDEL3q44WPXw3M+fo1pZuQs4tOIBVVTaoiXEI/MxfhGDPsxsNZfoE1q66ro5aJim3XdoLFw72H+n23BaIXzbcOnz5mfPoTvYVz7KzUl5+FRxEuqkp9G/Ajia219thzg25abkRE/BpDc3pqvphHvRFys2weqvp+krbWKIX7nhDbzLOItiM8358pTwdirqpPFnMF2xLc1WvLyOwTAibpbmvHHcvttU57y5+XqNZrLe3lE/Pq8eUj2fXKfOe3pfOjzhJYtB/yll5SDFcSDiH+hRkH25+L+sdxKEAMZahrlSX8ukqMOWy/jXW2m6M9LDBc31B9LFuv6gVKg/0Szi3KAr1kGq1GMjU/aLbnq6/lRxc4XfJ98hTargX++DbMJBSiYMIe9Ck1YAxFkKEAG3xbYaKmDDgYyFK0UGYpfoWYXG+fAPPI6tJnNwb7ClP7IyF+D+bjOtCpkhz6CFrIa/I6sFtNl8auFXGMTP34sNwI/JhkgEtmDz14ySfaRcTIBInmKPE32kxyyE2Tv+thKbEVePDfW/byMM1Kmm0XdObS7oGD/MypMXFPXrCwOtoYjyyn7BV29/MZfsVzpLDdRtuIZnbpXzvlf+ev8MvYr/Gqk4H/kV/G3csdazLuyTMPsbFhzd1UabQbjFvDRmcWJxR3zcfHkVw9GfpbJmeev9F08WW8uDkaslwX6avlWGU6NRKz0g/SHtCy9J30o/ca9zX3Kfc19zn3BXQKRO8ud477hLnAfc1/G9mrzGlrfexZ5GLdn6ZZrrEohI2wVHhZywjbhUWEy8icMCGNCUdiBlq3r+xafL549HQ5jH+an+1y+LlYBifuxAvRN/lVVVOlwlCkdVm9NOL5BE4wkQ2SMlDZU97hX86EilU/lUmkQUztTE6mx1EEPh7OmdqBtAvv8HdWpbrJS6tJj3n0CWdM6busNzRV3S9KTYhqvNiqWmuroiKgYhshMjmhTh9ptWhsF7970j/SbMrsPE1suR5z7DMC+P/Hs+y7ijrQAlhyAgccjbhjPygfeBTjzhNqy28EdkUh8C+DU9+z2v/oyeH791OncxHOs5y2AtTc7nb/f73TWPkD/qwBnjX8BoJ98VVBg/m8AAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAAlwSFlzAAALEwAACxMBAJqcGAAACCtpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4yMjU8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjY1NTM1PC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yMjU8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6MGQyZDdiMmYtNzNkZC00N2RhLTllY2ItNGQ1ZTE5YWRhZTFjPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE4LTAyLTE4VDEzOjA3OjIzLTA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjBkMmQ3YjJmLTczZGQtNDdkYS05ZWNiLTRkNWUxOWFkYWUxYzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1w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',
      exclude: ['postToFlickr', 'airDrop'],
    });
  }

  earnTickets = () => {
    InterstitialAdManager.showAd(placementId)
    .then(didClick => {console.log('clicked')})
    .catch(error => {alert(error)})
  }

  render () {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const { isModal, currentUser, isBigScreen } = this.state;

    return (
    <View style={styles.mainContainer}>
      <View style={styles.backgroundImage}>
        <ScrollView style={[styles.emptyBackground, isModal && styles.underModal]}>
          <TouchableOpacity style={styles.backButton}  onPress={() => navigation.goBack()}>
            <Image source={Images.backButton}/>
          </TouchableOpacity>
          <View style={styles.container}>
            <TouchableOpacity style={styles.helpBtn} onPress={() => navigate('AboutScreen')}>
              <Text style={styles.helpText}>?</Text>
            </TouchableOpacity>
            <Text style={styles.drawingText}>
              NEXT DRAWING
            </Text>
            <Text style={styles.timeText}>
              7pm MST
            </Text>
            <Text style={styles.priceText}>
              $10,235,236
            </Text>
            <TouchableOpacity style={[styles.setReminderBtn, isBigScreen && {marginTop: 20}]}>
              <Text style={styles.setReminderText}>Set Reminder</Text>
            </TouchableOpacity>
            <View style={[styles.mainContentBox, isBigScreen ? {marginTop: 25, width: '86%'} : {marginTop: 10, width: '90%'}]}>
              <TouchableOpacity style={{ backgroundColor: 'white'}}>
                <Image source={ currentUser !== null ? { uri: currentUser.additionalUserInfo.profile.picture.data.url} : Images.profileIcon } 
                style={[styles.profileImg, isBigScreen ? {marginTop: 25} : {marginTop: 15}]}/>
              </TouchableOpacity>
              <Text style={[styles.username, isBigScreen ? {marginTop: 15} : {marginTop: 3}]}>{currentUser !== null ? currentUser.user.displayName : ''}</Text>              
              <View style={[styles.balanceRank, isBigScreen ? {paddingTop: 15, paddingBottom: 15} : {paddingTop: 10, paddingBottom: 10}]}>
                <TouchableOpacity style={[styles.balanceContainer, isBigScreen ? {padding: 20} : {padding: 15}]}>
                  <Text style={styles.balanceRankText}>BALANCE</Text>
                  <Text style={styles.balanceRankValue}>$10</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.rankContainer, isBigScreen ? {padding: 20} : {padding: 15}]} onPress={() => navigate('LeaderBoardScreen')}>
                  <Text style={styles.balanceRankText}>MONTHLY RANK</Text>
                  <Text style={styles.balanceRankValue}>123</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ticketsGetMoreContainer}>
                <View style={styles.ticketsGetMore}>
                  <TouchableOpacity style={styles.ticketBtn} onPress={() => this.openModal()}>
                    <Text style={styles.ticketsGetMoreText}>TICKETS</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.ticketsGetMore}>
                  <TouchableOpacity style={styles.getMoreBtn} onPress={() => this.openModal()}>
                    <Text style={styles.ticketsGetMoreText}>Get More</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.btnGroup}>
                <View style={[styles.btnContainer, isBigScreen ? {marginTop: 25, marginBottom: 25} : {marginBottom: 10, marginTop: 10}]}>
                  <TouchableOpacity style={styles.inviteBtn} onPress={() => this.handleInvite()}>
                    <Text style={styles.btnText}>Invite</Text>
                  </TouchableOpacity>
                </View>
                <View style={[styles.btnContainer, isBigScreen ? {marginTop: 25, marginBottom: 25} : {marginBottom: 10, marginTop: 10}]}>
                  <TouchableOpacity style={styles.earnBtn} onPress={() => this.earnTickets()}>
                    <Text style={styles.btnText}>Earn Tickets</Text>
                  </TouchableOpacity>
                </View>
              </View>
          </View>

          <Modal
              visible={isModal}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
              transparent={true}
          >
            <View style={[styles.modalContainer, isBigScreen ? {margin: 25, marginTop: 80} : {margin: 15, marginTop: 40}]}>
              <TouchableOpacity style={styles.closeBtn} onPress={() => this.closeModal()}>
                <Image source={Images.closeBtn} resizeMode={'contain'} style={styles.closeImg}/>
              </TouchableOpacity>
              <Image source={Images.gift} style={styles.giftImg}/>
              <Text style={styles.modalTitle}>NEW FEATURE</Text>
              <Text style={styles.modalSubTitle}>Mystery Box!</Text>
              <Text style={styles.modalText}>What's a Mystery Box? For every person that you invite you will receive an opportunity to win an random allotment of tickets</Text>
              <TouchableOpacity style={styles.getButton}>
                <Text style={styles.getText}>Get Extra Tickets</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.notNowButton} onPress={() => this.closeModal()}>
                <Text style={styles.notNowText}>Not now</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </ScrollView>
      </View>
    </View>
    )
  }
}
