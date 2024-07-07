import React from 'react';
import fonts from '../../assets/fonts';
import colors from '../../styles/colors';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface HeadTitleProps {
  title: string;
  onPress?: () => void;
}

const HeadTitle: React.FC<HeadTitleProps> = ({title, onPress}) => {
  return (
    <View style={styles.headTitleContainer}>
      <Text style={styles.headTitleText}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.seeAllText}>See all</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeadTitle;

const styles = StyleSheet.create({
  headTitleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: responsiveWidth(5),
    justifyContent: 'space-between',
  },
  headTitleText: {
    color: colors.black,
    fontFamily: fonts.semiBold,
    fontSize: responsiveFontSize(2.2),
  },
  seeAllText: {
    color: colors.gray,
    fontFamily: fonts.regular,
    fontSize: responsiveFontSize(2),
  },
});
