import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';

import {useGetTopHeadlinesQuery} from '_rtkQuery/api/topHeadNewsApi';
import {translate} from '_i18n';

const HomeScreen: React.FC = () => {
  const {data, error, isLoading} = useGetTopHeadlinesQuery();

  if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error fetching news: {error.message}</Text>;

  return (
    <View style={{padding: 20}}>
      <Text style={{fontSize: 18, marginVertical: 20}}>
        {translate('home.title')}
      </Text>

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={{marginBottom: 10}}>
            <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
      {/* 
      <CustomFlatList data={data} />
        
      */}
    </View>
  );
};

export default HomeScreen;
