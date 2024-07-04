import React, {useEffect} from 'react';
import colors from '../styles/colors';
import commonStyles from '../styles/common';
import {StackNavigationProp} from '@react-navigation/stack';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

type SplashScreenProps = {
  navigation: StackNavigationProp<any, any>;
};

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={commonStyles.container}>
      <View style={styles.innerLoad}>
        <ActivityIndicator size="large" color={colors.white} />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  innerLoad: {
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    backgroundColor: colors.primary,
    borderRadius: responsiveWidth(2),
  },
});
