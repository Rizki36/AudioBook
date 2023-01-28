import {KEY_TOKEN} from '@app/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const deviceStorage = {
  setJWT: (token: string) => {
    return AsyncStorage.setItem(KEY_TOKEN, token);
  },
  resetJWT: () => {
    return AsyncStorage.removeItem(KEY_TOKEN);
  },
  getJWT: () => {
    return AsyncStorage.getItem(KEY_TOKEN);
  },
};
export default deviceStorage;
