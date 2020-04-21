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
import EntryScreen from "../screens/EntryScreen";
import NewClubScreen from "../screens/NewClubScreen";
import SearchClubScreen from "../screens/SearchClubScreen";
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
  SearchClub: {
    screen: SearchClubScreen,
    navigationOptions: () => ({
      title: 'Search Club',
      headerTintColor: colors.sacramento,
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
      title: 'Profile',
      headerTintColor: colors.sacramento,
      headerStyle: {
        backgroundColor: colors.white,
      },
    }),
  },
  EditProfile: {
    screen: EditProfileScreen,
    navigationOptions: () => ({
      title: 'Edit Profile',
    }),
  },
  FeedCard: {
    screen: FeedCardDetailsScreen,
    navigationOptions: () => ({
      title: 'FeedCard',
    }),
  },
});

const FeedStack = createStackNavigator({
  Feed: FeedScreen,
  FeedCard: {
    screen: FeedCardDetailsScreen,
    headerMode: 'none',
    navigationOptions: () => ({
      header: null,
    }),
  },
  Entry: {
    screen: EntryScreen,
    navigationOptions: () => ({
      title: 'Entry',
    }),
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: () => ({
      title: 'Detail for clubhouse',
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
      title: 'Profile',
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
          <Feather name="home" color={tintColor} size={25} />
        )
      }
    },
    Feed: {
      screen: FeedStack,
      navigationOptions: {
        tabBarLabel: 'Feed',
        tabBarIcon: ({tintColor}) => (
          <MaterialCommunityIcons name="soccer-field" color={tintColor} size={25} />
        )
      }
    },
    Notice: {
      screen: NoticeStack,
      navigationOptions: {
        tabBarLabel: 'Notice',
        tabBarIcon: ({tintColor}) => (
          <Feather name="bell" color={tintColor} size={25} />
        )
      }
    },
    Rank: {
      screen: NoticeStack,
      navigationOptions: {
        tabBarLabel: 'Rank',
        tabBarIcon: ({tintColor}) => (
          <Feather name="grid" color={tintColor} size={25} />
        )
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: colors.emerald,
      inactiveTintColor: colors.lightGrey,
      showLabel: false,
      showIcon: true,
      style: {
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
