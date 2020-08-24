import React, { useState } from 'react';
import { allCards, cardList } from '../../../database/realm';

export const AllCards = ({ onLoaded, updateFlag }) => {
  if (updateFlag) {
    setTimeout(() => {
      allCards().then(
        (data) => {
          //view
          onLoaded(data);
        },
        (err) => {
          //TODO - handle error
        },
      );
    }, 100);
  }

  return <></>;
};

export const CardList = ({ onLoaded, updateFlag, skip, length }) => {
  if (updateFlag) {
    setTimeout(() => {
      cardList(skip, length).then(
        (data) => {
          //view
          onLoaded(data);
        },
        (err) => {
          //TODO - handle error
        },
      );
    }, 100);
  }

  return <></>;
};
