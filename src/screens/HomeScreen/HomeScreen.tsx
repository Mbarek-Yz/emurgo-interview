import React, {JSX, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
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
import {CallPickerLanguage} from '_components/CallPickerLanguage/CallPickerLanguage';
import {SelectLocaleLanguage} from '_store/features/localeLanguage/LocaleLanguageSlice';
import {useAppDispatch, useAppSelector} from '_store/api/store.hooks';
import {LocaleLanguage} from '_utils/enums';
import {userLogout} from '_services/authenticationService';
import {showPopup} from '_utils/helpers/helpers';
import {LogoutIcon} from '_assets/drawables';
import {colors} from '_utils/colors';
import HomeHeader from '_components/HomeHeader/HomeHeader';
import {selectUser} from '_store/features/user/userSlice';

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const useLazyFetchPostsQueryResult = useLazyFetchPostsQuery();
  const {debouncedSearchText, searchText, setSearchText} = useSearch();
  const language: LocaleLanguage | null =
    useAppSelector(SelectLocaleLanguage).language;

  const user = useAppSelector(selectUser);
  const username = user?.profile?.name;

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
    language,
  });

  useEffect(() => {
    getRefreshedData();
  }, [debouncedSearchText, language]);

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

  const onLogoutPress = async () => {
    await userLogout(dispatch);
  };

  const handleIconPress = () => {
    showPopup({
      title: translate('global.popup_logout'),
      confirmCallback: onLogoutPress,
      isGlobal: true,
      confirmText: translate('global.logout'),
      cancelText: translate('global.cancel'),
    });
  };

  return (
    <View style={styles.container}>
      <HomeHeader
        username={username}
        onIconPress={handleIconPress}
        icon={<LogoutIcon stroke={colors.PRIMARY} />}
      />
      <CustomDivider height={HeightDimentions.HEIGHT_DIVIDER_2} />
      <View style={styles.languagePickerContainer}>
        <CallPickerLanguage />
      </View>
      <CustomDivider height={HeightDimentions.HEIGHT_DIVIDER_2} />
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
          keyExtractor={(item, index) => item?.url || index.toString()}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
