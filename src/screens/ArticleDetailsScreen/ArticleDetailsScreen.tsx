import {View, Text, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient'; // Import gradient
import {HomeStackParamList} from '_navigation/HomeStackNavigation';
import {RouteProp} from '@react-navigation/native';
import {ARTICLE_DETAILS_SCREEN} from '_utils/screenNames';
import styles from './articleDetailsScreenStyles';
import {images} from '_utils/images';
import CustomDivider from '_components/CustomDivider/CustomDivider';
import {HeightDimentions} from '_utils/dimensions';
import {colors} from '_utils/colors';
import {translate} from '_i18n';
import CustomHeader from '_components/CustomHeader/CustomHeader';
import {pop} from '_navigation/RootNavigations';
import {BackIcon} from '_assets/drawables';

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

  const onBackPress = () => {
    pop();
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        label={translate('details.article_details_screen')}
        onLeftIconPress={onBackPress}
        LeftDotsIconComponent={BackIcon}
      />
      <View style={styles.imageWrapper}>
        <Image
          source={imageSource}
          style={styles.image}
          resizeMode="cover"
          onError={() => setImageFailed(true)}
        />
        <LinearGradient
          colors={['transparent', colors.BLACK]}
          style={styles.gradientOverlay}
          pointerEvents="none">
          <View style={styles.overlayContent}>
            <Text style={styles.authorText}>
              {translate('article.author')} {route.params.author}
            </Text>
            <Text style={styles.titleText}>{route.params.title}</Text>
            <View style={styles.sourceContainer}>
              <Text style={styles.overlayText}>
                {translate('article.source')} {route.params.source.name}
              </Text>
              <Text style={styles.overlayText}>{route.params.publishedAt}</Text>
            </View>
          </View>
          <CustomDivider height={HeightDimentions.HEIGHT_DIVIDER_5} />
        </LinearGradient>
      </View>

      <View style={styles.infos}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Text style={styles.title}>{translate('global.description')}</Text>
          <CustomDivider height={HeightDimentions.HEIGHT_DIVIDER_1} />
          <Text style={styles.paragraph}>{route.params.description}</Text>
          <CustomDivider height={HeightDimentions.HEIGHT_DIVIDER_3} />
          <Text style={styles.title}>{translate('global.content')}</Text>
          <CustomDivider height={HeightDimentions.HEIGHT_DIVIDER_1} />
          <Text style={styles.paragraph}>{route.params.content}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default ArticleDetailsScreen;
