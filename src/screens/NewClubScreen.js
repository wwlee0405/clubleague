import React from "react";
import { StyleSheet, Text, View, ScrollView , TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../styles/colors';


class NewClubScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          title="submit"
        >
          <Feather name="check" size={30} style={{ paddingRight: 10 }} />
        </TouchableOpacity>
      ),
    };
  };

  render() {
    return (
      <View style={styles.container}>

        <Text>new club create page~!</Text>
      </View>

    );
  }
}

export default NewClubScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
