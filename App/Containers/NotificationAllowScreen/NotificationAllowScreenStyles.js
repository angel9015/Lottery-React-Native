import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  questionText: {
    position: 'absolute',
    bottom: 160,
    textAlign: 'center',
    color: Colors.snow,
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.base,
    backgroundColor: 'transparent'
  },
  NoBtn: {
    position: 'absolute',
    top: 30,
    right: 30,
    width: 80,
    height: 40,
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderColor: '#fff',
    borderWidth: 1,
  },
  NoText: {
    marginTop: 5,
    textAlign: 'center',
    color: Colors.snow,
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.bold,
    backgroundColor: 'transparent'
  },
  YepBtn: {
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
