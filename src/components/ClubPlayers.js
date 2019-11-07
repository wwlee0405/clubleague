import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, Image } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../styles/colors';
import ListItem from './items/ListItem';

class ClubPlayers extends React.Component {

  render() {

    const { onPress } = this.props;

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
              <ListItem
                onPress={onPress}
                profileImg={require('../data/ImgTest/dddd.jpg')}
                user={item.key}
                address="Seoul, Korea"
              />
            }
          />
        </ScrollView>
      </View>
    );
  }
}

export default ClubPlayers;

const styles = StyleSheet.create({
  clubPlayersSectionWrap: {
   flex: 1,
  },
});
