import axios from 'axios';
import { Platform, Alert } from 'react-native';

let url;
if (Platform.OS === 'android') {
  url = 'http://10.0.2.2:8080/form';
} else {
  url = 'http://localhost:8080/form';
}

export default (data) => {
  Alert.alert('insedd');
  return axios({
    method: 'post',
    url,
    data,
  });
};
