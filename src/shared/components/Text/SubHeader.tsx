import {type StyleProp, StyleSheet, Text, type TextStyle} from 'react-native';
import React, {type JSX} from 'react';
import textCompVariant from '@shared/utils/text';

/***
 * Sub header component for content sub header
 *
 * @param {props} - variant can be only one the following- subheaderLarge, subheaderMedium, subheaderSmall, subheaderThin
 * @returns {React JSX.Element}
 *
 */

interface SubHeaderProps {
  variant?: StyleProp<TextStyle>;
  textStyle?: TextStyle;
  children?: React.ReactNode | string;
}

export default function SubHeader({
  variant = textCompVariant.subheaderLarge,
  textStyle = {},
  children,
}: Readonly<SubHeaderProps>): JSX.Element {
  return <Text style={StyleSheet.compose(variant, textStyle)}>{children}</Text>;
}
