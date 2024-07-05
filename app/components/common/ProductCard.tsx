import React from 'react';
import colors from '../../styles/colors';
import {StyleSheet, Text, View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const ProductCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Text>ProductCard</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: responsiveWidth(42),
    height: responsiveWidth(54),
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(2),
    marginHorizontal: responsiveWidth(1),
  },
});
