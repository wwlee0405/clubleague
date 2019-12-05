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

        <Text>Input Club Name</Text>
        <Text>사진추가</Text>
        <Text>You can change club name and picture after you create it.</Text>
        <Text>클럽이름과 사진은 개설 후에도 변경할 수 있습니다.</Text>
      </View>

    );
  }
}

export default NewClubScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
