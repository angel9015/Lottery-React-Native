import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
    alignItems: 'center',
    flexDirection: 'column'
  },
  modalContainer: {
    backgroundColor: Colors.snow,
    borderRadius: 15,
    alignItems: 'center',
  },
  helpBtn: {
    position: 'absolute',
    top: 30,
    right: 30,
    width: 32,
    height: 32,
    backgroundColor: '#6c6ed8',
    borderRadius: 16
  },
  helpText: {
    marginTop: 3,
    textAlign: 'center',
    color: Colors.snow,
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.bold,
    backgroundColor: 'transparent'
  },
  drawingText: {
    marginTop: 70,
    textAlign: 'center',
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.bold,
    color: Colors.snow
  },
  timeText: {
    textAlign: 'center',
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.bold,
    color: Colors.snow,
    
  },
  priceText: {
    textAlign: 'center',
    fontSize: Fonts.size.h3,
    fontFamily: Fonts.type.bold,
    color: Colors.snow
  },
  setReminderBtn: {
    width: 150,
    height: 35,
    backgroundColor: 'transparent',
    borderRadius: 16,
    borderColor: '#6c6ed8',
    borderWidth: 2,
  },
  setReminderText: {
    marginTop: 5,
    textAlign: 'center',
    color: Colors.snow,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.bold,
    backgroundColor: 'transparent'
  },
  mainContentBox: {
    borderRadius: 10,
    backgroundColor: Colors.snow,
    alignItems: 'center',
    flexDirection: 'column'
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.snow,
  },
  username: {
    textAlign: 'center',
    color: '#36399b',
    fontSize: Fonts.size.h6,
    fontFamily: Fonts.type.bold,
    backgroundColor: 'transparent'
  },
  balanceRank: {
    marginTop: 10,
    flexDirection: 'row',
  },
  balanceContainer: {
    flex: 1, 
    borderTopWidth: 1,
    borderTopColor: Colors.borderGray,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
    borderRightWidth: 1,
    borderRightColor: Colors.borderGray,
  },
  rankContainer: {
    flex: 1, 
    borderTopWidth: 1,
    borderTopColor: Colors.borderGray,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
  },
  balanceRankText: {
    textAlign: 'center',
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold,
    color: Colors.darkTextColor,
  },
  balanceRankValue: {
    textAlign: 'center',
    fontSize: Fonts.size.h4,
    fontFamily: Fonts.type.bold,
    color: Colors.mainBgColor,
  },
  ticketsGetMoreContainer: {
    flexDirection: 'row',    
  },
  ticketsGetMore: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
  },
  ticketBtn: {
    marginTop: 2,
    width: 120,
    height: 35,
    backgroundColor: 'transparent',
  },
  getMoreBtn: {
    width: 120,
    height: 35,
    backgroundColor: 'transparent',
    borderRadius: 16,
    borderColor: Colors.borderGray,
    borderWidth: 2,
  },
  ticketsGetMoreText: {
    marginTop: 3,
    textAlign: 'center',
    color: Colors.darkTextColor,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.bold,
    backgroundColor: 'transparent'
  },

  btnGroup: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25,
    padding: 10,
    marginBottom: 15,
  },
  inviteBtn: {
    width: 150,
    height: 50,
    backgroundColor: '#6c6ed8',
    borderRadius: 25,
  },
  earnBtn: {
    width: 150,
    height: 50,
    backgroundColor: Colors.pink,
    borderRadius: 25,
  },
  btnText: {
    marginTop: 11,
    textAlign: 'center',
    color: Colors.snow,
    fontSize: Fonts.size.h6,
    fontFamily: Fonts.type.bold,
    backgroundColor: 'transparent'
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 20,
    height: 20,
  },
  giftImg: {
    alignSelf: 'center',
    marginTop: 50,
  },
  closeImg: {
    width: 20,
    height: 20
  },
  modalTitle: {
    marginTop: 50,
    color: Colors.dimgray,
    fontSize: Fonts.size.h3,
    fontFamily: Fonts.type.bold,
  },
  modalSubTitle: {
    color: Colors.dimgray,
    fontSize: Fonts.size.h4,
    fontFamily: Fonts.type.bold,
  },
  modalText: {
    textAlign: 'center',
    padding: 40,
    paddingBottom: 10,
    color: Colors.dimgray,
    fontSize: Fonts.size.input,
    fontFamily: Fonts.type.bold,
  },
  getButton: {
    backgroundColor: Colors.mainBgColor,
    width: 180,
    height: 40,
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  getText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold,
    color: Colors.snow,
    textAlign: 'center',
    marginTop: 10
  },
  notNowButton: {
    backgroundColor: Colors.transparent,
    margin: 20
  },
  notNowText: {
    color: Colors.darkTextColor,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold,    
  },
  underModal: {
    opacity: 0.2,
  }
})
