import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>WelcomeScreen</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Main')}
        />
        <Button title="Sign Up" onPress={() => alart('button pressed')} />

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
