import {StyleSheet, Text} from 'react-native';
import type {TextStyle} from 'react-native';
import type {JSX} from 'react';
import React from 'react';
import textCompVariant from '@utils/text';
//import {headerStyle} from '../styles';
import {type TextComponentVariants} from '@shared/types';

/***
 * Body component for content body
 *
 * @param {props} - variant can be only one the following- BodyLarge, bodyMedium, bodySmall, bodyThin
 * @returns {React JSX.Element}
 *
 */

interface BodyProps {
  variant?: TextComponentVariants;
  textStyle?: TextStyle;
}

export default function Body({
  variant = textCompVariant.BodyLarge,
  textStyle = {},
}: BodyProps): JSX.Element {
  //const style = headerStyle();
  return <Text style={StyleSheet.compose(variant, textStyle)}>Header</Text>;
}
