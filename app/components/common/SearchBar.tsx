import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import fonts from '../../assets/fonts';
import colors from '../../styles/colors';
import {filterImg} from '../../assets/images';
import Feather from 'react-native-vector-icons/Feather';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.searchContainer}>
        <Feather name="search" size={20} color={colors.black} />
        <Text style={styles.searchText}>Search...</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterClick}>
        <Image
          source={filterImg}
          style={{width: 20, height: 20}}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveHeight(10),
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
  },
  searchContainer: {
    width: responsiveWidth(75),
    height: responsiveWidth(13),
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(4),
    borderRadius: responsiveWidth(2),
  },
  filterClick: {
    width: responsiveWidth(13),
    height: responsiveWidth(13),
    backgroundColor: colors.primary,
    borderRadius: responsiveWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchText: {
    fontFamily: fonts.regular,
    marginLeft: responsiveWidth(2),
    color: colors.black,
  },
});
