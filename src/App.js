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

type Props = {};
class App extends Component<Props> {
    constructor (props) {
        super(props);
        this.onClickButton = this.onClickButton.bind(this)
    }

    onClickButton(){
        console.log("Hello world");
        fetchPosts()
    }
  render() {
      console.log("props are", this.props);

      return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Riftech!</Text>
          <Image source={{uri: this.props.user.image}}
                 style={{width: 400, height: 400}} />
          <Button
              onPress={this.onClickButton}
              title="Load More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
          />
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
// export default App