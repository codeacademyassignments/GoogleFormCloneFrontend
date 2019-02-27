import axios from 'axios';
import ALL_FORMS_URL from '../Constants/URL';


export default () => axios.get(ALL_FORMS_URL);
