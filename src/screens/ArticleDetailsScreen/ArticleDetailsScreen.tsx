import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {HomeStackParamList} from '_navigation/HomeStackNavigation';
import {RouteProp} from '@react-navigation/native';
import {ARTICLE_DETAILS_SCREEN} from '_utils/screenNames';
import styles from './articleDetailsScreenStyles';
import {images} from '_utils/images';
type PostDetailsScreenRouteProp = RouteProp<
  HomeStackParamList,
  typeof ARTICLE_DETAILS_SCREEN
>;

interface ArticleDetailsScreenProps {
  route: PostDetailsScreenRouteProp;
}

const ArticleDetailsScreen: React.FC<ArticleDetailsScreenProps> = ({route}) => {
  const [imageFailed, setImageFailed] = useState(false);

  const imageSource =
    route.params.image && !imageFailed
      ? {uri: route.params.image}
      : images.DEFAULT_PLACEHOLDER;

  return (
    <View>
      <Image
        source={imageSource}
        style={styles.image}
        resizeMode="cover"
        onError={() => setImageFailed(true)}
      />
    </View>
  );
};

export default ArticleDetailsScreen;
