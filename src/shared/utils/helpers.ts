import type {ReactNode} from 'react';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export const guidelineBaseWidth = 375;
export const guidelineBaseHeight = 812;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
/**
 * Scales a given size value moderately based on the device's horizontal scale factor.
 *
 * @param size - The original size value to be scaled.
 * @param factor - The moderation factor (default is 0.5). A value between 0 and 1 determines how much to scale the size.
 * @returns The moderately scaled size value.
 */
const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const isTablet = width >= 768;

const isObjectEmpty = (obj: null | undefined | object) =>
  obj === null || obj === undefined || Object.keys(obj).length === 0;

interface IFProps {
  condition: ReactNode;
  children: React.ReactNode;
}
const If = ({condition, children}: IFProps) => {
  if (condition) {
    return children;
  }
};

export {
  horizontalScale,
  verticalScale,
  moderateScale,
  width,
  height,
  isTablet,
  isObjectEmpty,
  If,
};

/**
 *
 *   // const shakeAnimation = new Animated.Value(0);
   // const onShake = () => {
   //   shakeAnimation.setValue(0);
   //   Animated.timing(shakeAnimation, {
   //     duration: 375,
   //     toValue: 3,
   //     easing: Easing.bounce,
   //     useNativeDriver: true,
   //   }).start();
   // };
   // const translateX = shakeAnimation.interpolate({
   //   inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
   //   outputRange: [0, -15, 0, -15, 0, -15, 0],
   // });
 */
