import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import React, {JSX} from 'react';
import textCompVariant from '@utils/text';
import {headerStyle} from '../styles';

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
}

export default function SubHeader({
  variant = textCompVariant.subheaderLarge,
  textStyle = {},
}: SubHeaderProps): JSX.Element {
  const style = headerStyle('dark');
  return <Text style={StyleSheet.compose(variant, textStyle)}>Header</Text>;
}
