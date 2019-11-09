import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, Image } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../styles/colors';

class SettingMemberScreen extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>

        <View>
          <TouchableOpacity
            style={{ flex: 1, height: 50, justifyContent: 'center' }}
            onPress={() => alert('Setting')}
          >
            <Text style={{ fontSize: 15, paddingLeft: 20 }}>Member 권한 설정</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    );
  }
}

export default SettingMemberScreen;

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
