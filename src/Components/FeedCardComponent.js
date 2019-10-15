import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Badge } from "native-base";
import { Feather } from '@expo/vector-icons';

class FeedCardComponent extends React.Component {

  render() {

    const profileImages = {
      "1": require('../data/ImgTest/eeee.png'),
      "2": require('../data/ImgTest/ffff.jpg'),
      "3": require('../data/ImgTest/cccc.jpg'),
      "4": require('../data/ImgTest/dddd.jpg')
    }

    const images = {
      "1": require('../data/ImgTest/aaaa.jpg'),
      "2": require('../data/ImgTest/bbbb.jpg'),
      "3": require('../data/ImgTest/1ars.jpg'),
      "4": require('../data/ImgTest/2bar.jpg')
    }

    return (
      <Card>
        <CardItem>
          <Left>
            <TouchableOpacity
              onPress={() => alert("Profole")}
            >
              <Thumbnail source={profileImages[this.props.profileImage]} />
            </TouchableOpacity>
            <Body>
              <Text>{this.props.user}</Text>
              <Text>{this.props.address}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Image
            style={{ height: 150, width: null, flex: 1 }}
            source={images[this.props.imageSource]}
          />
        </CardItem>
        <CardItem>
          <Text>
            이번주 02/17 매칭 초청합니다.
            팀명:클럽하우스
            유니폼:흰색
            매너:최고
            장소:수지체육공원
          </Text>
        </CardItem>

        <CardItem style={{ height: 40 }}>
          <Badge success>
            <Text style={{ color: 'white' }}>Osaka</Text>
          </Badge>
          <Badge info>
            <Text style={{ color: 'white' }}>Oct 20, 2019</Text>
          </Badge>
        </CardItem>

        <CardItem style={{ height: 48 }}>
          <Body>
            <Text style={{ fontSize: 12 }}><Text>{this.props.hits}</Text>  Hits</Text>
            <Text note style={{ color: 'grey', fontSize: 12 }}>PM 5 : 20, Jan 15, 2019</Text>
          </Body>
        </CardItem>

        <CardItem style={{ height: 45 }}>
          <Left>
            <Button transparent>
              <Feather name="message-circle" style={{ color: 'black' }} size={30} />
            </Button>
            <Button transparent>
              <Feather name="share-2" style={{ color: 'black' }} size={30}/>
            </Button>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

export default FeedCardComponent;
