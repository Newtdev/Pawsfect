import {
  height,
  isObjectEmpty,
  guidelineBaseWidth,
  horizontalScale,
  width,
  verticalScale,
  guidelineBaseHeight,
  moderateScale,
} from '../src/shared/utils/helpers';

// Mock Dimensions
jest.mock('react-native', () => ({
  Dimensions: {
    get: jest.fn(() => ({width: 375, height: 812})),
  },
}));

describe('isObjectEmpty', () => {
  it('returns true for null', () => {
    expect(isObjectEmpty(null)).toBe(true);
  });

  it('returns true for undefined', () => {
    expect(isObjectEmpty(undefined)).toBe(true);
  });

  it('returns true for empty object', () => {
    expect(isObjectEmpty({})).toBe(true);
  });

  it('returns false for object with properties', () => {
    expect(isObjectEmpty({a: 1})).toBe(false);
  });

  it('returns false for object with nested properties', () => {
    expect(isObjectEmpty({a: {b: 2}})).toBe(false);
  });

  it('returns true for object created with Object.create(null) and no properties', () => {
    expect(isObjectEmpty(Object.create(null))).toBe(true);
  });

  it('returns false for object created with Object.create(null) and properties', () => {
    const obj = Object.create(null);
    obj.a = 1;
    expect(isObjectEmpty(obj)).toBe(false);
  });
});

describe('horizontalScale', () => {
  it('scales size proportionally to screen width', () => {
    // For default guidelineBaseWidth, horizontalScale(size) should return size if width == guidelineBaseWidth
    const originalWidth = width;
    const originalGuideline = guidelineBaseWidth;
    const size = 100;
    // If width equals guidelineBaseWidth, horizontalScale should return the same size
    expect(horizontalScale(size)).toBeCloseTo(
      (originalWidth / originalGuideline) * size,
    );
  });

  it('returns 0 when size is 0', () => {
    expect(horizontalScale(0)).toBe(0);
  });

  it('returns negative value for negative size', () => {
    const negativeSize = -50;
    expect(horizontalScale(negativeSize)).toBeCloseTo(
      (width / guidelineBaseWidth) * negativeSize,
    );
  });

  describe('verticalScale', () => {
    it('scales size proportionally to screen height', () => {
      // For default guidelineBaseHeight, verticalScale(size) should return size if height == guidelineBaseHeight
      const size = 100;
      expect(verticalScale(size)).toBeCloseTo(
        (height / guidelineBaseHeight) * size,
      );
    });

    it('returns 0 when size is 0', () => {
      expect(verticalScale(0)).toBe(0);
    });

    it('returns negative value for negative size', () => {
      const negativeSize = -50;
      expect(verticalScale(negativeSize)).toBeCloseTo(
        (height / guidelineBaseHeight) * negativeSize,
      );
    });
  });

  describe('moderateScale', () => {
    it('returns size when factor is 0', () => {
      const size = 100;
      expect(moderateScale(size, 0)).toBe(size);
    });

    it('returns horizontalScale(size) when factor is 1', () => {
      const size = 100;
      expect(moderateScale(size, 1)).toBeCloseTo(horizontalScale(size));
    });

    it('returns value between size and horizontalScale(size) for factor 0.5', () => {
      const size = 100;
      const expected = size + (horizontalScale(size) - size) * 0.5;
      expect(moderateScale(size)).toBeCloseTo(expected);
    });

    it('returns 0 when size is 0', () => {
      expect(moderateScale(0)).toBe(0);
    });

    it('handles negative size', () => {
      const negativeSize = -50;
      const expected =
        negativeSize + (horizontalScale(negativeSize) - negativeSize) * 0.5;
      expect(moderateScale(negativeSize)).toBeCloseTo(expected);
    });
  });
});
