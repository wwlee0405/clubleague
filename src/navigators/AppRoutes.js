import React from "react";
import {
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../styles/colors';
import HomeScreen from "../screens/HomeScreen";
import FeedScreen from "../screens/FeedScreen";
import NoticeScreen from "../screens/NoticeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import FeedCardDetailsScreen from "../screens/FeedCardDetailsScreen";
import NewClubScreen from "../screens/NewClubScreen";
import DetailsScreen from "../screens/DetailsScreen";
import WritingScreen from "../screens/WritingScreen";

import SettingScreen from "../screens/SettingScreen";
import SettingMemberScreen from "../screens/SettingMemberScreen";
import SettingManagementScreen from "../screens/SettingManagementScreen";

//Auth Screen

//AuthStark

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  NewClub: {
    screen: NewClubScreen,
    navigationOptions: () => ({
      title: 'New Club',
    }),
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: () => ({
      title: 'Detail for clubhouse',
    }),
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: () => ({
      title: 'Setting',
    }),
  },
  SettingMember: {
    screen: SettingMemberScreen,
    navigationOptions: () => ({
      title: 'SettingMember',
    }),
  },
  SettingManagement: {
    screen: SettingManagementScreen,
    navigationOptions: () => ({
      title: 'SettingManagement',
    }),
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      title: 'Profile'
    }),
  },
  EditProfile: {
    screen: EditProfileScreen,
    navigationOptions: () => ({
      title: 'Edit Profile',
    }),
  },
});

const FeedStack = createStackNavigator({
  Feed: FeedScreen,
  FeedCard: {
    screen: FeedCardDetailsScreen,
    navigationOptions: () => ({
      title: 'FeedCard',
    }),
  },
  Writing: {
    screen: WritingScreen,
    navigationOptions: () => ({
      title: 'Writing',
    }),
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      title: 'Profile'
    }),
  },
  EditProfile: {
    screen: EditProfileScreen,
    navigationOptions: () => ({
      title: 'Edit Profile',
    }),
  },
});

const NoticeStack = createStackNavigator({
  Notice: NoticeScreen,
  Profile: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      title: 'Profile'
    }),
  },
  EditProfile: {
    screen: EditProfileScreen,
    navigationOptions: () => ({
      title: 'Edit Profile',
    }),
  },
});

// React Navigation: Bottom Tab Navigator
const BottomTab = createBottomTabNavigator(
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

const App = createSwitchNavigator({
  AppRoutes: {
    screen: BottomTab
  }
});

export default createAppContainer(App);
