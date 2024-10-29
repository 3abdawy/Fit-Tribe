import envConfig from 'react-native-config';

const config = {
  apiUrl: envConfig.API_URL + '/api/',
  pusher: {
    appKey: envConfig.PUSHER_APP_KEY,
    isLogToConsole: __DEV__,
    appCluster: 'eu',
  },
};

export default config;
