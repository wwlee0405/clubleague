import React from "react";
import { StyleSheet, View, ScrollView , TouchableOpacity, Image } from "react-native";
import colors from '../../styles/colors';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);

  }

  get Categories() {
    const { categories, onPress } = this.props;
    return categories.map((category, index) => {
      return(
        <TouchableOpacity
          onPress={onPress}
        >
          <Image
            style={styles.thumbnail}
            source={category.photo}
          />
        </TouchableOpacity>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollWrap}
      >
        {this.Categories}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  thumbnail: {
    marginHorizontal: 5,
    borderColor: colors.pink,
    borderWidth: 2,
    width: 85,
    height: 85,
    borderRadius: 100,
  },
  scrollWrap: {
    alignItems: 'center',
    paddingStart: 5,
    paddingEnd: 5,
  },
});
