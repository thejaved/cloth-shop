import React from 'react';
import colors from '../../styles/colors';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import fonts from '../../assets/fonts';

interface ProductCardProps {
  uri: string;
  title: string;
  price: number;
  productId: string;
  onPress?: () => void;
  style?: any;
  description: string;
  ratingCount: number;
}

const ProductCard2: React.FC<ProductCardProps> = ({
  uri,
  style,
  price,
  title,
  onPress,
  productId,
  description,
  ratingCount,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <Image source={{uri}} style={styles.imgStyle} />
      <View style={styles.detailsContainer}>
        <Text style={styles.headText}>{title}</Text>
        <Text style={styles.price}>₹{price}</Text>
        <Text numberOfLines={2} style={styles.description}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard2;

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: responsiveWidth(30),
    backgroundColor: colors.white,
    marginBottom: responsiveWidth(3),
    borderRadius: responsiveWidth(2),
    flexDirection: 'row',
    alignItems: 'center',
    padding: responsiveWidth(2),
  },
  imgStyle: {
    width: responsiveWidth(25),
    height: responsiveWidth(25),
  },
  detailsContainer: {
    flex: 1,
    marginLeft: responsiveWidth(2),
  },
  headText: {
    color: colors.black,
    fontFamily: fonts.bold,
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveWidth(1),
  },
  price: {
    color: colors.black,
    fontFamily: fonts.semiBold,
    fontSize: responsiveFontSize(1.5),
    marginBottom: responsiveWidth(1),
  },
  description: {
    color: colors.gray,
    fontFamily: fonts.regular,
    fontSize: responsiveFontSize(1.5),
  },
});
