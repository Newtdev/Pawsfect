import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@shared/utils/helpers';
import {Theme} from '@shared/utils/themes';
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
    height: verticalScale(30),
    width: horizontalScale(30),
    borderRadius: moderateScale(100),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  chip: {},
});

export const textInputStyles = (isFocused: boolean, error: boolean = false) => {
  const isFocusedStyle = isFocused && Theme.primary.default;
  const isErrorStyle = error && Theme.error.default;
  return StyleSheet.create({
    container: {
      backgroundColor: Theme.primary.light,
      paddingHorizontal: horizontalScale(13),
      borderRadius: moderateScale(30),
      borderWidth: 1,
      borderColor: isFocusedStyle || isErrorStyle || Theme.primary.transparent,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    textField: {
      paddingHorizontal: horizontalScale(13),
      width: '90%',
    },

    rightIconContainer: {
      width: horizontalScale(48),
      height: verticalScale(48),
      alignItems: 'center',
      justifyContent: 'center',
    },
    leftIconContainer: {
      width: horizontalScale(30),
      height: verticalScale(48),
      alignItems: 'center',
      justifyContent: 'center',
    },
    labelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    labelHeading: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: verticalScale(4),
    },
  });
};

export const screenHeaderStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 41,
  },
  title: {
    textTransform: 'none',
    color: Theme.black,
  },
  iconButton: {
    borderColor: Theme.black,
  },
});
