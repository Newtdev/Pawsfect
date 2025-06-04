import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import type {PawfectButtonProps} from '@shared/types';

export default function PawfectButton({
  children,
  containerStyle = {},
  buttonStyle = {},
  disabledStyle = {},
  buttonRef,
  ...props
}: Readonly<PawfectButtonProps>) {
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
