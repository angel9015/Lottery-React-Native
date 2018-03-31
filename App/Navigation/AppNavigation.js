import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen/LoginScreen'
import PhoneLoginScreen from '../Containers/PhoneLoginScreen/PhoneLoginScreen'
import NotificationAllowScreen from '../Containers/NotificationAllowScreen/NotificationAllowScreen'
import MainScreen from '../Containers/MainScreen/MainScreen'
import AboutScreen from '../Containers/AboutScreen/AboutScreen'
import LeaderBoardScreen from '../Containers/LeaderBoard/LeaderBoardScreen'
import FAQScreen from '../Containers/AboutScreen/FAQScreen/FAQScreen'
import HowToPlayScreen from '../Containers/AboutScreen/HowToPlayScreen/HowToPlayScreen'
import SubmitScreen from '../Containers/AboutScreen/SubmitScreen/SubmitScreen'
import ProfileScreen from '../Containers/ProfileScreen/ProfileScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: { screen: LoginScreen },
  PhoneLoginScreen: { screen: PhoneLoginScreen },
  NotificationAllowScreen: { screen: NotificationAllowScreen },
  MainScreen: { screen: MainScreen } ,
  AboutScreen: { screen: AboutScreen },
  FAQScreen: { screen: FAQScreen },
  HowToPlayScreen: { screen: HowToPlayScreen },
  SubmitScreen: { screen: SubmitScreen },
  LeaderBoardScreen: { screen: LeaderBoardScreen },
  ProfileScreen: { screen: ProfileScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
