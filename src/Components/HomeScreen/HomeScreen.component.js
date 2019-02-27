import React, { Component } from 'react';
import {
  View, Text, Alert, TouchableOpacity, ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import style from './HomeScreen.style';
import FormBlock from '../FormBlock/FormBlock.component';
import getAllForms from '../../Helper/getAllForms';

export default class HomeScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: (
      <Text style={style.title}>Awesome Forms</Text>
    ),
    headerRight: (
      <View style={style.menuIcon}>
        <View borderRadius={10} style={style.iconCircleEdge} />
        <View borderRadius={10} style={style.iconCircleMiddle} />
        <View borderRadius={10} style={style.iconCircleEdge} />
      </View>
    ),
    headerStyle: { backgroundColor: '#3F50B8', height: 80 },
    headerTitleStyle: { color: 'white' },
  }
  )

  state = {
    forms: [],
  }

  async componentDidMount() {
    const forms = await getAllForms();
    this.setState({ forms: forms.data });
  }

  getFormBlocks = formBlocks => formBlocks.map(formBlock => (
    <FormBlock key={formBlock.formName} formBlock={formBlock} />
  ))

  render() {
    const { forms } = this.state;
    const onPress = () => () => {
      const { navigation } = this.props;
      navigation.navigate('CreateForm');
    };
    return (
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View style={style.formBlocks}>
          {this.getFormBlocks(forms)}
          <View style={{ alignSelf: 'flex-end', margin: 10 }}>
            <TouchableOpacity
              onPress={onPress()}
              style={style.createFormButton}
            >
              <View style={style.cross}>
                <View style={style.crossUp} />
                <View style={style.crossFlat} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
