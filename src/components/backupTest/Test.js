import React from "react";
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from '../../styles/colors';

export default class Test extends React.Component {

  render() {

    const { text, textColor, background, border, handleOnPress } = this.props;
    const backgroundColor = background || 'transparent';
    const color = textColor || colors.black;
    const borderColor = border || 'transparent';

    return (
      <TouchableOpacity
        style={[{backgroundColor, borderColor}, styles.container]}
        onPress={handleOnPress}
      >
        <Text style={[{color}, styles.buttonText]}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

Test.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  background: PropTypes.string,
  border: PropTypes.string,
  icon: PropTypes.object,
  handleOnPress: PropTypes.func,

};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    width: '100%',
    textAlign: 'center',

  }
});
