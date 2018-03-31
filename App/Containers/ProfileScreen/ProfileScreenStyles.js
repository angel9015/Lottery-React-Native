import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts, Images } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: Colors.pink,
    height: 300,
  },
  bgImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
  },
  profileImg: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 80,
    borderWidth: 2,
    borderColor: Colors.snow,
    alignItems: 'center',
  },
  container: {
    paddingBottom: Metrics.baseMargin,
    alignItems: 'center',
    flexDirection: 'column'
  },
  titleText: {
    ...Fonts.style.h1,
    fontFamily: Fonts.type.bold,
    paddingVertical: Metrics.doubleBaseMargin,
    color: Colors.snow,
    textAlign: 'center',
    marginTop: 120
  },
  centered: {
    alignItems: 'center',
    flex: 1
  },
  
})
