import React from 'react';
import {StyleSheet} from 'react-native';
import {Header, ScreenContainer} from '../components/common';

interface WishlistScreenProps {
  navigation: any;
  setSelectedTab: (tab: string) => void;
}

const WishlistScreen: React.FC<WishlistScreenProps> = ({
  navigation,
  setSelectedTab,
}) => {
  return (
    <ScreenContainer>
      <Header title="Wishlist" />
    </ScreenContainer>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({});
