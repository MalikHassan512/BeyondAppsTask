import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { fetchItems } from '../../redux/Slices/ItemSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Strings } from '../../constants'
import { ItemCard, Loader } from '../../components'
import styles from './styles'

const Home = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const data = useSelector((state) => state.item)
    const loading = useSelector((state) => state.item.loading)

    useEffect(() => {
            dispatch(fetchItems());
    }, []);

    const onPressItem = (item) => {
        navigation.navigate(Strings.ItemDetails, {
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




export default Home