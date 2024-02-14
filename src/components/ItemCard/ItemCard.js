import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image'
import {  Strings } from '../../constants';
import styles from './styles';

const ItemCard = ({ itemName, itemImage, itemDetail, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <FastImage
        style={styles.image}
        source={{
          uri: itemImage,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.itemName}>{itemName}</Text>
        <Text style={styles.itemDetail}>{Strings.LifeSpan} {itemDetail}</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
        <Text>➡️</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};


export default ItemCard;
