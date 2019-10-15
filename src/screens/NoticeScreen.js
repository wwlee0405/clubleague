import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Feather } from '@expo/vector-icons';

import HeaderComponent from "../components/HeaderComponent";

class NoticeScreen extends React.Component {

  static navigationOptions = {

    tabBarIcon: ({tintColor}) => (
      <Feather name="bell" color={tintColor} size={24} />
    )
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <HeaderComponent />
        {/* other code from before here */}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

export default NoticeScreen;

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
