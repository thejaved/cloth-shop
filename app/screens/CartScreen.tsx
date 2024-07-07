import React from 'react';
import {RootState} from '../store/store';
import {useSelector, useDispatch} from 'react-redux';
import {Swipeable} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Header, ScreenContainer} from '../components/common';
import {CartItem, removeFromCart} from '../store/reducers/cartReducer';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import fonts from '../assets/fonts';
import colors from '../styles/colors';

const CartScreen: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const ItemRender = ({item}: {item: CartItem}) => {
    const totalPrice = item.price * item.quantity;

    const renderRightActions = () => (
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => dispatch(removeFromCart(item.productId))}>
        <Icon name="delete" size={30} color={colors.white} />
      </TouchableOpacity>
    );

    return (
      <Swipeable renderRightActions={renderRightActions}>
        <View style={styles.itemContainer}>
          <Image source={{uri: item.imageUrl}} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>Price: ₹{item.price}</Text>
            <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
            <Text style={styles.totalPrice}>
              Total Price: ₹{totalPrice.toFixed(2)}
            </Text>
          </View>
        </View>
      </Swipeable>
    );
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  return (
    <ScreenContainer
      backgroundColor={colors.white}
      barStyle="dark-content"
      containerStyle={{
        backgroundColor: colors.white,
      }}>
      <Header
        // onLeftPress={() => navigation.goBack()}
        leftIconName="arrow-left"
        rightIconName="external-link"
        title="Cart Screen"
      />
      <View style={styles.mainItemContainer}>
        {cartItems.map(item => (
          <ItemRender key={item.productId} item={item} />
        ))}
        {cartItems.length !== 0 && (
          <View style={styles.bottomContainer}>
            <View style={styles.totalPriceContainer}>
              <Text style={styles.totalText}>Total:</Text>
              <Text style={styles.totalAmount}>
                ₹{calculateTotalPrice().toFixed(2)}
              </Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Proceed To Checkout</Text>
            </TouchableOpacity>
          </View>
        )}
        {cartItems.length === 0 && (
          <View style={styles.noDataContainer}>
            <Text style={styles.noDataText}>Your cart is empty</Text>
            <Text style={styles.noDataSubText}>
              Looks like you haven't added anything to your cart yet.
            </Text>
            <TouchableOpacity style={styles.shopButton}>
              <Text style={styles.shopButtonText}>Start Shopping</Text>
            </TouchableOpacity>
          </View>
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
    flex: 1,
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
  totalPrice: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  bottomContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
    alignItems: 'center',
  },
  totalPriceContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: responsiveWidth(2),
  },
  totalText: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: colors.black,
  },
  totalAmount: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: colors.primary,
    marginVertical: 10,
    marginLeft: responsiveWidth(3),
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
  deleteButton: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: '100%',
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
  shopButton: {
    backgroundColor: colors.primary,
    borderRadius: responsiveWidth(2),
    paddingVertical: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(10),
  },
  shopButtonText: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: fonts.semiBold,
    fontSize: responsiveFontSize(2),
  },
});

export default CartScreen;
