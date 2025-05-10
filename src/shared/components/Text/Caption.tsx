import {StyleSheet, Text, TextStyle} from 'react-native';
import React, {JSX} from 'react';
import textCompVariant from '@utils/text';
import {headerStyle} from '../styles';
import {TextComponentVariants} from '@shared/types';

/***
 * Caption component for content captions
 *
 * @param {props} - variant can be only one the following- captionLarge, captionMedium, captionSmall, captionThin
 * @returns {React JSX.Element}
 *
 */

interface CaptionProps {
  variant?: TextComponentVariants;
  textStyle?: TextStyle;
}

export default function Caption({
  variant = textCompVariant.captionLarge,
  textStyle = {},
}: CaptionProps): JSX.Element {
  const style = headerStyle('dark');
  return <Text style={StyleSheet.compose(variant, textStyle)}>Caption</Text>;
}
