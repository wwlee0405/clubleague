import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import colors from '../../styles/colors';

export default class FeedMatchBoxItem extends React.Component {

  render() {
    const {
      onPress,
      clubDetailOnPress,
      profileImg,
      title,
      labelColor,
      clubName,
      entry
    } = this.props;
    const color = labelColor || colors.yellow;
    return (
      <View style={styles.container}>

        <View style={styles.topContainer}>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.topLeftWrap}>
              <View>
                <TouchableOpacity onPress={clubDetailOnPress}>
                  <Image
                    source={profileImg}
                    style={styles.clubImg}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.labelWrap}>
                <Text style={[{ color }, styles.labelText]}>{title}</Text>
                <Text style={styles.clubName}>{clubName}</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.topRightWrap}>
            <TouchableOpacity style={styles.attendBtn}>
              <Text style={styles.btnText}>참석</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.entryText}><Text>{entry}</Text> Entry</Text>
          <View style={{ paddingRight: 3 }}>
            <Image
              source={profileImg}
              style={styles.entryImg}
            />
          </View>
          <View style={{ paddingRight: 3 }}>
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
  clubDetailOnPress: PropTypes.func,
  profileImg: PropTypes.number, 
  title: PropTypes.string.isRequired,
  labelColor: PropTypes.string,
  clubName: PropTypes.string,
  entry: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  topLeftWrap: {
    flexDirection: 'row',
    width: 300,
    height: 50,
  },
  clubImg: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  labelWrap: {
    paddingLeft: 10,
  },
  labelText: {
    fontSize: 10,
  },
  clubName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  topRightWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  attendBtn: {
    width: 80,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
  btnText: {
    color: colors.white,
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingHorizontal: 15,
  },
  entryText: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
  },
  entryImg: {
    width: 25,
    height: 25,
    borderRadius: 100,
  },
});
