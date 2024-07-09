import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {Header, ProductCard, ScreenContainer} from '../components/common';
import colors from '../styles/colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import fonts from '../assets/fonts';

interface WishlistScreenProps {
  navigation: any;
  setSelectedTab: (tab: string) => void;
}

const WishlistScreen: React.FC<WishlistScreenProps> = ({
  navigation,
  setSelectedTab,
}) => {
  const wishlist = useSelector((state: RootState) => state.wishlist.items);

  return (
    <ScreenContainer
      backgroundColor={colors.background}
      barStyle="dark-content">
      <Header
        title="Wishlist"
        onLeftPress={() => setSelectedTab('home')}
        leftIconName="arrow-left"
      />
      <View style={styles.productContainer}>
        {wishlist.length > 0 ? (
          wishlist.map(item => {
            const {_id, name, price, imageUrl, description, ratingCount} = item;
            return (
              <ProductCard
                title={name}
                price={price}
                uri={imageUrl}
                key={_id}
                productId={_id}
                description={description}
                ratingCount={ratingCount}
                style={styles.productCard}
                onPress={() =>
                  navigation.navigate('ProductDetailsScreen', {item})
                }
              />
            );
          })
        ) : (
          <View style={styles.noDataContainer}>
            <Text style={styles.noDataText}>Your wishlist is empty</Text>
            <Text style={styles.noDataSubText}>
              Looks like you haven't added anything to your wishlist yet.
            </Text>
            <TouchableOpacity
              onPress={() => setSelectedTab('home')}
              style={styles.wishlistButton}>
              <Text style={styles.wishlistButtonText}>Start Adding</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScreenContainer>
  );
};

export default WishlistScreen;

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
  emptyText: {
    textAlign: 'center',
    color: colors.black,
    marginTop: responsiveWidth(10),
    fontSize: 18,
  },
  noDataContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(60),
  },
  noDataText: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: fonts.bold,
    color: colors.black,
    marginBottom: 10,
  },
  noDataSubText: {
    fontSize: responsiveFontSize(2),
    fontFamily: fonts.regular,
    color: colors.gray,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: responsiveWidth(10),
  },
  wishlistButton: {
    backgroundColor: colors.primary,
    borderRadius: responsiveWidth(2),
    paddingVertical: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(10),
  },
  wishlistButtonText: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: fonts.semiBold,
    fontSize: responsiveFontSize(2),
  },
});
