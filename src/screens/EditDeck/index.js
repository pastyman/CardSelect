import React, { useState, useEffect } from 'react';
import { Appbar, TextInput } from 'react-native-paper';
import {
  Button,
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { GoldenPadder, SmallSpacer } from '../../components/ui/spacing.js';
import { Center } from '../../components/ui/layout.js';
import { Heading } from '../../components/ui/text.js';

import { CardList } from '../../components/data/fetch';

import { allCards } from '../../../database/realm';

const Item = ({ item }) => (
  <View style={styles.item}>
    <View style={styles.itemInner}>
      <Text style={styles.title}>{item.text}</Text>
    </View>
  </View>
);

export default EditDeck = ({ navigation }) => {
  const [skip, setSkip] = useState(0);  
  const [updateFlag, setUpdateFlag] = useState(true);  
  const [deckData, setDeckData] = useState([]);

  const loadData = () => {
    console.warn('LOAD DATA!');

    setUpdateFlag(true);
  }

  const onLoaded = (data) => {
    setUpdateFlag(false);
    setSkip(skip  + 32);

    console.warn(skip);

    //append data
    setDeckData([...deckData, ...data]);
  };

  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <>
      <CardList
        onLoaded={onLoaded}
        updateFlag={updateFlag}
        skip={skip}
        length={32}
      />
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Edit deck" />
      </Appbar.Header>

      <SafeAreaView style={styles.container}>
        <FlatList
          numColumns={4}
          data={deckData}
          renderItem={renderItem}
          //keyExtractor={(item) => item.id}
          // renderItem={({item}) => <Text>{JSON.stringify(item)}</Text>}
          // refreshControl={
          //   <RefreshControl
          //     colors={["#9Bd35A", "#689F38"]}
          //     refreshing={this.state.refreshing}
          //     onRefresh={this.refresh}
          //   />
          // }

          //Footer to show below listview
          // ListFooterComponent={this.renderFooter}
          // keyExtractor={item => item.id.toString()}
          onEndReached={loadData}
          onEndReachedThreshold={0.3}

        // ListHeaderComponent={this.renderInfo}
        // ListEmptyComponent={this.renderEmpty}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    // marginVertical: 8,
    padding: 10,
    margin: 0,
    width: '25%',
  },
  itemInner: {
    padding: 20,
    backgroundColor: '#f9c2ff',
  },

  title: {
    fontSize: 24,
  },
});
