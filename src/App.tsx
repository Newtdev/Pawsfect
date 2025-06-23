import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {Theme} from '@shared/utils/themes';

import PinInput from '@shared/components/inputs/PinInput';
import ParentScrollView from '@shared/components/container/ParentScrollView';

import RightHeaderContainer from '@shared/components/container/RightHeaderContainer';
import ScreenTitle from '@shared/components/screen-header/ScreenTitle';
import ScreenHeaderDescription from '@shared/components/screen-header/ScreenHeaderDescription';

function App(): React.JSX.Element {
  const [pin, setPin] = useState('');
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <ParentScrollView
          screenTitle={
            <ScreenHeaderDescription
              title={'Welcome to Pawfect'}
              description="pet management app"
              rightContainer={
                <RightHeaderContainer
                  leftIcon="notification"
                  rightIcon="chevronLeft"
                />
              }
            />
          }>
          <View>
            <PinInput value={pin} onChangeText={val => setPin(val)} />
          </View>
        </ParentScrollView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    borderWidth: 1,
    borderColor: Theme.black,
  },
  container: {
    flexDirection: 'row',
  },
});

export default App;
