import React from 'react';
import StarRating from './StarRating';
import colors from '../../styles/colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import fonts from '../../assets/fonts';

interface ProductCardProps {
  uri: string;
  title: string;
  price: string;
  onPress?: () => void;
  style?: any;
}

const ProductCard: React.FC<ProductCardProps> = ({
  uri,
  title,
  price,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.cardContainer, style]}>
      <TouchableOpacity style={styles.likeIcons}>
        <AntDesign
          name="hearto"
          size={responsiveFontSize(2)}
          color={colors.white}
        />
      </TouchableOpacity>
      <Image source={{uri}} style={styles.image} resizeMode="contain" />
      <Text style={styles.titleStyle} numberOfLines={1}>
        {title}
      </Text>
      <StarRating rating={4} />
      <Text style={styles.priceStyle}>{price}</Text>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: responsiveWidth(42),
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(2),
    marginHorizontal: responsiveWidth(1),
    padding: responsiveWidth(3),
  },
  image: {
    width: '100%',
    height: responsiveHeight(15),
  },
  likeIcons: {
    zIndex: 1,
    position: 'absolute',
    top: responsiveWidth(3),
    left: responsiveWidth(3),
    padding: responsiveWidth(1.5),
    backgroundColor: colors.primary,
    borderRadius: responsiveWidth(5),
  },
  titleStyle: {
    color: colors.black,
    fontFamily: fonts.semiBold,
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveWidth(2),
  },
  priceStyle: {
    color: colors.black,
    fontFamily: fonts.regular,
    marginTop: responsiveWidth(2),
  },
});
