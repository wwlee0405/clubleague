import React from "react";
import { StyleSheet, Text, View, TextInput , TouchableOpacity, Dimensions } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../styles/colors';

import SetSportBox from '../components/form/SetSportBox';
import SetAddressBox from '../components/form/SetAddressBox';
import SetDateBox from '../components/form/SetDateBox';
import CreateMatchBox from '../components/form/CreateMatchBox';

class WritingScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('Feed')}
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
        <TextInput
          placeholder="This is Writing section~!"
          style={{ paddingLeft: 15 }}
        />

        <View style={{ flex: 1, alignItems: 'center' }}>
          <SetSportBox />
          <SetAddressBox homeAway="City" />
          <SetDateBox homeAway="Date" />
          <CreateMatchBox homeAway="Home" borderLine={colors.darkGrey} labelColor={colors.darkGrey} />
          <CreateMatchBox homeAway="Away" />
          <CreateMatchBox homeAway="Away" />
          <CreateMatchBox homeAway="Away" />
        </View>

        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 40 }}>
          <View style={{ paddingLeft: 15 }}>
            <TouchableOpacity
              style={{ width: 100, height: 45, borderRadius: 10, alignItems: 'center', justifyContent: 'center', borderWidth: 1,}}
              onPress={() => alert("apply for match")}
            >
              <Text>Match</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingLeft: 15 }}>
            <TouchableOpacity
              style={{ width: 100, height: 45, borderRadius: 10, alignItems: 'center', justifyContent: 'center', borderWidth: 1,}}
              onPress={() => alert("apply for match")}
            >
              <Text>Daily Player</Text>
            </TouchableOpacity>
          </View>
        </View>
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
