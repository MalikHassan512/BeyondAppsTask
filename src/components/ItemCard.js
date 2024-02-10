import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image'
import FontSize from '../constants/FontSize';
import Strings from '../constants/Strings';


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

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 3,
    borderRadius: 8,
  },
  image: {
    width: wp(30),
    height: hp(10),
    borderRadius: wp(4),
  },
  detailsContainer: {
    width: wp(50),
    marginLeft: 10,
  },
  itemName: {
    fontSize: FontSize.large,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  itemDetail: {
    fontSize: FontSize.small,
    color: Colors.detailText,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ItemCard;
