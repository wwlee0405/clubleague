import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { Feather } from '@expo/vector-icons';

class HomeTab extends React.Component {

  static navigationOptions = {
    
    tabBarIcon: ({tintColor}) => (
      <Feather name="home" color={tintColor} size={24} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.clubContainer}>
          <Text>Club league</Text>
        </View>
        <View style={styles.scheduleContainer}>
          <Text>Schedule!!</Text>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      </View>
    );
  }
}

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1
    },
  clubContainer: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  scheduleContainer: {
    flex: 2,
    backgroundColor: 'blue',
    justifyContent: 'center'
  }
});
