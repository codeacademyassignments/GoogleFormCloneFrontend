import { Platform } from 'react-native';

let ALL_FORMS_URL;
if (Platform.OS === 'android') {
  ALL_FORMS_URL = 'http://10.0.2.2:8080/forms';
} else {
  ALL_FORMS_URL = 'http://localhost:8080/forms';
}
// const ALL_FORMS_URL = 'http://10.0.2.2:8080/forms';

export default ALL_FORMS_URL;
