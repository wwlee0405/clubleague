import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../styles/colors';

class SettingScreen extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>

        <View>
          <TouchableOpacity
            style={styles.settingBtn}
            onPress={() => alert("Setting")}
          >
            <Text style={styles.settingBtnText}>club 기본 설정</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    );
  }
}

export default SettingScreen;

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
