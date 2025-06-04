import {type StyleProp, StyleSheet, Text, type TextStyle} from 'react-native';
import React, {type JSX} from 'react';
//import {headerStyle} from '../styles';
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
}

export default function SubHeader({
  variant = textCompVariant.subheaderLarge,
  textStyle = {},
}: Readonly<SubHeaderProps>): JSX.Element {
  // const style = headerStyle('dark');
  return <Text style={StyleSheet.compose(variant, textStyle)}>Header</Text>;
}
