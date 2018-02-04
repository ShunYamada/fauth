import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase'

// Calling the following function will open the FB login dialogue:
const Auth = (props) => {
  return LoginManager
    .logInWithReadPermissions(['public_profile', 'email'])
    .then((result) => {
      if (!result.isCancelled) {
        console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`)
        // get the access token
        return AccessToken.getCurrentAccessToken()
      }
    })
    .then(data => {
      if (data) {
        // create a new firebase credential with the token
        const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)
        // login with credential
        return firebase.auth().signInAndRetrieveDataWithCredential(credential)
      }
    })
    .then((currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        this.props.navigation.navigate('Main');
      }
    })
    .catch((error) => {
      console.log(`Login fail with error: ${error}`)
    })
}

class SignInScreen extends React.Component {

  render() {
    return (
      <View style={styles.containerStyle}>
        <TouchableOpacity onPress={Auth}>
          <Text style={styles.textStyle}>Facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textStyle: {
    fontSize: 20,
  }
});

export default SignInScreen;
