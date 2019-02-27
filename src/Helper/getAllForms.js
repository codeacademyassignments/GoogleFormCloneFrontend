import axios from 'axios';
import ALL_FORMS_URL from '../Constants/URL';


export default () => {
  console.log(ALL_FORMS_URL);
  return axios.get(ALL_FORMS_URL);
};
