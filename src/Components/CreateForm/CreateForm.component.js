import React, { Component } from 'react';
import {
  Text, View, Button, Alert,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import style from './CreateForm.style';
import TextField from '../TextField/TextField.component';
import createForm from '../../Helper/createForm';

export default class CreateForm extends Component {
  static navigationOptions = () => ({
    headerTitle: (
      <Text style={style.title}>Create Form</Text>
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
    formName: '',
    fields: [],
  }

  addFields = () => {
    const { fields } = this.state;
    fields.push('');
    this.setState({ fields });
  }

  getFields = () => {
    const { fields } = this.state;
    return fields.map((field, index) => (<TextField key="field" index={index} onChange={this.onChange} />));
  }

  onChange = (index, text) => {
    const { fields } = this.state;
    fields[index] = text;
    this.setState({ fields });
  }

  onSubmit = () => {
    const { fields, formName } = this.state;
    const anyFieldEmpty = (fields.some(field => field === ''));
    if (anyFieldEmpty || (formName === '') || fields.length === 0) {
      Alert.alert('Please fill all fields');
    } else {
      createForm(this.state).then(() => {
        Alert.alert('SUCCESS');
      }).catch(() => {
        Alert.alert('Error');
      });
    }
  }

  render() {
    return (
      <View style={style.outterMostView}>
        <View style={style.formNameAndField}>
          <TextInput style={{ backgroundColor: 'red' }} onChangeText={text => (this.setState({ formName: text }))} />
          <Button title="ADD FIELD" onPress={() => this.addFields()} color="#3F50B8" style={style.addFieldButton} />
          {this.getFields()}
        </View>
        <View>
          <Button title="SAVE" color="#3F50B8" style={style.submitButton} onPress={() => { this.onSubmit(); }} />
        </View>
      </View>
    );
  }
}
