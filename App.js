import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import AppRoutes from "./src/navigators/AppRoutes";

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;

class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Clubleague</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => this.props.navigation.navigate('Main')}
          >
            <Text style={styles.btnText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => alert("Sign up works")}
          >
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  Welcome:{ screen: WelcomeScreen },
  Main: AppRoutes
});

const AppContainer = createAppContainer(AppSwitchNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 30,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%"
  },
  userBtn: {
    backgroundColor: "#3897f0",
    padding: 15,
    width: "45%"
  },
  btnText: {
    color: "white",
    fontSize: 18,
    textAlign: "center"
  }
});
