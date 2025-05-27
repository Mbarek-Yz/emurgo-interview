import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {useLazyFetchPostsQuery} from '_rtkQuery/api/topHeadNewsApi';
import {translate} from '_i18n';
import useCustomPaginationQuery from '_rtkQuery/hooks/useCustomPaginationQuery';
import CustomFlatList from '_components/CustomFlatList/CustomFlatlist';
import styles from './homeScreenStyles';
import CustomSearchBar from '_components/CustomSearchBar/CustomSearchBar';
import {useSearch} from '_rtkQuery/hooks/useSearch';

const HomeScreen: React.FC = () => {
  const useLazyFetchPostsQueryResult = useLazyFetchPostsQuery();
  const {debouncedSearchText, searchText, setSearchText} = useSearch();

  const {
    data,
    getDataOnMount,
    getMoreData,
    getRefreshedData,
    failedError,
    isLoading,
    isLoadingMore,
    isRefreshing,
    loadingMoreError,
  } = useCustomPaginationQuery(useLazyFetchPostsQueryResult, {
    q: searchText,
  });

  useEffect(() => {
    getRefreshedData();
  }, [debouncedSearchText]);

  const renderItem = ({item}: {item: any}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{item?.title || 'No Title'}</Text>
        {item?.description && (
          <Text style={styles.description}>{item.description}</Text>
        )}
        <Text style={styles.source}>
          {item?.source?.name || 'Unknown source'}
        </Text>
      </View>
    );
  };

  if (isLoading && !data.length) {
    return <ActivityIndicator size="large" style={styles.center} />;
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>{translate('home.title')}</Text> */}
      <CustomSearchBar
        placeholder="Search..."
        text={searchText}
        onChangeText={setSearchText}
      />
      <View style={styles.listContainer}>
        <CustomFlatList
          data={data}
          renderItem={renderItem}
          getDataOnMount={getDataOnMount}
          getRefreshedData={getRefreshedData}
          getMoreData={getMoreData}
          isLoading={isLoading}
          isRefreshing={isRefreshing}
          isLoadingMore={isLoadingMore}
          failedError={failedError}
          loadingMoreError={loadingMoreError}
          // keyExtractor={(item, index) => item?.url || index.toString()}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
