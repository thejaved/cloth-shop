import React from 'react';
import {StyleSheet} from 'react-native';
import Header from '../components/common/Header';
import ScreenContainer from '../components/common/ScreenContainer';
import colors from '../styles/colors';

const HomeScreen = () => {
  return (
    <ScreenContainer backgroundColor={colors.white}>
      <Header />
    </ScreenContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
