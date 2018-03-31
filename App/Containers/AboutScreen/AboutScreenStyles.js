import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  titleText: {
    ...Fonts.style.h3,
    fontFamily: Fonts.type.bold,
    paddingVertical: Metrics.doubleBaseMargin,
    color: Colors.snow,
    textAlign: 'center',
    marginTop: 60
  },
  centered: {
    alignItems: 'center',
    flex: 1
  },
  aboutItem: {
    marginTop: 20,
    flexDirection: 'row',
    paddingLeft: 30
  },
  imgItem: {
    width: 32,
    height: 32,
    marginRight: 15,
    marginTop: 5
  },
  itemText: {
    ...Fonts.style.h3,
    fontFamily: Fonts.type.bold,
    color: Colors.snow,
  },
  icons: {
    flexDirection: 'row',
    marginTop: 40,
  },
  socialBtn: {
    marginRight: 20
  },
  socialIcon: {
    width: 45,
    height: 45
  },
  texts: {
    flexDirection: 'row',
    marginTop: 5,
  },
  textItem: {
    marginRight: 20
  },
  termsText: {
    ...Fonts.style.h5,
    fontFamily: Fonts.type.base,
    paddingVertical: Metrics.doubleBaseMargin,
    color: Colors.snow,
    textAlign: 'center',
    color: Colors.silver
  }
})
