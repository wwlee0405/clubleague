import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, Image } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../styles/colors';


class ClubSettingComponent extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>

        <View>
          <TouchableOpacity
            style={styles.settingBtn}
            onPress={() => this.props.navigation.navigate('Setting')}
          >
            <Text style={styles.settingBtnText}>설정</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.settingBtn}
            onPress={() => alert("Setting")}
          >
            <Text style={styles.settingBtnText}>설정</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.settingBtn}
            onPress={() => alert("Setting")}
          >
            <Text style={styles.settingBtnText}>설정</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    );
  }
}

export default ClubSettingComponent;

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  settingBtn: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
  },
  settingBtnText: {
    fontSize: 15,
    paddingLeft: 20,
  },
});
