import {
  StyleSheet,
  Text,
  type TextStyle,
  type AccessibilityProps,
} from 'react-native';
import React, {type JSX, type ReactElement} from 'react';
import textCompVariant from '@shared/utils/text';

/***
 * Caption component for content captions
 *
 * @param {props} - variant can be only one the following- captionLarge, captionMedium, captionSmall, captionThin
 * @returns {React JSX.Element}
 *
 */

interface CaptionProps extends AccessibilityProps {
  variant?: 'captionLarge' | 'captionMedium' | 'captionSmall' | 'captionThin';
  textStyle?: TextStyle;
  children: ReactElement | string;
  accessibilityLabel?: string;
  accessible?: boolean;
}

export default function Caption({
  variant = 'captionLarge',
  textStyle = {},
  children,
  accessibilityLabel,
  accessible = true,
  ...rest
}: Readonly<CaptionProps>): JSX.Element {
  return (
    <Text
      style={StyleSheet.compose(textCompVariant[variant], textStyle)}
      accessibilityLabel={accessibilityLabel}
      accessible={accessible}
      accessibilityRole="text"
      {...rest}>
      {children}
    </Text>
  );
}
