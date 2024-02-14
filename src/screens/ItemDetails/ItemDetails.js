
import React, { useEffect } from 'react';
import { View, Text, ScrollView, Pressable, Linking } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { Strings } from '../../constants';
import { MapViewCom } from '../../components';
import { fetchLocations } from '../../redux/Slices/LocationSlice';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';

const ItemDetails = ({ route }) => {
    const { data } = route?.params;
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const latlng = useSelector((state) => state.location.latlng);


    const onPressBack = () => {
        navigation.goBack();
    }

    useEffect(() => {
        dispatch(fetchLocations(data?.breeds[0]?.origin));
    }, [data?.breeds[0]?.origin]);



    return (
        <ScrollView style={styles.container}>
            <FastImage source={{ uri: data.url }} style={styles.image} resizeMode={FastImage.resizeMode.cover} />
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>{Strings.Name} {data?.breeds[0]?.name}</Text>
                {data?.breeds[0]?.alt_names && <Text style={styles.altName}>{Strings.AltName} {data?.breeds[0]?.alt_names}</Text>}
                <Text style={styles.altName}>{Strings.Origin} {data?.breeds[0]?.origin}</Text>
                <Text style={styles.description}>{data?.breeds[0]?.description}</Text>
            </View>

            {/* for more details go to website */}
            <Text style={[styles.altName, styles.gotoWeb]}
                onPress={() => Linking.openURL(data?.breeds[0]?.wikipedia_url)}>{Strings.MoreDetails}</Text>

            <Pressable style={styles.backButton} onPress={onPressBack} >
                <Text>{'<'}</Text>
            </Pressable>

            <View style={styles.mapContainer}>
                <MapViewCom latlng={latlng} />
            </View>
            <View style={styles.bottom} />

        </ScrollView>
    );
}



export default ItemDetails;
