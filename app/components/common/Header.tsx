import React from 'react';
import IconButton from './IconButton';
import fonts from '../../assets/fonts';
import colors from '../../styles/colors';
import {StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

interface HeaderProps {
  title: string;
  rightIconName?: string;
  leftIconName?: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  leftIconName = 'menu',
  rightIconName = 'bell',
  onLeftPress,
  onRightPress,
}) => {
  return (
    <View style={styles.container}>
      <IconButton Icon={Feather} name={leftIconName} onPress={onLeftPress} />
      <Text style={styles.headerText}>{title}</Text>
      <IconButton Icon={Feather} name={rightIconName} onPress={onRightPress} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(5),
  },
  headerText: {
    color: colors.black,
    fontFamily: fonts.bold,
    fontSize: responsiveFontSize(2),
  },
});
