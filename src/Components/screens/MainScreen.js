import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeTab from "../AppTabNavigator/HomeTab";
import FeedTab from "../AppTabNavigator/FeedTab";
import NoticeTab from "../AppTabNavigator/NoticeTab";

import ProfileTab from "../AppTabNavigator/ProfileTab";
import EditProfileTab from "../AppTabNavigator/EditProfileTab";

class MainScreen extends React.Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <AppContainer />
    );
  }
}

export default MainScreen;

const AppTabNavigator = createBottomTabNavigator({
  Home:{
    screen: HomeTab
  },
  Feed:{
    screen: FeedTab
  },
  Notice:{
    screen: NoticeTab
  },
  Profile:{
    screen: ProfileTab
  },
  EditProfile:{
    screen: EditProfileTab
  }
},{
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor: '#34A853',
    inactiveTintColor: '#d1cece',
    style:{
      ...Platform.select({
        android:{
          backgroundColor:'white'
        }
      }),
      showLabel: false,
      showIcon: true,
      backgroundColor: '#FAFAFA',
      borderTopWidth: 0,
      shadowOffset:{width:5,height:3},
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
});

const AppContainer = createAppContainer(AppTabNavigator);
