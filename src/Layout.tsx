import React from 'react';

import Navigation from '_navigation/NavigationContainer';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomPopup from '_components/CustomPopup/CustomPopup';
import {toastConfig} from '_utils/customToastConfig/toastConfig';
import Toast from 'react-native-toast-message';
import {useAppSelector} from '_store/api/store.hooks';
import {selectPopupConfig} from '_store/features/popup/popupSlice';

const Layout = () => {
  const popupConfig = useAppSelector(selectPopupConfig);
  return (
    <SafeAreaView edges={['top']} style={{flex: 1}}>
      <Navigation />
      <CustomPopup {...popupConfig} />
      <Toast config={toastConfig} position="bottom" autoHide />
    </SafeAreaView>
  );
};

export default Layout;
