import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, Image, Button } from "react-native";
import colors from '../styles/colors';

class HomeSchedule extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.scheduleTopWrap}>
          <Text style={styles.rightText}>My Schedule</Text>
        </View>
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
                onPress={() => alert("Detail for Schedule of Club")}
                /*onPress={() => this.props.navigation.navigate('Details')}*/
              >
                <View style={styles.noticeWrap}>

                  <View style={styles.rightWrap}>
                    <TouchableOpacity
                      onPress={() => alert("Profole")}
                    >
                      <Image
                        source={require('../data/ImgTest/eeee.png')}
                        style={styles.img}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.bodyWrap}>
                    <Text style={styles.textTop}>{item.key}</Text>
                    <Text style={styles.textBottom}>Doing what you like will always keep you happy . .</Text>
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

export default HomeSchedule;

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 5,
  },
  scheduleTopWrap: {
    height: 40,
    paddingHorizontal: 7,
  },
  rightText: {
    fontWeight: 'bold',
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
