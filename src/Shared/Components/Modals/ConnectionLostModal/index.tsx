import React, {useEffect, useState} from 'react';
import BaseModal from '@shared/Components/Modals/BaseModal';
import {UseTranslationHook} from '@shared/Hooks/UseTranslationHook';
import Colors from '@shared/Theme/Colors';
import {UseCheckInternetConnection} from '@shared/Hooks/UseCheckInternetConnection';

const ConnectionLostModal = () => {
  const {t} = UseTranslationHook();
  const {isConnected} = UseCheckInternetConnection();
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (!isConnected) setShowModal(true);
  }, [isConnected]);

  return showModal ? (
    <BaseModal
      data={{
        iconName: 'wifi',
        iconColor: Colors.System.Error.Normal,
        title: t('ERRORS.NO_INTERNET'),
        btnText: t('SHARED.BACK'),
      }}
      config={{withBtn: true}}
      eventHandlers={{onBtnPress: () => setShowModal(false)}}
    />
  ) : null;
};

export default ConnectionLostModal;
