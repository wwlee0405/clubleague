import React from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../styles/colors';

import SearchClubCard from "../components/contents/SearchClubCard";


class SearchClubScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <View>
          <TextInput style={styles.inputSection} placeholder="Search for club name, sport, reader name" />
        </View>
      ),
    };
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >
          <SearchClubCard
            onPress={() => navigation.navigate('Details')}
            clubProfileImg={require('../data/ImgTest/2bar.jpg')}
            clubName="FC Barcelona"
            sports="Soccer"
            members="15"
            leaderUser="Ernesto Valverde"
            address="Spain"
          />
          <SearchClubCard
            onPress={() => navigation.navigate('Details')}
            clubProfileImg={require('../data/ImgTest/2bar.jpg')}
            clubName="FC Barcelona"
            sports="Soccer"
            members="15"
            leaderUser="Ernesto Valverde"
            address="Spain"
          />
          <SearchClubCard
            onPress={() => navigation.navigate('Details')}
            clubProfileImg={require('../data/ImgTest/2bar.jpg')}
            clubName="FC Barcelona"
            sports="Soccer"
            members="15"
            leaderUser="Ernesto Valverde"
            address="Spain"
          />


        </ScrollView>
      </View>

    );
  }
}

export default SearchClubScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inputSection: {
    fontSize: 15,
  },
});
