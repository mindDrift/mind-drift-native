import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({ domain: 'dev-9mkoj16x.auth0.com', clientId: 'fqTxSDOM4IKFi15tkBGA4TMgV7AeoWDO' });
console.log(auth0.webAuth);


// auth0.webAuth
//     .clearSession({})
//     .then(success => {
//         Alert.alert(
//             'Logged out!'
//         );
//         this.setState({ accessToken: null });
//     })
//     .catch(error => {
//         console.log('Log out cancelled');
//     });

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  login = () => {
    auth0
    .webAuth
    .authorize({scope: 'openid profile email'})
    .then(credentials => {
      // Successfully authenticated
      // Store the accessToken
      console.log('is it getting here');
      console.log(credentials);
      return this.setState({ accessToken: credentials.accessToken })}
      )
      .catch(error => console.log(error));
  }
  
  render() {
    this.login();
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
