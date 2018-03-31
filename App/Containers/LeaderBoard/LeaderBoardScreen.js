import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Text, Image, View, ListView } from 'react-native'
import { Images } from '../../Themes'

// Styles
import styles from './LeaderBoardScreenStyles'

const users = [
  { index: '1', username: 'test1', price: '$200', },
  { index: '2', username: 'test2', price: '$223', },
  { index: '3', username: 'test3', price: '$390', },
  { index: '4', username: 'test4', price: '$223', },
  { index: '5', username: 'test5', price: '$252', },
  { index: '6', username: 'test6', price: '$262', },
  { index: '7', username: 'test7', price: '$278', },
  { index: '8', username: 'test8', price: '$225', },
  { index: '9', username: 'test9', price: '$152', },
  { index: '10', username: 'test10', price: '$380', },
  { index: '11', username: 'test11', price: '$420', },
  { index: '12', username: 'test12', price: '$526', },
]

const Row = (props) => (
  <View style={styles.rowContainer}>
    <Text style={styles.indexText}>{props.index}</Text>
    <Image source={Images.profileIcon} style={styles.photo} />
    <Text style={styles.rowNameText}>{props.username}</Text>
    <View style={styles.rowPrice}>
      <Text style={styles.rowPriceText}>{props.price}</Text>
    </View>
  </View>
);

export default class LeaderBoardScreen extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      isWeekClicked: false,
      isAllClicked: false,
      dataSource: ds.cloneWithRows(users),
    };
  }
  
  render () {
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
                Leaderboard
              </Text>
              {/* Button Group */}
              <View style={styles.btnCircleGroup}>
                <TouchableOpacity 
                  style={[styles.btnItem, styles.leftItem, this.state.isWeekClicked && styles.clickedColor]} 
                  // onPress={() => this.setState({isWeekClicked: !this.state.isWeekClicked, isAllClicked: this.state.isWeekClicked})}>
                  onPress={() => this.setState({isWeekClicked: false})}>
                  <Text style={styles.btnText}>
                    This week
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.btnItem, this.state.isAllClicked && styles.clickedColor]}
                  // onPress={() => this.setState({isAllClicked: !this.state.isAllClicked, isWeekClicked: this.state.isAllClicked})}>
                  onPress={() => this.setState({isAllClicked: false})}>
                  <Text style={styles.btnText}>
                    All time
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Circle Group */}
              <View style={[styles.btnCircleGroup, styles.topMembers]}>
                <View style={styles.topMember}>
                  <View style={[styles.smallCircle, styles.second]}><Text style={styles.smallText}>2</Text></View>
                  <Image source={Images.profileIcon} style={styles.pinataIcon}/>
                  <Text style={styles.nameText}>nathan2018</Text>
                  <View style={styles.topPrice}><Text style={styles.price}>$755</Text></View>
                </View>
                <View style={[styles.topMember, styles.firstTopMember]}>
                  <View style={[styles.smallCircle, styles.first]}><Text style={styles.smallText}>1</Text></View>
                  <Image source={Images.profileIcon} style={styles.firstTopImg}/>
                  <Text style={[styles.nameText, styles.firstName]}>matthew2018</Text>
                  <View style={styles.topPrice}><Text style={styles.price}>$824</Text></View>
                </View>
                <View style={[styles.topMember, styles.thirdMember]}>
                  <View style={[styles.smallCircle, styles.third]}><Text style={styles.smallText}>3</Text></View>
                  <Image source={Images.profileIcon} style={styles.pinataIcon}/>
                  <Text style={styles.nameText}>khary2018</Text>
                  <View style={styles.topPrice}><Text style={styles.price}>$646</Text></View>
                </View>
              </View>
              <ListView
                style={styles.listContainer}
                dataSource={this.state.dataSource}
                renderRow={(data) => <Row {...data} />}
              />
            </View>            
          </ScrollView>
        </View>
      </View>
    )
  }
}
