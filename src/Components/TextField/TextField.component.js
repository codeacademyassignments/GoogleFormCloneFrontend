import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import style from './TextField.style';

export default class TextField extends Component {
  render() {
    const { index, onChange } = this.props;
    return (
      <TextInput style={style.text} onChangeText={(text) => { onChange(index, text); }} />
    );
  }
}

TextField.propTypes = {
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
