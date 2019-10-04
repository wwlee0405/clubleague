import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import Home from "./src/screens/Home";
import Feed from "./src/screens/Feed";
import Notice from "./src/screens/Notice";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home:{
    screen: Home,
    navigationOptions:{
      tabBarLabel: 'HOME',
      tabBarIcon: ({tintColor}) => (
        <Feather name="home" color={tintColor} size={24} />
      )
    }
  },
  Feed:{
    screen: Feed,
    navigationOptions:{
      tabBarLabel: 'FEED',
      tabBarIcon: ({tintColor}) => (
        <MaterialCommunityIcons name="soccer-field" color={tintColor} size={24} />
      )
    }
  },
  Notice:{
    screen: Notice,
    navigationOptions:{
      tabBarLabel: 'NOTICE',
      tabBarIcon: ({tintColor}) => (
        <Feather name="bell" color={tintColor} size={24} />
      )
    }
  }
},{
  tabBarOptions:{
    activeTintColor: 'green',
    inactiveTintColor: 'grey',
    style:{
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset:{width:5,height:3},
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }

  }
});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA"
  },
  text: {
    color: "#2C2C2C",
    fontSize: 30
  }
});
