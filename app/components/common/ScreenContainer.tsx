import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StatusBarProps,
  StyleSheet,
  View,
  StatusBarStyle,
  ViewStyle,
  StyleProp,
  ScrollView,
} from 'react-native';
import colors from '../../styles/colors';

interface ScreenContainerProps extends StatusBarProps {
  children?: any;
  backgroundColor?: string;
  barStyle?: null | StatusBarStyle | undefined;
  containerStyle?: StyleProp<ViewStyle> | undefined;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  barStyle,
  backgroundColor,
  containerStyle,
  ...props
}) => {
  return (
    <>
      <StatusBar
        barStyle={barStyle ? barStyle : 'light-content'}
        backgroundColor={backgroundColor ? backgroundColor : colors.primary}
        {...props}
      />
      <SafeAreaView style={[styles.container, containerStyle]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.mainContainer}>{children}</View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
