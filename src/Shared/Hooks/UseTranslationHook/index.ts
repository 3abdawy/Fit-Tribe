import {useTranslation} from 'react-i18next';

export const UseTranslationHook = () => {
  const {t} = useTranslation();

  return {
    t,
  };
};
