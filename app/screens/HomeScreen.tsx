import React from 'react';
import colors from '../styles/colors';
import {ScrollView, StyleSheet, View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {
  Header,
  HeadTitle,
  ProductCard,
  ScreenContainer,
  SearchBar,
} from '../components/common';
import ProductCard2 from '../components/common/ProductCard2';

const HomeScreen = () => {
  return (
    <ScreenContainer
      backgroundColor={colors.background}
      barStyle="dark-content">
      <Header />
      <SearchBar />
      <HeadTitle title="Popular Product" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.productContainer}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </View>
      </ScrollView>
      <HeadTitle title="Recently added" />
      <View style={styles.product2Container}>
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(4),
  },
  product2Container: {
    paddingHorizontal: responsiveWidth(5),
  },
});
