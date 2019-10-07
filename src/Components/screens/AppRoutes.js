import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from "./MainScreen";

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
