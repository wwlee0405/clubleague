import React from "react";
import {
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../styles/colors';
import HomeScreen from "../screens/HomeScreen";
import FeedScreen from "../screens/FeedScreen";
import NoticeScreen from "../screens/NoticeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import DetailsScreen from "../screens/DetailsScreen";
import WritingScreen from "../screens/WritingScreen";

//Auth Screen

export const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: {
    screen: DetailsScreen,
    navigationOptions: () => ({
      title: "Detail for clubhouse",
    }),
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      title: "Profile"
    }),
  },
  EditProfile: {
    screen: EditProfileScreen,
    navigationOptions: () => ({
      title: "Edit Profile",
    }),
  },
});

export const FeedStack = createStackNavigator({
  Feed: FeedScreen,
  Writing: {
    screen: WritingScreen,
    navigationOptions: () => ({
      title: "Writing",
    }),
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      title: "Profile"
    }),
  },
});

export const NoticeStack = createStackNavigator({
  Notice: NoticeScreen,
  Profile: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      title: "Profile"
    }),
  },
  EditProfile: {
    screen: EditProfileScreen,
    navigationOptions: () => ({
      title: "Edit Profile",
    }),
  },
});

// React Navigation: Bottom Tab Navigator
export default BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions:{
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Feather name="home" color={tintColor} size={24} />
        )
      }
    },
    Feed: {
      screen: FeedStack,
      navigationOptions: {
        tabBarLabel: 'Feed',
        tabBarIcon: ({tintColor}) => (
          <MaterialCommunityIcons name="soccer-field" color={tintColor} size={24} />
        )
      }
    },
    Notice: {
      screen: NoticeStack,
      navigationOptions: {
        tabBarLabel: 'Notice',
        tabBarIcon: ({tintColor}) => (
          <Feather name="bell" color={tintColor} size={24} />
        )
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: colors.yellowGreen,
      inactiveTintColor: colors.lightGrey,
      style: {
        showLabel: false,
        showIcon: true,
        backgroundColor: colors.white,
        borderTopWidth: 0,
        shadowOffset: {width:5, height:3},
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  }
);

// React Navigation: Authentication Stack Navigator
/*
export const AuthNavigation = createStackNavigator(
	{
		AuthHome: AuthHome,
		Signup: Signup,
		Login: Login,
		Confirm: Confirm
	},
	{
		headerMode: "none"
	}
);
*/

// React Navigation: Application Stack Navigator
export const AppStack = createStackNavigator({
  BottomTabNavigator: BottomTabNavigator,
});

// React Navigation: Switch Container
export const AppContainer = createAppContainer(createSwitchNavigator(
  {

    AppStack: AppStack,
  },
    // Options
  {
    //initialRouteName: 'Auth',
  }
));

class AppRoutes extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
