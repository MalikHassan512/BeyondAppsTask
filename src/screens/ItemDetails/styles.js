import { StyleSheet } from "react-native";
import { Colors, wp, hp, FontSize } from '../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,        
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
    },
    mapContainer: { height: hp(20) },
    bottom: { height: hp(10) },
});


export default styles