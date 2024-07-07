import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {CartItem} from '../store/reducers/cartReducer';
import {Header, ScreenContainer} from '../components/common';
import colors from '../styles/colors';
import fonts from '../assets/fonts';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const CartScreen: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const ItemRender = ({item}: {item: CartItem}) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>Price: ${item.price}</Text>
        <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
      </View>
    </View>
  );

  return (
    <ScreenContainer
      backgroundColor={colors.white}
      barStyle="dark-content"
      containerStyle={{
        backgroundColor: colors.white,
      }}>
      <Header title="Cart Screen" />
      <View style={styles.mainItemContainer}>
        {cartItems.map(item => {
          return <ItemRender key={item.productId} item={item} />;
        })}
        {cartItems.length !== 0 && (
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Proceed To Checkout</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  mainItemContainer: {
    paddingHorizontal: responsiveWidth(5),
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    marginBottom: 5,
    color: colors.black,
    fontFamily: fonts.bold,
  },
  price: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  quantity: {
    fontSize: 16,
    color: '#666',
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: responsiveWidth(2),
    marginVertical: responsiveWidth(2),
    paddingVertical: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(10),
  },
  buttonText: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: fonts.semiBold,
    fontSize: responsiveFontSize(2),
  },
});

export default CartScreen;
