import Fonts from './fonts';

const textCompVariant = {
  headerLarge: {
    fontSize: 36,
    ...Fonts.bold,
    lineHeight: '100%',
  },
  headerMedium: {
    fontSize: 16,
    ...Fonts.bold,
    lineHeight: '100%',
  },
  headerSmall: {
    fontSize: 20,
    ...Fonts.bold,
    lineHeight: '100%',
  },
  headerThin: {
    fontSize: 14,
    ...Fonts.bold,
    lineHeight: '100%',
  },

  subheaderLarge: {
    fontSize: 16,
    ...Fonts.semiBold,
    lineHeight: '100%',
  },
  subheaderMedium: {
    fontSize: 14,
    ...Fonts.semiBold,
    lineHeight: '100%',
  },
  subheaderSmall: {
    fontSize: 12,
    ...Fonts.semiBold,
    lineHeight: '100%',
  },
  subheaderThin: {
    fontSize: 10,
    ...Fonts.semiBold,
    lineHeight: '100%',
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
  descriptionLarge: {
    fontSize: 16,
    ...Fonts.medium,
  },
  descriptionMedium: {
    fontSize: 14,
    ...Fonts.regular,
  },
  descriptionSmall: {
    fontSize: 12,
    ...Fonts.regular,
  },
  descriptionThin: {
    fontSize: 10,
    ...Fonts.regular,
  },
};

export default textCompVariant;
