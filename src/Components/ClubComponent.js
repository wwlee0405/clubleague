import React from "react";
import { StyleSheet, Text, View } from "react-native";

class ClubComponent extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>ClubComponent!</Text>
      </View>
    );
  }
}

export default ClubComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
    },
  text: {
    color: "#2C2C2C",
    fontSize: 30
  }
});
