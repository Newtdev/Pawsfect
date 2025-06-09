import {StyleSheet, View} from 'react-native';
import React, {useMemo} from 'react';
import Caption from '../Text/Caption';
import {moderateScale} from '@shared/utils/helpers';
import {Theme} from '@shared/utils/themes';
import PawfectButton from './PawfectButton';
import type {ViewPropsType} from '@shared/types';

interface TabProps {
  content: string;
  isActive?: boolean;
  buttonStyle?: ViewPropsType;
  [x: string]: unknown;
}
export default function Tab({
  content,
  isActive = false,
  buttonStyle,
  ...props
}: Readonly<TabProps>) {
  const activeTabText = useMemo(
    () => (isActive ? styles.activeTabText : styles.caption),
    [isActive],
  );
  const activeTabLine = useMemo(
    () =>
      isActive
        ? {...styles.bottomLine, ...styles.activeTabLine}
        : styles.bottomLine,
    [isActive],
  );
  return (
    <PawfectButton
      buttonStyle={[styles.container, buttonStyle]}
      accessible={true}
      accessibilityRole="tab"
      accessibilityState={{selected: isActive}}
      accessibilityLabel={content}
      {...props}>
      <>
        <Caption variant={'captionMedium'} textStyle={activeTabText}>
          {content}
        </Caption>
        <View style={activeTabLine} />
      </>
    </PawfectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    rowGap: 6,
    justifyContent: 'center',
  },
  caption: {
    color: Theme.grey1,
  },
  bottomLine: {},
  activeTabText: {
    color: Theme.primary.default,
  },
  activeTabLine: {
    borderWidth: moderateScale(1),
    borderColor: Theme.primary.default,
  },
});
