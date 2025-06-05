import {StyleSheet, Text, type TextStyle} from 'react-native';
import React, {type ReactNode, type JSX} from 'react';
import type {TextPropsType} from '@shared/types';
import textCompVariant from '@shared/utils/text';

/***
 * Caption component for content captions
 *
 * @param {props} - variant can be only one the following- captionLarge, captionMedium, captionSmall, captionThin
 * @returns {React JSX.Element}
 *
 */

interface CaptionProps {
  variant?: TextPropsType;
  textStyle?: TextStyle;
  children: ReactNode | string;
}

export default function Caption({
  variant = textCompVariant.captionLarge,
  textStyle = {},
  children,
}: Readonly<CaptionProps>): JSX.Element {
  return <Text style={StyleSheet.compose(variant, textStyle)}>{children}</Text>;
}
