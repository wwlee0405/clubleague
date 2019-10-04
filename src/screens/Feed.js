import React from "react";
import { StyleSheet, Text, View } from "react-native";

class Feed extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Open up App. this is Feed!</Text>
      </View>
    );
  }
}

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA"
  },
  text: {
    color: "#2C2C2C",
    fontSize: 30
  }
});
