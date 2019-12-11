import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../styles/colors';

import ClubHome from "../components/clubMain/ClubHome";
import ClubSchedule from "../components/clubMain/ClubSchedule";
import ClubPlayers from "../components/clubMain/ClubPlayers";


class DetailsScreen extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      activeIndex: 0
    }
  }

  segmentClicked = (index) => {
    this.setState({
      activeIndex: index
    })
  }

  renderSection = () => {

    if (this.state.activeIndex == 0) {
      const { navigation } = this.props;
      return (
        <View>
          <ClubHome
            onPress={() => navigation.navigate('Details')}
            clubImg={require('../data/ImgTest/aaaa.jpg')}
            clubProfileImg={require('../data/ImgTest/2bar.jpg')}
            clubName="F.C. Barcelona"
            sports="Soccer"
            members="15"
            leaderUser="Ernesto Valverde"
            address="Barcelona"

            feedOnPress={() => navigation.navigate('FeedCard')}
            feedProfileOnPress={() => navigation.navigate('Profile')}
          />

        </View>
      )
    }
    else if (this.state.activeIndex == 1) {

      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <ClubSchedule />
        </View>
      )
    }
    else if (this.state.activeIndex == 2) {
      const { navigation } = this.props;
      return (
        <View>
          <ClubPlayers
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
      )
    }
    else if (this.state.activeIndex == 3) {
      const { navigation } = this.props;
      return (
        <View>
          <Text>Club Information Page~</Text>
        </View>
      )
    }
    else if (this.state.activeIndex == 4) {

      return (
        <View>

          <View>
            <TouchableOpacity
              style={{ flex: 1, height: 50, justifyContent: 'center' }}
              onPress={() => this.props.navigation.navigate('Setting')}
            >
              <Text style={{ fontSize: 15, paddingLeft: 20 }}>Club 기본 정보 관리</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={{ flex: 1, height: 50, justifyContent: 'center' }}
              onPress={() => this.props.navigation.navigate('SettingMember')}
            >
              <Text style={{ fontSize: 15, paddingLeft: 20 }}>Member 활동 관리</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={{ flex: 1, height: 50, justifyContent: 'center' }}
              onPress={() => this.props.navigation.navigate('SettingManagement')}
            >
              <Text style={{ fontSize: 15, paddingLeft: 20 }}>Management 설정</Text>
            </TouchableOpacity>
          </View>

        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.clubTab}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollWrap}
          >
            <TouchableOpacity
              onPress={() => this.segmentClicked(0)}
              active={this.state.activeIndex == 0}
              style={styles.clubTabButton}
            >
              <Text
                name="home"
                size={15}
                style={[this.state.activeIndex == 0 ? {} : { color: colors.lightGrey }]}
              >
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.segmentClicked(1)}
              active={this.state.activeIndex == 1}
              style={styles.clubTabButton}
            >
              <Text
                name="schedule"
                size={15}
                style={[this.state.activeIndex == 1 ? {} : { color: colors.lightGrey }]}
              >
                Schedule
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.segmentClicked(2)}
              active={this.state.activeIndex == 2}
              style={styles.clubTabButton}
            >
              <Text
                name="players"
                size={15}
                style={[this.state.activeIndex == 2 ? {} : { color: colors.lightGrey }]}
              >
                Players
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              transparent
              onPress={() => this.segmentClicked(3)}
              active={this.state.activeIndex == 3}
              style={styles.clubTabButton}
            >
              <Text
                name="setting"
                size={15}
                style={[this.state.activeIndex == 3 ? {} : { color: colors.lightGrey }]}
              >
                Info
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              transparent
              onPress={() => this.segmentClicked(4)}
              active={this.state.activeIndex == 4}
              style={styles.clubTabButton}
            >
              <Text
                name="setting"
                size={15}
                style={[this.state.activeIndex == 4 ? {} : { color: colors.lightGrey }]}
              >
                Setting
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >

          <View>

            {this.renderSection()}

          </View>
        </ScrollView>

      </View>
    );
  }
}

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  clubTab: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: colors.white01,
  },
  clubTabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
});
