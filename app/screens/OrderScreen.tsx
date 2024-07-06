import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Header, ScreenContainer, shadow} from '../components/common';
import colors from '../styles/colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Feather';
import fonts from '../assets/fonts';

type RootStackParamList = {
  OrderScreen: {
    item: {
      _id: string;
      name: string;
      price: number;
      imageUrl: string;
      ratingCount: number;
      description: string;
    };
  };
};

type OrderScreenRouteProp = RouteProp<RootStackParamList, 'OrderScreen'>;

interface OrderScreenProps {
  navigation: any;
}

const OrderScreen: React.FC<OrderScreenProps> = ({navigation}) => {
  const route = useRoute<OrderScreenRouteProp>();
  const [activeTab, setActiveTab] = useState<'Description' | 'Review'>(
    'Description',
  );
  const [quantity, setQuantity] = useState<number>(1); // Add quantity state
  const {ratingCount, imageUrl, name, price, description} = route.params.item;

  const handleAddToCart = () => {
    Alert.alert('Success', `Added ${quantity} ${name}(s) to cart`);
  };

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const renderContent = () => {
    if (activeTab === 'Description') {
      return <Text style={styles.contentText}>{description}</Text>;
    } else if (activeTab === 'Review') {
      return <Text style={styles.contentText}>Reviews will be shown here</Text>;
    }
  };

  return (
    <>
      <ScreenContainer
        backgroundColor={colors.white}
        containerStyle={{backgroundColor: colors.white}}>
        <Header
          onLeftPress={() => navigation.goBack()}
          leftIconName="arrow-left"
          rightIconName="shopping-bag"
          title="Product Details"
        />
        <Image
          style={styles.image}
          source={{uri: imageUrl}}
          resizeMode="cover"
        />
        <View style={styles.shortDetails}>
          <View>
            <Text style={styles.nameText}>{name}</Text>
            <View style={styles.ratingStyle}>
              <Icon
                name={'star'}
                size={responsiveFontSize(2)}
                color={'#FFD700'}
              />
              <Text style={styles.ratingText}>{ratingCount}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.priceTextHead}>Price</Text>
            <Text style={styles.priceText}>{price}</Text>
          </View>
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              activeTab === 'Description' && styles.activeButtonContainer,
            ]}
            onPress={() => setActiveTab('Description')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'Description'
                  ? styles.activeTabText
                  : styles.inactiveTabText,
              ]}>
              Description
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              activeTab === 'Review' && styles.activeButtonContainer,
            ]}
            onPress={() => setActiveTab('Review')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'Review'
                  ? styles.activeTabText
                  : styles.inactiveTabText,
              ]}>
              Review
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>{renderContent()}</View>
      </ScreenContainer>
      <View style={styles.bottomStyle}>
        <View style={styles.countHandler}>
          <TouchableOpacity
            style={styles.clickCount}
            onPress={decreaseQuantity}>
            <Icon
              name="minus"
              size={responsiveFontSize(2)}
              color={colors.primary}
            />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            style={styles.clickCount}
            onPress={increaseQuantity}>
            <Icon
              name="plus"
              size={responsiveFontSize(2)}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addBagButton} onPress={handleAddToCart}>
          <Icon1
            name="shopping-bag"
            color={colors.white}
            size={responsiveFontSize(2.5)}
          />
          <Text style={styles.bagText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: responsiveHeight(40),
  },
  ratingStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shortDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
  },
  nameText: {
    fontFamily: fonts.semiBold,
    fontSize: responsiveFontSize(2.5),
    color: colors.black,
    marginBottom: responsiveWidth(2),
  },
  ratingText: {
    color: colors.black,
    fontFamily: fonts.regular,
    marginLeft: responsiveWidth(1),
  },
  priceTextHead: {
    fontFamily: fonts.regular,
    fontSize: responsiveFontSize(1.8),
    color: colors.grey,
    marginBottom: responsiveWidth(2),
  },
  priceText: {
    fontFamily: fonts.semiBold,
    fontSize: responsiveFontSize(2),
    color: colors.black,
  },
  tabContainer: {
    flexDirection: 'row',
    padding: responsiveWidth(2),
  },
  buttonContainer: {
    marginLeft: responsiveWidth(3),
    backgroundColor: '#00000010',
    borderRadius: responsiveWidth(1.5),
    paddingVertical: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(6),
  },
  activeButtonContainer: {
    backgroundColor: colors.primary,
  },
  tabText: {
    fontFamily: fonts.semiBold,
  },
  activeTabText: {
    color: colors.white,
  },
  inactiveTabText: {
    color: colors.grey,
  },
  contentContainer: {
    padding: responsiveWidth(5),
  },
  contentText: {
    fontFamily: fonts.regular,
    fontSize: responsiveFontSize(2),
    color: colors.black,
    textAlign: 'justify',
  },
  bottomStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveHeight(13),
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
    ...shadow,
  },
  countHandler: {
    width: responsiveWidth(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: responsiveWidth(2),
    borderRadius: responsiveWidth(2),
  },
  clickCount: {
    padding: responsiveWidth(2),
    backgroundColor: colors.alphaPrimary,
    borderRadius: responsiveWidth(5),
  },
  quantityText: {
    color: colors.black,
    fontFamily: fonts.regular,
  },
  addBagButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(10),
    backgroundColor: colors.primary,
    borderRadius: responsiveWidth(2),
  },
  bagText: {
    color: colors.white,
    marginLeft: responsiveWidth(2),
    fontFamily: fonts.medium,
  },
});
