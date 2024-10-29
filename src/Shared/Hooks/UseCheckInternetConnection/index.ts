import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
import {useEffect, useState} from 'react';

export const UseCheckInternetConnection = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  const handleConnectivityChange = (state: NetInfoState) => {
    setIsConnected(state.isConnected);
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(handleConnectivityChange);
    return () => {
      unsubscribe();
    };
  }, []);

  return {
    isConnected,
  };
};
