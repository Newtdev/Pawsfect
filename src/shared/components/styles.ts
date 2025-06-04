import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@shared/utils/helpers';
import {StyleSheet} from 'react-native';

export const headerStyle = () =>
  StyleSheet.create({
    textStyle: {},
  });

export const buttons = StyleSheet.create({
  button: {
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 16,
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(32),
  },
  iconButtonWithBorder: {
    height: verticalScale(35),
    width: horizontalScale(35),
    borderRadius: moderateScale(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  chip: {},
});
