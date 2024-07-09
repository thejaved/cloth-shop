import React, {useEffect} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import {fetchProducts} from '../store/actions/productActions';

interface HomeScreenProps {
  navigation: any;
  setSelectedTab: (tab: string) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({
  navigation,
  setSelectedTab,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ScreenContainer
      backgroundColor={colors.background}
      barStyle="dark-content">
      <Header title="Home" />
      <SearchBar />
      <HeadTitle
        title="Popular Product"
        onPress={() => navigation.navigate('AllProducts')}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.productContainer}>
          {products.map(item => {
            const {_id, ratingCount, imageUrl, name, price, description} = item;
            return (
              <ProductCard
                key={_id}
                title={name}
                price={price}
                uri={imageUrl}
                productId={_id}
                description={description}
                ratingCount={ratingCount}
                onPress={() =>
                  navigation.navigate('ProductDetailsScreen', {item})
                }
              />
            );
          })}
        </View>
      </ScrollView>
      <HeadTitle title="Recently added" />
      <View style={styles.product2Container}>
        {products.map(item => {
          const {_id, ratingCount, imageUrl, name, price, description} = item;
          return (
            <ProductCard2
              key={_id}
              title={name}
              price={price}
              uri={imageUrl}
              productId={_id}
              description={description}
              ratingCount={ratingCount}
              onPress={() =>
                navigation.navigate('ProductDetailsScreen', {item})
              }
            />
          );
        })}
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
