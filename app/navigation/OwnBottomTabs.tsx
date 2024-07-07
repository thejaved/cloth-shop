import React, {useState} from 'react';
import colors from '../styles/colors';
import {shadow} from '../components/common';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  CartScreen,
  HomeScreen,
  ProfileScreen,
  WishlistScreen,
} from '../screens';
import fonts from '../assets/fonts';

interface OwnBottomTabsProps {
  navigation: any;
}

const OwnBottomTabs: React.FC<OwnBottomTabsProps> = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState('home');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {selectedTab === 'home' && <HomeScreen navigation={navigation} />}
        {selectedTab === 'wishlist' && <WishlistScreen />}
        {selectedTab === 'scan' && <Text>Scan Screen</Text>}
        {selectedTab === 'cart' && <CartScreen />}
        {selectedTab === 'profile' && <ProfileScreen />}
      </View>

      {/* Bottom Tab Bar */}
      <View style={styles.bottomTabBar}>
        <TouchableOpacity
          onPress={() => setSelectedTab('home')}
          style={styles.tabItem}>
          <Feather
            name="home"
            size={24}
            color={selectedTab === 'home' ? colors.primary : colors.iconDefault}
          />
          <Text
            style={selectedTab === 'home' ? styles.selectedText : styles.text}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab('wishlist')}
          style={styles.tabItem}>
          <AntDesign
            name="hearto"
            size={24}
            color={
              selectedTab === 'wishlist' ? colors.primary : colors.iconDefault
            }
          />
          <Text
            style={
              selectedTab === 'wishlist' ? styles.selectedText : styles.text
            }>
            Wishlist
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab('scan')}
          style={styles.scanButton}>
          <AntDesign name="scan1" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab('cart')}
          style={styles.tabItem}>
          <Feather
            name="shopping-bag"
            size={24}
            color={selectedTab === 'cart' ? colors.primary : colors.iconDefault}
          />
          <Text
            style={selectedTab === 'cart' ? styles.selectedText : styles.text}>
            Cart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab('profile')}
          style={styles.tabItem}>
          <AntDesign
            name="user"
            size={24}
            color={
              selectedTab === 'profile' ? colors.primary : colors.iconDefault
            }
          />
          <Text
            style={
              selectedTab === 'profile' ? styles.selectedText : styles.text
            }>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OwnBottomTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
  bottomTabBar: {
    flexDirection: 'row',
    height: responsiveHeight(10),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingVertical: 5,
    ...shadow,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    borderRadius: responsiveWidth(4),
    marginTop: -responsiveWidth(15),
    ...shadow,
  },
  text: {
    fontSize: 12,
    color: colors.iconDefault,
    marginTop: 4,
    fontFamily: fonts.regular,
  },
  selectedText: {
    fontSize: 12,
    color: colors.primary,
    marginTop: 4,
    fontFamily: fonts.regular,
  },
});
