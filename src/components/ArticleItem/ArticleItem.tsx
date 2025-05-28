import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './articleItemStyles';
import {Articles} from '_models/Articles/Articles';
import {WidthDimentions} from '_utils/dimensions';
import CustomDivider from '_components/CustomDivider/CustomDivider';
import {images} from '_utils/images';
import {translate} from '_i18n';

interface ArticleItemProps {
  item: Articles;
  onPostPress: () => void;
}

const ArticleItem: React.FC<ArticleItemProps> = ({onPostPress, item}) => {
  const [imageFailed, setImageFailed] = useState(false);

  const imageSource =
    item.image && !imageFailed ? {uri: item.image} : images.DEFAULT_PLACEHOLDER;

  return (
    <TouchableOpacity onPress={onPostPress} style={styles.mainContainer}>
      <Image
        source={imageSource}
        style={styles.image}
        resizeMode="cover"
        onError={() => setImageFailed(true)}
      />
      <CustomDivider width={WidthDimentions.WIDTH_DIVIDER_2} />
      <View style={styles.infos}>
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
        <Text numberOfLines={2} style={styles.description}>
          {item.description}
        </Text>
        <Text numberOfLines={1} style={styles.content}>
          {item.content}
        </Text>
        <Text style={styles.seeMore}>{translate('article.see_more')}</Text>
      </View>
      <CustomDivider width={WidthDimentions.WIDTH_DIVIDER_2} />
    </TouchableOpacity>
  );
};

export default ArticleItem;
