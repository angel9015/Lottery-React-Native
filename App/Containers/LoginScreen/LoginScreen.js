import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Text, Image, View, AsyncStorage, Alert } from 'react-native'
import { AccessToken, LoginManager } from 'react-native-fbsdk'
import firebase from 'react-native-firebase'
import { Images } from '../../Themes'
import Spinner from 'react-native-loading-spinner-overlay'

// Styles
import styles from './LoginScreenStyles'

// Referencing https://blog.invertase.io/getting-started-with-firebase-authentication-on-react-native-a1ed3d2d6d91

// pluck values from your `GoogleService-Info.plist` you created on the firebase console

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      visible: false,
    };
    this._show = this._show.bind(this)
    this._hide = this._hide.bind(this)
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user.toJSON() });
      } else {
        // User has been signed out, reset the state
        this.setState({
          user: null,
        });
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  _show() {
    this.setState({ visible: true })
  }

  _hide() {
    this.setState({ visible: false })
  }

  onLoginOrRegister = async (props) => {
    
    try {
        this.setState({ visible: true });
        const logoutResult = LoginManager.logOut();
        const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
    
        if (result.isCancelled) {
          this.setState({ visible: false })
          throw new Error('User cancelled request'); // Handle this however fits the flow of your app
        }

        console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
    
        // get the access token
        const data = await AccessToken.getCurrentAccessToken();
    
        if (!data) {
          throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
        }
    
        // create a new firebase credential with the token
        const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

        // login with credential
        const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
        
        //console.log(JSON.stringify(JSON.stringify(currentUser)))
        try {
          if ( currentUser ) {
            await AsyncStorage.setItem('currentUser', JSON.stringify(currentUser))
            await AsyncStorage.setItem('loggedIn', 'loggedIn')
            this.setState({ visible: false })
            props.navigation.navigate('NotificationAllowScreen')
          }
        } catch (e){
          setTimeout(() => {
            Alert.alert('Oops!', e.message);
          }, 100);
          this.setState({ visible: false });
        }
        
      } catch (e) {
        this.setState({ visible: false });
        setTimeout(() => {
          Alert.alert('', e.message);
        }, 100);
      }
  }

  render () {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const { visible } = this.state;
    console.log('spiner =>', visible);
    return (
      <View style={styles.mainContainer}>
        <View style={styles.backgroundImage}>
          <TouchableOpacity style={styles.backButton}  onPress={() => navigation.goBack()}>
            <Image source={Images.backButton}/>
          </TouchableOpacity>
          <View style={styles.centered}>
            <Text style={styles.titleText}>
              PINATA
            </Text>
            <TouchableOpacity style={styles.fbLoginBtn} onPress={() => this.onLoginOrRegister(this.props)}>
            {/* <TouchableOpacity style={styles.fbLoginBtn} onPress={() => navigate('NotificationAllowScreen')}> */}
              <Image source={Images.facebookLoginButton} resizeMode='contain' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.phoneLoginBtn} onPress={() => navigate('PhoneLoginScreen')}>
              <Image source={Images.phoneLoginButton} resizeMode='contain' />
            </TouchableOpacity>
          </View>
          <Spinner
            visible={visible}
            ref={(ref) => this.Spinner = ref}
            textContent={'One moment...'}
            textStyle={{ color: '#fff' }} />
        </View>
      </View>
    )
  }
}

{/*"{
  \"additionalUserInfo\":{\"username\":null,\"providerId\":\"facebook.com\",\"isNewUser\":false,\"
  profile\":{\"id\":\"121804041984298\",\"verified\":false,\
  "picture\":{\"data\":{\"is_silhouette\":false,\"width\":100,\"url\":\
  "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/28685435_130207467810622_123711484057022748_n.jpg?oh=7900e3eba6e2ffb4e1cd5235b2f0d79e&oe=5B3F92D6\",\"height\":100}}
  ,\"link\":\"https://www.facebook.com/app_scoped_user_id/121804041984298/\",\"locale\":\"en_US\",\"updated_time\":\"2018-03-08T21:11:00+0000\",\
  "first_name\":\"Khary\",\"age_range\":{\"min\":21},\"timezone\":1,\"last_name\":\"Frazier\",\"email\":\"dev.danstr@gmail.com\",\"gender\":\"male\",\"name\":\"Khary Frazier\"}}
  ,\"user\":{\"phoneNumber\":null,\"uid\":\"2E8G38DGoZS7ZZZtbNea4nZ3VeS2\",\"providerId\":\"firebase\",\"providerData\":[{\"email\":\"dev.danstr@gmail.com\",\
  "photoURL\":\"https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/28685435_130207467810622_123711484057022748_n.jpg?oh=7900e3eba6e2ffb4e1cd5235b2f0d79e&oe=5B3F92D6\",\"providerId\":\"facebook.com\",\"uid\":\"121804041984298\",\"displayName\":\"Khary Frazier\"}],\"displayName\":\"Khary Frazier\",\"refreshToken\":\"APyOXy1vOWap6SlJQNLMnbl1_Mq9edQkCRwQpmuAAwMOCBS7PleX14PD7OTRf2UmdzgfWyTIcJjKG7QnK0FOFoT7MrVNlY8YdDfrVrNeVl_h2pZOY7t7hCkiP94-It-XE2CSQf4xiXZIwNQC7JbQIorIcft9BwQ6Dtvs8Dm-_V2i8HKD4O9pprLN5iin7h9agDW8PC0ICLxSmH_liVSkRCmd3-XJ6-eXQWITRzTqJeYHE7anFz55EG29C9eFoClRsdmeLFPZFDHmaoG2q_RbBE1TI3j3_lgGTCcQvjgiwnDnRyy5zYIIhVZ3gf7I5tbpfbhwTQZS8DbWurFqGeyaCvcC2wmkHWbeabH-L4R3tDa3mMLCkbY319QgTCPWy8t8Eswq3I26lDKyq4YqNSsXQkunf94L-gXw1BlFYhH-S4oZm-L0FFhXx_A\",\"email\":\"dev.danstr@gmail.com\",\"isAnonymous\":false,\"metadata\":{\"creationTime\":1520543103000,\"lastSignInTime\":1520544130000},\"emailVerified\":false,
  \"photoURL\":\"https://scontent.xx.fbcdn.net/v/t1.0-1/c29.0.100.100/p100x100/10354686_10150004552801856_220367501106153455_n.jpg?oh=ae85820c92b6e480694ddeb3969160bd&oe=5B3F3077\"}}"
index.bundle?platform=ios&dev=true&minify=false:92031 "{\"additionalUserInfo\":{\"username\":null,\"providerId\":\"facebook.com\",\"isNewUser\":false,\"profile\":{\"id\":\"121804041984298\",\"verified\":false,\"picture\":{\"data\":{\"is_silhouette\":false,\"width\":100,\"url\":\"https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/28685435_130207467810622_123711484057022748_n.jpg?oh=7900e3eba6e2ffb4e1cd5235b2f0d79e&oe=5B3F92D6\",\"height\":100}},\"link\":\"https://www.facebook.com/app_scoped_user_id/121804041984298/\",\"locale\":\"en_US\",\"updated_time\":\"2018-03-08T21:11:00+0000\",\"first_name\":\"Khary\",\"age_range\":{\"min\":21},\"timezone\":1,\"last_name\":\"Frazier\",\"email\":\"dev.danstr@gmail.com\",\"gender\":\"male\",\"name\":\"Khary Frazier\"}},\"user\":{\"phoneNumber\":null,\"uid\":\"2E8G38DGoZS7ZZZtbNea4nZ3VeS2\",\"providerId\":\"firebase\",\"providerData\":[{\"email\":\"dev.danstr@gmail.com\",\"photoURL\":\"https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/28685435_130207467810622_123711484057022748_n.jpg?oh=7900e3eba6e2ffb4e1cd5235b2f0d79e&oe=5B3F92D6\",\
"providerId\":\"facebook.com\",\"uid\":\"121804041984298\",\"displayName\":\"Khary Frazier\"}],\"displayName\
":\"Khary Frazier\",\"refreshToken\":\"APyOXy1vOWap6SlJQNLMnbl1_Mq9edQkCRwQpmuAAwMOCBS7PleX14PD7OTRf2UmdzgfWyTIcJjKG7QnK0FOFoT7MrVNlY8YdDfrVrNeVl_h2pZOY7t7hCkiP94-It-XE2CSQf4xiXZIwNQC7JbQIorIcft9BwQ6Dtvs8Dm-_V2i8HKD4O9pprLN5iin7h9agDW8PC0ICLxSmH_liVSkRCmd3-XJ6-eXQWITRzTqJeYHE7anFz55EG29C9eFoClRsdmeLFPZFDHmaoG2q_RbBE1TI3j3_lgGTCcQvjgiwnDnRyy5zYIIhVZ3gf7I5tbpfbhwTQZS8DbWurFqGeyaCvcC2wmkHWbeabH-L4R3tDa3mMLCkbY319QgTCPWy8t8Eswq3I26lDKyq4YqNSsXQkunf94L-gXw1BlFYhH-S4oZm-L0FFhXx_A\",\
"email\":\"dev.danstr@gmail.com\",\"isAnonymous\":false,\"metadata\":{\"creationTime\":1520543103000,\"lastSignInTime\":1520544130000},\"emailVerified\":false,\"
photoURL\":\"https://scontent.xx.fbcdn.net/v/t1.0-1/c29.0.100.100/p100x100/10354686_10150004552801856_220367501106153455_n.jpg?oh=ae85820c92b6e480694ddeb3969160bd&oe=5B3F3077\"}}"*/}
