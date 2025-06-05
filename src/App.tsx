import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import SVGWrapper from './shared/components/SVGWrapper';
import Header from './shared/components/Text/Header';
import SubHeader from './shared/components/Text/SubHeader';
import Caption from './shared/components/Text/Caption';
import textCompVariant from '@shared/utils/text';
import IconButton from '@shared/components/buttons/IconButton';
import {Theme} from '@shared/utils/themes';
import Chip from '@shared/components/buttons/Chip';
import Tab from '@shared/components/buttons/Tab';
import ActionButton, {
  ButtonTypeEnum,
} from '@shared/components/buttons/ActionButton';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <View>
        <Text>Great Shopping Experience</Text>
        <Header />
        <SubHeader />
        <Caption variant={textCompVariant.captionThin} />
        <IconButton icon={'notification'} buttonStyle={styles.iconButton} />
        <SVGWrapper name="logo" height={36} width={36} />
        <View style={styles.container}>
          <Chip content="Green Pea" excluded={true} />
          <Chip content="Green Pea" />

          <Tab content="Accessories" isActive={true} onPress={() => {}} />
        </View>
        <ActionButton
          name="Pay with points"
          onPress={() => {}}
          leftComponent={<SVGWrapper name="notification" />}
          variant={ButtonTypeEnum.Default}
        />
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
