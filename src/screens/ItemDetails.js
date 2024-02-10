
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable, Linking } from 'react-native';
import FastImage from 'react-native-fast-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Strings from '../constants/Strings';
import Colors from '../constants/Colors';
import FontSize from '../constants/FontSize';
import MapViewCom from '../components/MapView';
import { clearValues, fetchLocations } from '../redux/Slices/LocationSlice';
import { useDispatch, useSelector } from 'react-redux';

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
        <ScrollView style={styles.container}
            
        >
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

            <View style={{ height:hp(20)}}>
            <MapViewCom latlng={latlng} />
            </View>

            <View style={{ height: hp(20),  }}></View>


        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
        
    },
    image: {
        width: wp(100),
        height: hp(40),
        resizeMode: 'cover',
    },
    detailsContainer: {
        padding: 16,
    },
    name: {
        fontSize: FontSize.extraLarge,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    altName: {
        fontSize: FontSize.regular,
        color: Colors.black,
        marginBottom: 8,
    },
    description: {
        fontSize: FontSize.regular,
        color: Colors.detailText,
    },

    backButton: {
        position: 'absolute',
        top: hp(6),
        left: wp(5),
        backgroundColor: Colors.pink,
        padding: 10,
        borderRadius: 10,
    },
    gotoWeb: {
        marginTop: hp(3),
        alignSelf: 'center',
        color: Colors.linkColor,

    }
});

export default ItemDetails;
