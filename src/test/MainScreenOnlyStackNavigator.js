import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { creatStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import Home from "./Home";

class MainScreen extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = creatStackNavigator({
  Home: {
    screen: Home
  }
})

export default createAppContainer(AppStackNavigator
  {
    Home : AppStackNavigator
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1
    },
  clubContainer: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  scheduleContainer: {
    flex: 2,
    backgroundColor: 'blue',
    justifyContent: 'center'
  }
});

//install
