import axios from 'axios';
import {Platform} from 'react-native';

const api = axios.create({
  baseURL:
    Platform.OS === 'ios'
      ? 'http://localhost:5001/api'
      : 'http://10.0.2.2:5001/api',
  timeout: 1000,
});

export default api;
