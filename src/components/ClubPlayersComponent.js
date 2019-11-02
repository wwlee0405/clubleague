import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, Image } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../styles/colors';

class ClubPlayersComponent extends React.Component {

  render() {
    return (
      <View style={styles.container}>
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
              {key: 'Devin'},
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

                <View style={styles.rightWrap}>
                  <TouchableOpacity
                    onPress={() => alert("Profole")}
                  >
                    <Image
                      source={require('../data/ImgTest/cccc.jpg')}
                      style={styles.img}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.bodyWrap}>
                  <Text style={styles.textTop}>{item.key}</Text>
                  <Text style={styles.textBottom}>Seoul, Korea</Text>
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
  container: {
   flex: 1,
  },
  playersWrap: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  rightWrap: {
    alignItems: 'center',
    paddingLeft: 10,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  bodyWrap: {
    paddingLeft: 20,
    justifyContent: 'center',
  },
  textTop: {
    fontWeight: 'bold',
  },
  textBottom: {
    color: colors.darkGrey,
    fontSize: 14,
  },
});
