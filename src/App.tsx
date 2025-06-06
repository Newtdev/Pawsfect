import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import SVGWrapper from './shared/components/SVGWrapper';
import IconButton from '@shared/components/buttons/IconButton';
import {Theme} from '@shared/utils/themes';
import Chip from '@shared/components/buttons/Chip';
import Tab from '@shared/components/buttons/Tab';
import ActionButton, {
  ButtonTypeEnum,
} from '@shared/components/buttons/ActionButton';
import InputField from '@shared/components/inputs/PawfectInput';
import FormInput from '@shared/components/inputs/FormInput';
import SearchBar from '@shared/components/inputs/SearchInput';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <View>
        <SVGWrapper name="logo" height={36} width={36} />
        <View style={styles.container}>
          <Chip content="Green Pea" excluded={true} />
          <Chip content="Green Pea" />

          <Tab content="Accessories" isActive={true} onPress={() => {}} />
        </View>
        <IconButton icon={'notification'} buttonStyle={styles.iconButton} />
        <ActionButton
          name="Pay with points"
          onPress={() => {}}
          leftComponent={<SVGWrapper name="notification" />}
          variant={ButtonTypeEnum.Default}
        />

        <FormInput
          placeholder="Enter your email"
          label="Email"
          inputTextStyle={{color: Theme.black}}
          error="Something went wrong"
          // containerStyle={{marginVertical: 10}}
        />

        <SearchBar onChangeText={function (text: string): void {}} value={''} />
      </View>
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
