import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export const guidelineBaseWidth = 375;
export const guidelineBaseHeight = 812;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const isTablet = width >= 768;

const isObjectEmpty = (obj: null | undefined | object) =>
  obj === null || obj === undefined || Object.keys(obj).length === 0;

export {
  horizontalScale,
  verticalScale,
  moderateScale,
  width,
  height,
  isTablet,
  isObjectEmpty,
};
