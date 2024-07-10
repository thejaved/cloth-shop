import React from 'react';
import {Header, ScreenContainer} from '../components/common';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../styles/colors';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import fonts from '../assets/fonts';

interface ProfileScreenProps {
  navigation?: any;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  return (
    <ScreenContainer
      backgroundColor={colors.background}
      barStyle={'dark-content'}>
      <View style={styles.container}>
        <Header
          title="Profile Details"
          leftIconName="arrow-left"
          onLeftPress={() => navigation.goBack()}
        />
        <View style={styles.profileSection}>
          <Ionicons
            name="person-circle-outline"
            size={100}
            color={colors.primary}
          />
          <Text style={styles.profileName}>Roan Atkinson</Text>
        </View>
        <View style={styles.orderSection}>
          <Text style={styles.sectionTitle}>My Orders</Text>
          <View style={styles.orderIcons}>
            <OrderIcon name="wallet" label="Pending Payment" />
            <OrderIcon name="car" label="Delivered" />
            <OrderIcon name="cart" label="Processing" />
            <OrderIcon name="close-circle" label="Cancelled" />
            <OrderIcon name="heart" label="Wishlist" />
            <OrderIcon name="headset" label="Customer Care" />
          </View>
        </View>
        <View style={styles.settingsSection}>
          <SettingOption name="person" label="Edit Profile" />
          <SettingOption name="location" label="Shipping Address" />
          <TouchableOpacity style={styles.logoutButton}>
            <Ionicons name="log-out-outline" size={24} color="gray" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
};

interface OrderIconProps {
  name: string;
  label: string;
}

const OrderIcon: React.FC<OrderIconProps> = ({name, label}) => (
  <TouchableOpacity style={styles.orderIconContainer}>
    <Ionicons name={name} size={30} color={colors.primary + '90'} />
    <Text style={styles.orderIconLabel}>{label}</Text>
  </TouchableOpacity>
);

interface SettingOptionProps {
  name: string;
  label: string;
}

const SettingOption: React.FC<SettingOptionProps> = ({name, label}) => (
  <TouchableOpacity style={styles.settingOption}>
    <Ionicons name={name} size={24} color={colors.primary + '90'} />
    <Text style={styles.settingOptionLabel}>{label}</Text>
    <Ionicons name="chevron-forward" size={24} color="gray" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderSection: {
    padding: 16,
  },
  sectionTitle: {
    fontFamily: fonts.bold,
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveWidth(2),
  },
  orderIcons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  orderIconContainer: {
    width: '30%',
    alignItems: 'center',
    padding: responsiveWidth(2),
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(2),
    marginVertical: responsiveWidth(2),
  },
  orderIconLabel: {
    textAlign: 'center',
    fontFamily: fonts.medium,
    marginTop: responsiveWidth(2),
    fontSize: responsiveFontSize(1.4),
  },
  settingsSection: {
    padding: responsiveWidth(5),
  },
  settingOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveWidth(2),
  },
  settingOptionLabel: {
    flex: 1,
    fontFamily: fonts.medium,
    marginLeft: responsiveFontSize(2),
    fontSize: responsiveFontSize(1.8),
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveWidth(5),
  },
  logoutText: {
    marginLeft: 8,
    fontSize: 16,
    color: 'gray',
  },
});

export default ProfileScreen;
