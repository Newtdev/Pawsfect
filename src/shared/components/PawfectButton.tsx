import {View, TouchableOpacity, type TouchableOpacityProps} from 'react-native';
import React, {type ReactElement, type Ref} from 'react';
import type {ViewPropsType} from '../types';

interface PawfectButtonProps extends TouchableOpacityProps {
  children: ReactElement;
  containerStyle?: ViewPropsType;
  buttonStyle?: ViewPropsType;
  disabledStyle?: ViewPropsType;
  buttonRef?: Ref<View>;
}

export default function PawfectButton({
  children,
  containerStyle = {},
  buttonStyle = {},
  disabledStyle = {},
  buttonRef,
  ...props
}: PawfectButtonProps) {
  return (
    <View style={containerStyle}>
      <TouchableOpacity
        activeOpacity={0.7}
        ref={buttonRef}
        style={[buttonStyle, disabledStyle]}
        {...props}>
        {children}
      </TouchableOpacity>
    </View>
  );
}
