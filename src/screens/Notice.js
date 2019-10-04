import React from "react";
import { StyleSheet, Text, View } from "react-native";

class Notice extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Open up App. this is notice!</Text>
      </View>
    );
  }
}

export default Notice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
  text: {
    color: "#2C2C2C",
    fontSize: 30
  }
});
