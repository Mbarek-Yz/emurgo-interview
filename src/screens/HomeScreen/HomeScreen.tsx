import React, {JSX, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useLazyFetchPostsQuery} from '_rtkQuery/api/topHeadNewsApi';
import {translate} from '_i18n';
import useCustomPaginationQuery from '_rtkQuery/hooks/useCustomPaginationQuery';
import CustomFlatList from '_components/CustomFlatList/CustomFlatlist';
import styles from './homeScreenStyles';
import CustomSearchBar from '_components/CustomSearchBar/CustomSearchBar';
import {useSearch} from '_rtkQuery/hooks/useSearch';
import ArticleItem from '_components/ArticleItem/ArticleItem';
import CustomDivider from '_components/CustomDivider/CustomDivider';
import {HeightDimentions} from '_utils/dimensions';
import {ARTICLE_DETAILS_SCREEN} from '_utils/screenNames';
import {navigate} from '_navigation/RootNavigations';

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

  const renderItem = ({item}: {item: any}): JSX.Element => {
    const onPostPress = () => {
      navigate(ARTICLE_DETAILS_SCREEN, item);
    };

    return <ArticleItem item={item} onPostPress={onPostPress} />;
  };

  const renderItemSeparator = (): JSX.Element => (
    <CustomDivider height={HeightDimentions.HEIGHT_FLATLIST_SEPARATOR} />
  );

  if (isLoading && !data.length) {
    return <ActivityIndicator size="large" style={styles.center} />;
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>{translate('home.title')}</Text> */}
      <CustomSearchBar
        placeholder={translate('home.search_placeholder')}
        text={searchText}
        onChangeText={setSearchText}
      />
      <View style={styles.listContainer}>
        <CustomDivider height={HeightDimentions.HEIGHT_DIVIDER_4} />
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
          ItemSeparatorComponent={renderItemSeparator}
          // keyExtractor={(item, index) => item?.url || index.toString()}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
