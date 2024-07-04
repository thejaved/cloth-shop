import React from 'react';
import {TextInput, TextInputProps, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/common';

interface InputProps extends TextInputProps {
  // Add any additional props you want to support
}

const Input: React.FC<InputProps> = props => {
  const {style, ...otherProps} = props;

  return (
    <TextInput
      {...otherProps}
      style={[styles.input, commonStyles.textInput, style]}
      placeholderTextColor={colors.text}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    // Add any specific styles for the input component
  },
});

export default Input;
