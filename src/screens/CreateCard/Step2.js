import React, { useState } from 'react';
import { Appbar, TextInput } from 'react-native-paper';
import { Button } from 'react-native';
import FlexImage from 'react-native-flex-image';
import { GoldenPadder, SmallSpacer } from '../../components/ui/spacing.js';
import { Center } from '../../components/ui/layout.js';
import { Heading } from '../../components/ui/text.js';

import { addCard } from '../../../database/realm';

export default CreateCard = ({ route, navigation }) => {
  const [cardText, setCardText] = useState('');

  //get pic location
  const picPath = route.params.path;

  const AddText = () => {
    //save to realm db
    addCard(picPath, cardText).then(() => {
      //navigate to step 2
      navigation.navigate('AddAnother');      
    }, (err) => {
      //TODO - handle error
    });
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => { navigation.goBack() }}
        />
        <Appbar.Content
          title="Create card"
        />
      </Appbar.Header>

      <Center>
        <GoldenPadder>
          <SmallSpacer />
          <Heading>Step 2: Add text</Heading>
          <SmallSpacer />
          <FlexImage
            source={{ uri: picPath }}
          />
          <SmallSpacer />
          <TextInput
            mode='outlined'
            autoFocus={true}
            label='Card text'
            value={cardText}
            onChangeText={setCardText}
          />
          <SmallSpacer />
          <Button
            title="Add text"
            onPress={AddText}
          />
        </GoldenPadder>
      </Center>
    </>
  );
}