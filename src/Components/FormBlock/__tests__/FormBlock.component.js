import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import style from './FormBlock.style';

export default class FormBlock extends Component {
  separateDateAndTime= (timeStamp) => {
    const separateDate = timeStamp.split('T');
    const separateTime = separateDate[1].split('.')[0];
    return `${separateDate[0]} ${separateTime}`;
  }

  render() {
    const { formBlock: { formName, createdAt } } = this.props;
    return (
      <View style={style.formBlock}>
        <View style={style.innerFormBlock}>
          <Text style={style.formName}>{formName}</Text>
          <View>
            <View style={style.horizontalLine} />
            <Text style={style.creationDate}>
Created On:
              {this.separateDateAndTime(createdAt)}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

FormBlock.propTypes = {
  formBlock: PropTypes.shape({
    formName: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};
