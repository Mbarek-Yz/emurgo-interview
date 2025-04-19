import { colors } from '_utils/colors';
import React from 'react';
import { RefreshControl } from 'react-native';

interface RefreshControlFlatListProps {
  isRefreshing: boolean;
  getRefreshedData: () => void;
}

const RefreshControlFlatList: React.FC<RefreshControlFlatListProps> = ({
  getRefreshedData,
  isRefreshing,
  ...props
}) => {
  return (
    <RefreshControl
      tintColor={colors.PRIMARY}
      refreshing={isRefreshing}
      colors={[colors.PRIMARY]}
      onRefresh={getRefreshedData}
      {...props}
    />
  );
};

export default RefreshControlFlatList;
