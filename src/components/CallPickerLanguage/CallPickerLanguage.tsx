import React, {useLayoutEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './callPickerLanguageStyles';
import {translate} from '_i18n';
import {useAppSelector, useAppDispatch} from '_store/api/store.hooks';
import CustomRadioGroup, {
  RadioItem,
} from '_components/CustomRadioGroup/CustomRadioGroup';
import {IconSizes, languagePickerData} from '_utils/constants';
import CustomModal from '_components/CustomModal/CustomModal';
import {LocaleLanguage, PickerItems} from '_utils/enums';
import {
  SelectLocaleLanguage,
  setLanguage,
} from '_store/features/localeLanguage/LocaleLanguageSlice';
import {LanguageIcon} from '_assets/drawables';

/*
 * CallPickerLanguage Component
 * This component renders a button that, when pressed, displays a modal
 * with a list of languages to choose from. It handles the state for
 * the currently selected language and updates the application language
 * accordingly.
 */

export const CallPickerLanguage: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [selectedItem, setSelectedItem] = useState<number>(
    languagePickerData[0].id,
  );
  const language = useAppSelector(SelectLocaleLanguage).language;

  const [label, setLabel] = useState<PickerItems>(PickerItems.ENGLISH);

  const dispatch = useAppDispatch();

  const toggleModalVisibility = (): void => {
    setModalVisible(prev => !prev);
  };

  /* Function to handle the language change */
  const handleLanguageChange = async (lang: LocaleLanguage): Promise<void> => {
    try {
      dispatch(setLanguage(lang));
    } catch (error) {
      console.error(`Error while changing language to ${lang}:`, error);
    }
  };

  const handlePopupActions = async (item: RadioItem): Promise<void> => {
    try {
      await handleLanguageChange(item.value);
      setLabel(item.label as PickerItems);
      setSelectedItem(item.id);
      setModalVisible(false);
    } catch (error) {
      console.error(`Error in handlePopupActions:`, error);
    }
  };

  useLayoutEffect(() => {
    for (const item of languagePickerData) {
      if (item.value === language) {
        setLabel(item.label as PickerItems);
        setSelectedItem(item.id);
        break;
      }
    }
  }, [language]);

  return (
    <TouchableOpacity
      onPress={() => setModalVisible(true)}
      style={styles.container}>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.separator} />
      <LanguageIcon
        width={IconSizes.EXTRA_SMALL}
        height={IconSizes.EXTRA_SMALL}
      />
      <CustomModal
        title={translate('home.select_language')}
        visible={modalVisible}
        onPress={toggleModalVisibility}
        closeIcon={true}
        child={
          <CustomRadioGroup
            items={languagePickerData}
            selectedItem={selectedItem}
            onPress={handlePopupActions}
            withTitle={true}
          />
        }
      />
    </TouchableOpacity>
  );
};
