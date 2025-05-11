import {TextComponentVariants} from '../shared/types';
import Fonts from './fonts';

const textCompVariant: TextComponentVariants = {
  headerLarge: {
    fontSize: 36,
    ...Fonts.bold,
  },
  headerMedium: {
    fontSize: 16,
    ...Fonts.bold,
  },
  headerSmall: {
    fontSize: 20,
    ...Fonts.bold,
  },
  headerThin: {
    fontSize: 14,
    ...Fonts.bold,
  },

  subheaderLarge: {
    fontSize: 16,
    ...Fonts.semiBold,
  },
  subheaderMedium: {
    fontSize: 14,
    ...Fonts.semiBold,
  },
  subheaderSmall: {
    fontSize: 12,
    ...Fonts.semiBold,
  },
  subheaderThin: {
    fontSize: 10,
    ...Fonts.semiBold,
  },

  bodyLarge: {
    fontSize: 16,
    ...Fonts.medium,
  },
  bodyMedium: {
    fontSize: 14,
    ...Fonts.medium,
  },
  bodySmall: {
    fontSize: 12,
    ...Fonts.medium,
  },
  bodyThin: {
    fontSize: 10,
    ...Fonts.medium,
  },
  captionLarge: {
    fontSize: 16,
    ...Fonts.medium,
  },
  captionMedium: {
    fontSize: 14,
    ...Fonts.regular,
  },
  captionSmall: {
    fontSize: 12,
    ...Fonts.regular,
  },
  captionThin: {
    fontSize: 10,
    ...Fonts.regular,
  },
};

export default textCompVariant;
