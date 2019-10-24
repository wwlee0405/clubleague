import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../styles/colors';

class WritingScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>this is Writing section~!</Text>
      </View>
    );
  }
}

export default WritingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
