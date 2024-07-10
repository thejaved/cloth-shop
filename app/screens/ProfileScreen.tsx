import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Header, ScreenContainer} from '../components/common';
import colors from '../styles/colors';
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import fonts from '../assets/fonts';

interface ProfileScreenProps {
  navigation: any;
  setSelectedTab: (tab: string) => void;
}

interface MenuItemProps {
  icon: any;
  title: string;
  onPress?: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({
  navigation,
  setSelectedTab,
}) => {
  const MenuItem = ({icon, title, onPress}: MenuItemProps) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      {icon}
      <Text style={styles.menuText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <ScreenContainer
      backgroundColor={colors.background}
      barStyle="dark-content">
      <Header
        title="Account"
        onLeftPress={() => navigation.goBack()}
        rightIconName="user"
      />

      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Purchase History</Text>
          <MenuItem
            icon={
              <AntDesign
                name="shoppingcart"
                size={responsiveFontSize(2.5)}
                color={colors.primary}
              />
            }
            title="My Orders"
          />
          <MenuItem
            icon={
              <AntDesign
                name="inbox"
                size={responsiveFontSize(2.5)}
                color={colors.primary}
              />
            }
            title="Returned Products"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Manage Account</Text>
          <MenuItem
            icon={
              <AntDesign
                name="user"
                size={responsiveFontSize(2.5)}
                color={colors.primary}
              />
            }
            title="Personal Info"
            onPress={() => navigation.navigate('UserInfoScreen')}
          />
          <MenuItem
            icon={
              <AntDesign
                name="bells"
                size={responsiveFontSize(2.5)}
                color={colors.primary}
              />
            }
            title="Notifications"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacy</Text>
          <MenuItem
            icon={
              <AntDesign
                name="lock"
                size={responsiveFontSize(2.5)}
                color={colors.primary}
              />
            }
            title="Privacy Policy"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Customer Service</Text>
          <MenuItem
            icon={
              <AntDesign
                name="questioncircleo"
                size={responsiveFontSize(2.5)}
                color={colors.primary}
              />
            }
            title="Help"
          />
          <MenuItem
            icon={
              <FontAwesome
                name="comment-o"
                size={responsiveFontSize(2.5)}
                color={colors.primary}
              />
            }
            title="Feedback"
          />
          <MenuItem
            icon={
              <AntDesign
                name="exclamationcircleo"
                size={responsiveFontSize(2.5)}
                color={colors.primary}
              />
            }
            title="Terms and Conditions"
          />
        </View>

        <MenuItem
          icon={
            <AntDesign
              name="logout"
              size={responsiveFontSize(2.5)}
              color={colors.primary}
            />
          }
          title="Sign Out"
        />
      </View>
    </ScreenContainer>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(5),
    marginVertical: responsiveHeight(2),
  },
  section: {
    marginBottom: responsiveHeight(2),
  },
  sectionTitle: {
    color: colors.black,
    fontFamily: fonts.bold,
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(1),
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: responsiveWidth(3),
    marginTop: responsiveWidth(2),
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(2),
    paddingVertical: responsiveHeight(1.5),
  },
  menuText: {
    color: colors.black,
    fontFamily: fonts.regular,
    marginLeft: responsiveWidth(3),
    fontSize: responsiveFontSize(2),
  },
});
