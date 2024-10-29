import React from 'react';
import MainNavigator from './src/Routes/MainNavigator';
import {I18nextProvider} from 'react-i18next';
import i18n from '@shared/Localization';
import 'react-native-devsettings';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <MainNavigator />
    </I18nextProvider>
  );
};

export default App;
