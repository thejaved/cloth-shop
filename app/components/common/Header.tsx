import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import IconButton from './IconButton';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const Header = () => {
  return (
    <View style={styles.container}>
      <IconButton Icon={Feather} name="menu" />
      <Text>Home</Text>
      <IconButton Icon={Feather} name="search" />
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
});
