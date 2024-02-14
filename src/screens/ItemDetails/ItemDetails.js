
import React, { useEffect } from 'react';
import { View, Text, ScrollView, Pressable, Linking } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { Strings } from '../../constants';
import { MapViewCom } from '../../components'; // import custom mapview components
import { fetchLocations } from '../../redux/Slices/LocationSlice'; // import the fetching location Function from Redux
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles'; // import the styles for this component

const ItemDetails = ({ route }) => {
    // Destructuring data from the route params
    const { data } = route?.params;
    const navigation = useNavigation();

    // Redux hooks to access dispatch and state
    const dispatch = useDispatch();
    const latlng = useSelector((state) => state.location.latlng);

    // function to navigate back to the previous screen
    const onPressBack = () => {
        navigation.goBack();
    }

    // to dispatch the fetchLocations when the component mounts or when origin changes
    useEffect(() => {
        dispatch(fetchLocations(data?.breeds[0]?.origin));
    }, [data?.breeds[0]?.origin]);


    // rendering the UI
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

// export the component as default
export default ItemDetails;
