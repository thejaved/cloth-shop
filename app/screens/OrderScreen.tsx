import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Header, ScreenContainer} from '../components/common';
import colors from '../styles/colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/AntDesign';
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
  const {ratingCount, imageUrl, name, price, description} = route.params.item;

  const renderContent = () => {
    if (activeTab === 'Description') {
      return <Text style={styles.contentText}>{description}</Text>;
    } else if (activeTab === 'Review') {
      return <Text style={styles.contentText}>Reviews will be shown here</Text>;
    }
  };

  return (
    <ScreenContainer
      backgroundColor={colors.white}
      containerStyle={{backgroundColor: colors.white}}>
      <Header
        onLeftPress={() => navigation.goBack()}
        leftIconName="arrow-left"
        rightIconName="shopping-bag"
        title="Product Details"
      />
      <Image style={styles.image} source={{uri: imageUrl}} resizeMode="cover" />
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
  },
});
