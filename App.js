import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FetchLocation from './components/FetchLocation'
import UsersMap from './components/UsersMap'
import Expenses from './components/expenses'

export default class App extends React.Component {
    getUserLocationHandler = () => {
        console.log("Click");
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
        }, err => console.log(err));//This comes from the supported JS tools that react allows.
        fetch()

    };

  render() {
    return (
      <View style={styles.container}>
        <Expenses></Expenses>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5eff3',
      padding: 10
  },
});
