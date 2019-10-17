import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from "./MainScreen";

/*AppRouters.js => MainScreen.js (Navigator part backup)*/

class AppRoutes extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Main:{
    screen: MainScreen
  }
});

export default createAppContainer(AppStackNavigator);
