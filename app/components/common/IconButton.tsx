import React from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';

interface IconButtonProps {
  Icon: React.ElementType;
  name: string;
  size?: number;
  color?: string;
  onPress?: () => void;
  style?: ViewStyle;
}

const IconButton: React.FC<IconButtonProps> = ({
  Icon,
  name,
  size = 24,
  color = 'black',
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f6fd',
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(2),
  },
});
