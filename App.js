import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Todo App</Text>
        </View>
        <View style={styles.content}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <View style={styles.footer}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flex: 1,
    backgroundColor: '#aaa',
    justifyContent: 'center',
    paddingTop: 20,
    paddingLeft: 20
  },
  content: {
    flex: 7,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    flex: 1,
    backgroundColor: '#aaa'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  }
});
