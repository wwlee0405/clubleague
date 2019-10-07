import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import Home from "./Home";
import Feed from "./Feed";
import Notice from "./Notice";

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: Home,
  Details: DetailsScreen,
});

const FeedStack = createStackNavigator({
  Feed: Feed,
  Details: DetailsScreen,
});

const NoticeStack = createStackNavigator({
  Notice: Notice,
  Details: DetailsScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'HOME',
  tabBarIcon: ({tintColor}) => (
    <Feather name="home" color={tintColor} size={24} />
  )
};

FeedStack.navigationOptions = {
  tabBarLabel: 'FEED',
  tabBarIcon: ({tintColor}) => (
    <MaterialCommunityIcons name="soccer-field" color={tintColor} size={24} />
  )
};

NoticeStack.navigationOptions = {
  tabBarLabel: 'NOICE',
  tabBarIcon: ({tintColor}) => (
    <Feather name="bell" color={tintColor} size={24} />
  )
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: HomeStack,
      Feed: FeedStack,
      Notice: NoticeStack,
    },
    {
      /* Other configuration remains unchanged */
    }
  )
);
