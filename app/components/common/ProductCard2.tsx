import React from 'react';
import colors from '../../styles/colors';
import {StyleSheet, Text, View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const ProductCard2 = () => {
  return (
    <View style={styles.cardContainer}>
      <Text>ProductCard</Text>
    </View>
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
  },
});
