/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image } from 'react-native';
import { connect } from 'react-redux';
import { userLogin, fetchPosts } from './actions';
import Spinner from 'react-native-loading-spinner-overlay';
type Props = {};
class App extends Component<Props> {
    constructor (props) {
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        this.onLogin = this.onLogin.bind(this)
    }

    onClickButton(){
        fetchPosts()
    }
    onLogin() {
        userLogin("mmc-221@mhg.co.ke", "customer");
    }
  render() {
      let {loading, token } = this.props.user;
      return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Riftech! </Text>
          <Image source={{uri: this.props.user.image}}
                 style={{width: 400, height: 400}} />
          <Button
              onPress={this.onLogin}
              title="Login"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
          />
          <View style={{ flex: 1 }}>
              <Spinner visible={loading} textContent={"Requesting..."} textStyle={{color: '#FFF'}} />
          </View>
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


function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, { userLogin, fetchPosts })(App);

