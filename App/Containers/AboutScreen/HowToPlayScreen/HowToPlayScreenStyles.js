import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  titleText: {
    ...Fonts.style.h2,
    fontFamily: Fonts.type.bold,
    paddingVertical: Metrics.doubleBaseMargin,
    color: Colors.snow,
    textAlign: 'center',
    marginTop: 120
  },
  centered: {
    alignItems: 'center',
    flex: 1
  }
})
