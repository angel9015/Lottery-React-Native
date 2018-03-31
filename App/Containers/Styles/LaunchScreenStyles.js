import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { StackNavigator } from 'react-navigation'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  titleText: {
    ...Fonts.style.h1,
    fontFamily: Fonts.type.bold,
    paddingVertical: Metrics.doubleBaseMargin,
    color: Colors.snow,
    textAlign: 'center',
    marginTop: 120
  },
  getStartedBtn: {
    width: 200,
    height: 50,
    backgroundColor: Colors.pink,
    borderRadius: 25,
    position: 'absolute',
    bottom: 100
  },
  btnText: {
    marginTop: 10,
    textAlign: 'center',
    color: Colors.snow,
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.bold,
    backgroundColor: 'transparent'
  },
  centered: {
    alignItems: 'center',
    flex: 1
  }
})
