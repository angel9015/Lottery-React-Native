import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  titleText: {
    ...Fonts.style.h1,
    fontFamily: Fonts.type.bold,
    paddingVertical: Metrics.doubleBaseMargin,
    color: Colors.snow,
    textAlign: 'center',
    marginTop: 120
  },
  fbLoginBtn: {
    width: 240,
    height: 49,
    position: 'absolute',
    bottom: 150,
  },
  phoneLoginBtn: {
    width: 240,
    height: 49,
    borderRadius: 25,
    position: 'absolute',
    bottom: 80,
  },
  btnText: {
    marginTop: 5,
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
