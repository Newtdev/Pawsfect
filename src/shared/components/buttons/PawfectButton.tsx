import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import type {PawfectButtonProps} from '@shared/types';

export default function PawfectButton({
  children,
  containerStyle = {},
  buttonStyle = {},
  disabledStyle = {},
  buttonRef,
  disabled = false,
  accessibilityLabel,
  accessibilityHint,
  ...props
}: Readonly<PawfectButtonProps>) {
  return (
    <View style={containerStyle}>
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.7}
        ref={buttonRef}
        style={[buttonStyle, disabled && disabledStyle]}
        accessibilityRole="button"
        accessible={true}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        {...props}>
        {children}
      </TouchableOpacity>
    </View>
  );
}
