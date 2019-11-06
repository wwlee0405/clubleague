import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, Image } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../styles/colors';

class NoticeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <MaterialCommunityIcons name="soccer" size={30} style={{ paddingLeft: 10 }} />,
      headerTitle: <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Clubleague</Text>,
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          title="profile"
        >
          <Feather name="user" size={30} style={{ paddingRight: 10 }} />
        </TouchableOpacity>
      ),
    };
  };

  render() {

    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView>
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
              <TouchableOpacity
                onPress={() => alert("Article")}
              >
                <View style={styles.noticeWrap}>

                  <View style={styles.rightWrap}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Profile")}
                    >
                      <Image
                        source={require('../data/ImgTest/cccc.jpg')}
                        style={styles.img}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.bodyWrap}>
                    <Text style={styles.textTop}>{item.key}</Text>
                    <Text style={styles.textBottom}>게임 요청을 합니다 . .</Text>
                  </View>

                  <View style={styles.leftWrap}>
                    <Text style={styles.textTime}>3:43 pm</Text>
                  </View>

                </View>
              </TouchableOpacity>

            }
          />
        </ScrollView>
      </View>
    );
  }
}

export default NoticeScreen;

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  noticeWrap: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
  },
  rightWrap: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 10,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  bodyWrap: {
    flex: 3,
    paddingLeft: 10,
  },
  textTop: {
    fontWeight: 'bold',
  },
  textBottom: {
    color: colors.darkGrey,
  },
  leftWrap: {
    flex: 1,
    paddingLeft: 10,
  },
  textTime: {
    color: colors.darkGrey,
    fontSize: 12,
  }
});
