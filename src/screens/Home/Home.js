import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { fetchItems } from '../../redux/Slices/ItemSlice' // import the fetching Cats from Redux
import { useDispatch, useSelector } from 'react-redux'
import { Strings } from '../../constants'
import { ItemCard, Loader } from '../../components' // import custom components
import styles from './styles'

const Home = () => {
    const navigation = useNavigation()
  
    // Redux hooks to access dispatch and state
    const dispatch = useDispatch()
    const data = useSelector((state) => state.item)
    const loading = useSelector((state) => state.item.loading)

    // to dispatch the fetchItems when the component mounts
    useEffect(() => {
            dispatch(fetchItems());
    }, []);

    // function to navigate to the ItemDetails screen
    const onPressItem = (item) => {
        navigation.navigate(Strings.ItemDetails, {
            data: item,
        });
      }

    // / Function to render each item in the FlatList
      const renderItem = ({ item }) => (
        <ItemCard
          itemName={item.breeds[0]?.name}
          itemImage={item.url}
          itemDetail={item.breeds[0]?.life_span}
          onPress={()=>onPressItem(item)}
        />
      );

    // render the header of the FlatList
    const renderHeader = () => {
        return (
          <View >
            <Text style={styles.headerText}>{Strings.Cats}</Text>
          </View>
        );
      }
    
      //  Main component rendering conditionally based on loading state
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

// exporting the Home component as default
export default Home