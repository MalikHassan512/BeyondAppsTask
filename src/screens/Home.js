import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { fetchItems } from '../redux/Slices/ItemSlice'
import { useDispatch, useSelector } from 'react-redux'
import ItemCard from '../components/ItemCard'
import FontSize from '../constants/FontSize'
import Strings from '../constants/Strings'
import Loader from '../components/Loader'

const Home = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const data = useSelector((state) => state.item)
    const loading = useSelector((state) => state.item.loading)

    useEffect(() => {
            dispatch(fetchItems());
    }, []);

    const onPressItem = (item) => {
        navigation.navigate("ItemDetails", {
            data: item,
        });
      }

      const renderItem = ({ item }) => (
        <ItemCard
          itemName={item.breeds[0]?.name}
          itemImage={item.url}
          itemDetail={item.breeds[0]?.life_span}
          onPress={()=>onPressItem(item)}
        />
      );

    const renderHeader = () => {
        return (
          <View >
            <Text style={styles.headerText}>{Strings.Cats}</Text>
          </View>
        );
      }
    
      return loading ? <Loader/> : (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={data.items}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            ListHeaderComponent={renderHeader}
            showsVerticalScrollIndicator={false}
          />
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    headerText: {
        fontSize: FontSize.veryLarge,
        fontWeight: 'bold',
        padding: 10,
    },
    })


export default Home