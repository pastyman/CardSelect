import * as React from 'react';
import { Appbar, TextInput } from 'react-native-paper';
import { Button } from 'react-native';
import { GoldenPadder, SmallSpacer } from '../../components/ui/spacing.js'
import { Center } from '../../components/ui/layout.js'
import { Heading } from '../../components/ui/text.js'
import ImagePicker from 'react-native-image-crop-picker';

export default CreateCard = ({ navigation }) => {

  const imageOptions = {
    width: 400,
    height: 400,
    cropping: true,
    compressImageQuality: 0.8,
    mediaType: 'photo',
    writeTempFile: false,
  };

  const takePicture = () => {
    ImagePicker.openCamera(imageOptions).then((imageInfo) => {
      //success
      console.warn('success', imageInfo);

      //navigate to step 2
      navigation.navigate('CreateCard2', imageInfo);
    }, (err) => {
      //fail

      console.warn('ERROR', err);
    });

  }

  const choosePicture = () => {
    ImagePicker.openPicker(imageOptions).then((imageInfo) => {
      //success
      console.warn('success choose pic', imageInfo);

      //navigate to step 2
      navigation.navigate('CreateCard2', imageInfo);
    }, (err) => {
      //fail

      console.warn('ERROR', err);
    });
  }

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
          <Heading>Step 1: Select Picture</Heading>
          <SmallSpacer />
          <Button
            title="Take a photo"
            onPress={takePicture}
          />
          <SmallSpacer />
          <Button
            title="Choose a photo"
            onPress={choosePicture}
          />
        </GoldenPadder>
      </Center>
    </>
  );
}