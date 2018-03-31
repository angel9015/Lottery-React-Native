import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
  },
  titleText: {
    ...Fonts.style.h3,
    fontFamily: Fonts.type.bold,
    paddingVertical: Metrics.doubleBaseMargin,
    color: Colors.snow,
    textAlign: 'center',
    marginTop: 30
  },
  centered: {
    alignItems: 'center',
    flex: 1
  },
  btnCircleGroup: {
      flexDirection: 'row'
  },
  btnItem: {
    width: 130,
    height: 35,
    backgroundColor: Colors.transparent,
    borderRadius: 25,
    borderColor: Colors.facebook,
    borderWidth: 2
  },
  leftItem: {
    marginRight: 10
  },
  clickedColor: {
    backgroundColor: Colors.pink,
    borderWidth: 0
  },
  btnText: {
    marginTop: 5,
    textAlign: 'center',
    color: Colors.snow,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.base,
    backgroundColor: 'transparent'
  },
  topMembers: {
    marginTop: 20
  },
  topMember: {
    position: 'relative',
    marginRight: 8,
    marginTop: 10,
  },
  thirdMember: {
    marginRight: 0,
  },
  smallCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.pink,
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
    marginTop: 10,
    marginLeft: 8,
    zIndex: 1,
  },
  first: {
    backgroundColor: '#CCCC00',
    marginLeft: 4,
  },
  second: {
    backgroundColor: '#008000'
  },
  third: {
    backgroundColor: '#bf005f'
  },
  smallText: {
    marginTop: 7,
    textAlign: 'center',
    width: 20,
    color: Colors.snow,
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.bold,
  },
  pinataIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 15,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: Colors.snow,
  },
  firstTopMember: {
    marginTop: 0
  },
  firstTopImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: Colors.snow,
  },
  nameText: {
    marginTop: 7,
    textAlign: 'center',
    color: Colors.snow,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.bold,
  },
  firstName: {
    marginTop: 12
  },
  topPrice: {
    width: 80,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#317E9F',
    alignItems: 'center',
    flex: 1,
    marginTop: 7,
    alignSelf: 'center'
  },
  price: {
    color: Colors.snow,
    width: 70,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.base,
    textAlign: 'center',
    marginTop: 7
  },
  listContainer: {
    alignSelf: 'stretch',
    marginTop: 20,
  },
  rowContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: '#8E8E8E',
    paddingBottom: 10,
    position: 'relative',
  },
  photo: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  indexText: {
    color: Colors.snow,
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.regular,
    marginTop: 10,
    width: 40,
    textAlign: 'center'
  },
  rowNameText: {
    color: Colors.snow,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold,
    marginTop: 10,
    marginLeft: 10
  },
  rowPrice: {
    alignSelf: 'flex-end',
    width: 60,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#317E9F',
    position: 'absolute',
    right: 15,
    bottom: 15
  },
  rowPriceText: {
    color: Colors.snow,
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.regular,
    alignSelf: 'center',
    marginTop: 8,
  },
})
