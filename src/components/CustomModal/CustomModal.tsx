import React, {JSX} from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from 'react-native';

import styles from './customModalStyles';
import {images} from '_utils/images';

interface CustomModalProps {
  visible: boolean;
  /* Prop to control the visibility of the modal */
  onPress: () => void;
  /* Callback function to handle the visibility change */
  child: JSX.Element;
  /* The content to be displayed inside the modal */
  title?: string;
  /* Optional title for the modal */
  closeIcon?: boolean;
}

/**
 * CustomModal Component
 * This component displays a modal with a customizable title and content.
 * The modal can be dismissed by clicking the close button or the overlay.
 */
const CustomModal = ({
  visible,
  onPress,
  child,
  title,
  closeIcon,
}: CustomModalProps): JSX.Element => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onPress}>
      <View style={styles.overlay}>
        <View style={styles.borderModalContent}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              {!!title && <Text style={styles.title}>{title}</Text>}
              <TouchableOpacity hitSlop={styles.hitSlop} onPress={onPress}>
                {closeIcon && (
                  <Image
                    resizeMode="contain"
                    source={images.CLOSE}
                    style={styles.button}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.separator} />
            <ScrollView
              style={styles.scrollContainer}
              contentContainerStyle={styles.scrollContentContainer}
              showsVerticalScrollIndicator={false}>
              {child}
            </ScrollView>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
