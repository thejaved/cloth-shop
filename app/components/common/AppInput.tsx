import React from 'react';
import {TextInput, TextInputProps, StyleSheet, View} from 'react-native';
import colors from '../../styles/colors';
import {responsiveHeight} from 'react-native-responsive-dimensions';

interface InputProps extends TextInputProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  style,
  leftIcon,
  rightIcon,
  ...otherProps
}) => {
  return (
    <View style={styles.container}>
      {leftIcon && <View style={styles.iconContainer}>{leftIcon}</View>}
      <TextInput
        {...otherProps}
        style={[styles.input, style]}
        placeholderTextColor={colors.text}
      />
      {rightIcon && <View style={styles.iconContainer}>{rightIcon}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 5,
  },
  iconContainer: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    height: responsiveHeight(7),
    color: colors.text,
    padding: 10,
  },
});

export default Input;
