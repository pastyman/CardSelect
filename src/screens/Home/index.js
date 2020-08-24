import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {Button} from 'react-native';
import {GoldenPadder, SmallSpacer} from '../../components/ui/spacing.js';
import {Container, Center} from '../../components/ui/layout.js';
import {Heading} from '../../components/ui/text.js';

export default Home = ({navigation}) => {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Card Select" />
      </Appbar.Header>

      <Container>
        <Center>
          <GoldenPadder>
            <SmallSpacer />
            <Heading>Welcome to Card Select!</Heading>
            <SmallSpacer />
            <Button
              title="Create card"
              onPress={() => navigation.navigate('CreateCard')}
            />
            <SmallSpacer />
            <Button
              title="Edit deck"
              onPress={() => navigation.navigate('EditDeck')}
            />
            <SmallSpacer />
            <Button
              title="History"
              onPress={() => navigation.navigate('History')}
            />
          </GoldenPadder>
        </Center>
      </Container>
    </>
  );
};
