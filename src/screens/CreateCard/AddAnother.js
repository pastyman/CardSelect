import React, { useState, useEffect } from 'react';
import { Appbar, TextInput } from 'react-native-paper';
import { Button, FlatList, SafeAreaView, Text, StyleSheet, View } from 'react-native';
import FlexImage from 'react-native-flex-image';
import { GoldenPadder, SmallSpacer } from '../../components/ui/spacing.js';
import { Center, Container } from '../../components/ui/layout.js';
import { Heading } from '../../components/ui/text.js';

import { allCards } from '../../../database/realm';

export default AddAnother = ({ route, navigation }) => {
  const [cards, setCards] = useState([]);


  //load all cards
  useEffect(() => {
    allCards().then((cards) => {
      setCards(cards);

      console.warn(cards);
    }, (err) => {
      console.warn(err);
    });
  }, []);

  const AnotherYes = () => {
    navigation.navigate('CreateCard');
  }

  const AnotherNo = () => {
    navigation.navigate('Home');
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
      <Container>
        <Center>
          <GoldenPadder>
            <SmallSpacer />
            <Heading>Add antoher card?</Heading>
            <SmallSpacer />
            <Button
              title="Yes"
              onPress={AnotherYes}
            />
            <SmallSpacer />
            <Button
              title="No"
              onPress={AnotherNo}
            />
            <SmallSpacer />
            <SafeAreaView>
              <FlatList
              style={{
                flex: 1,
                //marginTop: 30,
              }}
                data={cards}
                renderItem={({ item }) => (<>
                  <FlexImage
                    source={{ uri: item.pic }}
                  />
                  <Text>{item.text}</Text>
                </>)}
              //keyExtractor={card => card.pic}
              />
            </SafeAreaView>
            {/* {cards.map((card) => {
            return (<>
              <FlexImage
                source={{ uri: card.pic }}
              />
              <SmallSpacer />
            </>)
          })} */}
          </GoldenPadder>
        </Center>
      </Container>
    </>
  );
}
