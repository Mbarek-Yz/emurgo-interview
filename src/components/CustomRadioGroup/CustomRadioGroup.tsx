import React, {JSX} from 'react';
import {View, Text, TouchableOpacity, type TextStyle} from 'react-native';

import styles from './styles';

/*
 * Interface for a single radio item
 * @property {number} id - Unique identifier for the radio item
 * @property {string} label - Label or name of the radio item
 */
export interface RadioItem {
  id: number;
  label: string;
  value?: any;
}

/*
 * Interface for the props to be passed to the CustomRadioGroup component
 * @property {RadioItem[]} items - Array of radio items
 * @property {number} selectedItem - ID of the currently selected radio item
 * @property {function} onPress - Function to handle the press event on a radio item
 * @property {boolean} [withTitle] - Flag to indicate if the title should be displayed
 * @property {string} [title] - Optional title for the radio group
 */
interface CustomRadioGroupProps {
  items: RadioItem[];
  selectedItem?: number | null;
  onPress: (id: RadioItem) => void;
  withTitle?: boolean;
  title?: string;
  titleStyle?: TextStyle;
}

/*
 * CustomRadioGroup Component
 * This component renders a group of custom radio buttons with an optional title.
 */
const CustomRadioGroup = ({
  items,
  selectedItem,
  withTitle,
  title,
  onPress,
  titleStyle,
}: CustomRadioGroupProps): JSX.Element => {
  const renderCustomRadioGroupItems = (): JSX.Element => (
    <>
      {items.map(
        (
          item /* Iterate over the items array to render each radio button */,
        ) => (
          <View key={item.id}>
            {/* Use the item's ID as the key */}
            <TouchableOpacity
              onPress={() => {
                onPress(
                  item,
                ); /* Call the onPress function with the item when pressed */
              }}>
              <View style={styles.main}>
                <View style={styles.container}>
                  <View style={item.id === selectedItem && styles.selected} />
                </View>
                <View style={styles.horizontalSeparator} />
                {!!item.label && <Text style={styles.label}>{item.label}</Text>}
              </View>
              <View style={styles.verticalSeparator} />
            </TouchableOpacity>
          </View>
        ),
      )}
    </>
  );

  return (
    <View>
      {withTitle && (
        <View>
          {!!title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
          <View style={styles.verticalSeparator} />
        </View>
      )}
      {renderCustomRadioGroupItems()}
    </View>
  );
};

export default CustomRadioGroup;
