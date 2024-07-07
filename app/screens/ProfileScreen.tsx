import React from 'react';
import {StyleSheet} from 'react-native';
import {Header, ScreenContainer} from '../components/common';

interface ProfileScreenProps {
  navigation: any;
  setSelectedTab: (tab: string) => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({
  navigation,
  setSelectedTab,
}) => {
  return (
    <ScreenContainer>
      <Header title="Profile" />
    </ScreenContainer>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
