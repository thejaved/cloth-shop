import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import {Header, ProductCard, ScreenContainer} from '../components/common';
import {fetchProducts} from '../store/actions/productActions';
import colors from '../styles/colors';
import {responsiveWidth} from 'react-native-responsive-dimensions';

interface AllProductsProps {
  navigation?: any;
}

const AllProducts: React.FC<AllProductsProps> = ({navigation}) => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ScreenContainer
      backgroundColor={colors.background}
      barStyle="dark-content">
      <Header
        onLeftPress={() => navigation.goBack()}
        leftIconName="arrow-left"
        rightIconName="shopping-bag"
        title="All Products"
      />
      <ScrollView>
        <View style={styles.productContainer}>
          {products.map(item => {
            const {_id, name, price, imageUrl, description, ratingCount} = item;
            return (
              <ProductCard
                key={_id}
                title={name}
                price={price}
                uri={imageUrl}
                productId={_id}
                description={description}
                ratingCount={ratingCount}
                style={styles.productCard}
                onPress={() => navigation.navigate('OrderScreen', {item})}
              />
            );
          })}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default AllProducts;

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
  },
  productCard: {
    width: '47%',
    marginVertical: responsiveWidth(2),
  },
});
