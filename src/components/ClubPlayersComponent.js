import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, Image } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../styles/colors';

class ClubPlayersComponent extends React.Component {

  render() {
    return (
      <View style={styles.clubPlayersSectionWrap}>
        <ScrollView>

          <View>
            <TouchableOpacity
              style={{ flex: 1, height: 70 }}
              onPress={() => alert("친구 초대하기")}
            >
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Feather name="user-plus" size={30} style={{ paddingLeft: 20, paddingRight: 20 }} />
                <Text>Invite as a member</Text>
              </View>
            </TouchableOpacity>
          </View>

          <FlatList
            data={[
              {key: 'Messi'},
              {key: 'Dan'},
              {key: 'Dominic'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
            ]}
            renderItem={({item}) =>
              <View style={styles.playersWrap}>

                <View style={styles.playersLeftWrap}>
                  <TouchableOpacity
                    onPress={() => alert("Profile")}
                  >
                    <Image
                      source={require('../data/ImgTest/dddd.jpg')}
                      style={styles.playersImg}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.playersRightWrap}>
                  <Text style={styles.playersRightTextTop}>{item.key}</Text>
                  <Text style={styles.playersRightTextBottom}>Seoul, Korea</Text>
                </View>

              </View>
            }
          />
        </ScrollView>
      </View>
    );
  }
}

export default ClubPlayersComponent;

const styles = StyleSheet.create({
  clubPlayersSectionWrap: {
   flex: 1,
  },
  playersWrap: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  playersLeftWrap: {
    alignItems: 'center',
    paddingLeft: 10,
  },
  playersImg: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  playersRightWrap: {
    paddingLeft: 20,
    justifyContent: 'center',
  },
  playersRightTextTop: {
    fontWeight: 'bold',
  },
  playersRightTextBottom: {
    color: colors.darkGrey,
    fontSize: 14,
  },
});
