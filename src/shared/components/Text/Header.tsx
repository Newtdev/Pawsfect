import {type StyleProp, StyleSheet, Text, type TextStyle} from 'react-native';
import React, {type JSX} from 'react';
import {headerStyle} from '../styles';
import textCompVariant from '@shared/utils/text';

/***
 * Header component for content header
 *
 * @param {props} - variant can be only one the following- headerLarge, headerMedium, headerSmall, headerThin
 * @returns {React JSX.Element}
 *
 */

interface HeaderProps {
  variant?: StyleProp<TextStyle>;
  textStyle?: TextStyle;
}

export default function Header({
  variant = textCompVariant.headerLarge,
  textStyle = {},
}: HeaderProps): JSX.Element {
  const style = headerStyle('dark');
  return <Text style={StyleSheet.compose(variant, textStyle)}>Header</Text>;
}
