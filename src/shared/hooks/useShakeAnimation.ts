import {useCallback} from 'react';
import {SHAKE_OFFSET} from '@shared/utils/constant';
import {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export default function useShakeAnimation() {
  const offset = useSharedValue(0);
  const shakeStyle = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));

  const handleShake = useCallback(() => {
    offset.value = withRepeat(
      withTiming(SHAKE_OFFSET, {duration: 100}),
      5,
      true,
    );
  }, [offset]);

  return {shakeStyle, handleShake};
}
