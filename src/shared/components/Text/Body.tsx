import {StyleSheet, Text, type AccessibilityProps} from 'react-native';
import type {TextStyle} from 'react-native';
import type {JSX} from 'react';
import React from 'react';
import textCompVariant from '@utils/text';

/***
 * Body component for content body
 *
 * @param {props} - variant can be only one the following- BodyLarge, bodyMedium, bodySmall, bodyThin
 * @returns {React JSX.Element}
 *
 */

interface BodyProps extends AccessibilityProps {
  variant?: 'bodyMedium' | 'bodySmall' | 'bodyThin' | 'bodyLarge';
  textStyle?: TextStyle;
  children?: React.ReactNode;
  accessible?: boolean;
  accessibilityLabel?: string;
  accessibilityRole?: AccessibilityProps['accessibilityRole'];
}

export default function Body({
  variant = 'bodyLarge',
  textStyle = {},
  children,
  accessible,
  accessibilityLabel,
  accessibilityRole = 'text',
  ...rest
}: Readonly<BodyProps>): JSX.Element {
  return (
    <Text
      style={StyleSheet.compose(textCompVariant[variant], textStyle)}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      {...rest}>
      {children}
    </Text>
  );
}
