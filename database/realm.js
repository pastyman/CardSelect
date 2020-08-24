import Realm from 'realm';
import clone from 'lodash.clone';

// Define your models and their properties
const CardSchema = {
  name: 'Card',
  properties: {
    pic: 'string',
    text: 'string',
  }
};

export const addCard = (pic, text) => {
  return new Promise((resolve, reject) => {
    Realm.open({ schema: [CardSchema] })
      .then(realm => {
        //add item
        realm.write(() => {
          const item = realm.create('Card', {
            pic: pic,
            text: text
          });
        });

        //close db
        realm.close();

        resolve('item added');
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const allCards = () => {
  return new Promise((resolve, reject) => {
    Realm.open({ schema: [CardSchema] })
      .then(realm => {
        //get all cards
        var returnedCards = [];
        let cards = realm.objects('Card'); //clone(realm.objects('Card'));
        for (let card of cards) {
          returnedCards.push({
            pic: card.pic,
            text: card.text
          })
        }
        //close db
        realm.close();

        resolve(returnedCards, realm);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const cardList = (skip, length) => {
  return new Promise((resolve, reject) => {
    Realm.open({ schema: [CardSchema] })
      .then(realm => {
        //get all cards
        var returnedCards = [];
        let cards = realm.objects('Card');
        var count = 0;
        for (let card of cards) {
          if (count >= skip && count < (skip + length)) {
            returnedCards.push({
              pic: card.pic,
              text: card.text
            });
          }

          count = count + 1;
        }
        //close db
        realm.close();

        resolve(returnedCards, realm);
      })
      .catch((error) => {
        reject(error);
      });
  });
};