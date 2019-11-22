import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import colors from '../../styles/colors';

export default class FeedMatchBoxItem extends React.Component {

  render() {
    const { onPress, profileImg, title, labelColor, clubName, entry } = this.props;
    const color = labelColor || colors.yellow;
    return (
      <View style={{  }}>

        <View style={styles.topContainer}>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <TouchableOpacity onPress={onPress}>
                <Image
                  source={profileImg}
                  style={styles.img}
                />
              </TouchableOpacity>
            </View>

            <View style={{ paddingLeft: 10 }}>
              <Text style={[{ color }, styles.labelText]}>{title}</Text>
              <Text style={styles.clubName}>{clubName}</Text>
            </View>
          </View>

          <View style={{ paddingLeft: 10 }}>
            <TouchableOpacity style={{ width: 80, height: 40, borderRadius: 8, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.blue }}>
              <Text style={{ color: colors.white, alignItems: 'center' }}>참석</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={{ width: 60, justifyContent: 'center', alignItems: 'center' }}><Text>{entry}</Text> Entry</Text>
          <View>
            <Image
              source={profileImg}
              style={styles.entryImg}
            />
          </View>
        </View>

      </View>
    );
  }
}

FeedMatchBoxItem.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string.isRequired,

  labelColor: PropTypes.string,
  clubName: PropTypes.string,
  entry: PropTypes.string,
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  box: {
    flexDirection: 'row',
    width: 220,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    paddingLeft: 10,
  },
  labelText: {
    fontSize: 10,
  },
  clubName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingHorizontal: 15,
  },
  entryImg: {
    width: 25,
    height: 25,
    borderRadius: 100,
  }
});
